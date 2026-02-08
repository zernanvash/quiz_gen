// parser.js - Question parsing from various formats

class QuizParser {
    static async parseFile(file) {
        const ext = file.name.split('.').pop().toLowerCase();
        
        if (ext === 'docx') {
            return await this.parseDOCX(file);
        } else if (ext === 'pdf') {
            return await this.parsePDF(file);
        } else if (ext === 'txt' || ext === 'text') {
            return await this.parseTXT(file);
        } else {
            throw new Error('Unsupported file format. Please use DOCX, PDF, or TXT files.');
        }
    }
    
    static async parseDOCX(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = async (e) => {
                try {
                    const arrayBuffer = e.target.result;
                    const result = await mammoth.extractRawText({ arrayBuffer });
                    const questions = this.parseText(result.value);
                    resolve(questions);
                } catch (error) {
                    reject(new Error('Failed to parse DOCX file: ' + error.message));
                }
            };
            
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsArrayBuffer(file);
        });
    }
    
    static async parsePDF(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = async (e) => {
                try {
                    const typedArray = new Uint8Array(e.target.result);
                    const pdf = await pdfjsLib.getDocument(typedArray).promise;
                    
                    let fullText = '';
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items.map(item => item.str).join(' ');
                        fullText += pageText + '\n';
                    }
                    
                    const questions = this.parseText(fullText);
                    resolve(questions);
                } catch (error) {
                    reject(new Error('Failed to parse PDF file: ' + error.message));
                }
            };
            
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsArrayBuffer(file);
        });
    }
    
    static async parseTXT(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const text = e.target.result;
                    const questions = this.parseText(text);
                    resolve(questions);
                } catch (error) {
                    reject(new Error('Failed to parse TXT file: ' + error.message));
                }
            };
            
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsTextFile();
        });
    }
    
    static parseText(text) {
        const questions = [];
        const lines = text.split('\n').map(line => line.trim()).filter(line => line);
        
        let i = 0;
        while (i < lines.length) {
            const line = lines[i];
            
            // Skip headers and empty lines
            if (!line || line.toUpperCase() === 'REVIEWER' || line.toUpperCase() === 'QUIZ' || line.toUpperCase() === 'QUESTIONS') {
                i++;
                continue;
            }
            
            // Try to parse multiple choice question
            if (i + 4 < lines.length) {
                const mcQuestion = this.tryParseMultipleChoice(lines, i);
                if (mcQuestion) {
                    questions.push(mcQuestion);
                    i += 5; // Skip question + 4 options
                    continue;
                }
            }
            
            // Try to parse True/False question
            const tfQuestion = this.tryParseTrueFalse(line);
            if (tfQuestion) {
                questions.push(tfQuestion);
                i++;
                continue;
            }
            
            // Try to parse fill-in-the-blank
            const fibQuestion = this.tryParseFillInBlank(line);
            if (fibQuestion) {
                questions.push(fibQuestion);
                i++;
                continue;
            }
            
            // Try to parse short answer
            const saQuestion = this.tryParseShortAnswer(line);
            if (saQuestion) {
                questions.push(saQuestion);
                i++;
                continue;
            }
            
            i++;
        }
        
        return questions;
    }
    
    static tryParseMultipleChoice(lines, index) {
        const questionText = lines[index];
        const options = {};
        
        // Check if next 4 lines are options A, B, C, D
        for (let j = 1; j <= 4; j++) {
            if (index + j >= lines.length) return null;
            
            const optionLine = lines[index + j];
            const match = optionLine.match(/^([A-D])[.)\s]+(.+)$/);
            
            if (!match) return null;
            
            const letter = match[1];
            const text = match[2].trim();
            options[letter] = text;
        }
        
        // Verify we have all 4 options
        if (Object.keys(options).length === 4 && 
            options.A && options.B && options.C && options.D) {
            return {
                type: 'multiple_choice',
                question: questionText,
                options: options,
                correctAnswer: null, // Will be set by answer key
                userAnswer: null
            };
        }
        
        return null;
    }
    
    static tryParseTrueFalse(line) {
        // Check if line contains (True/False) or (T/F) pattern
        if (/(True\/False)|(T\/F)/i.test(line)) {
            const questionText = line.replace(/\(True\/False\)|\(T\/F\)/gi, '').trim();
            return {
                type: 'true_false',
                question: questionText,
                correctAnswer: null, // Will be set by answer key
                userAnswer: null
            };
        }
        return null;
    }
    
    static tryParseFillInBlank(line) {
        // Check if line contains underscores for blanks
        if (/_{3,}/.test(line)) {
            return {
                type: 'fill_in_blank',
                question: line,
                correctAnswers: [], // Will be set by answer key
                userAnswer: null
            };
        }
        return null;
    }
    
    static tryParseShortAnswer(line) {
        // Check if line explicitly mentions short answer
        if (/\(Short answer\)/i.test(line)) {
            const questionText = line.replace(/\(Short answer\)/gi, '').trim();
            return {
                type: 'short_answer',
                question: questionText,
                correctAnswers: [], // Will be set by answer key
                userAnswer: null
            };
        }
        return null;
    }
    
    static parseAnswerKey(text, questions) {
        // Try to parse as JSON first
        try {
            const answers = JSON.parse(text);
            this.applyAnswersFromArray(answers, questions);
            return questions;
        } catch (e) {
            // Parse as line-by-line text
            const lines = text.split('\n')
                .map(line => line.trim())
                .filter(line => line);
            
            this.applyAnswersFromArray(lines, questions);
            return questions;
        }
    }
    
    static applyAnswersFromArray(answers, questions) {
        for (let i = 0; i < Math.min(answers.length, questions.length); i++) {
            const answer = answers[i];
            const question = questions[i];
            
            if (question.type === 'multiple_choice') {
                question.correctAnswer = String(answer).toUpperCase().trim();
            } else if (question.type === 'true_false') {
                const ansStr = String(answer).toLowerCase();
                question.correctAnswer = ansStr === 'true' || ansStr === 't' || ansStr === '1' || ansStr === 'yes';
            } else if (question.type === 'short_answer' || question.type === 'fill_in_blank') {
                if (Array.isArray(answer)) {
                    question.correctAnswers = answer;
                } else if (typeof answer === 'string' && answer.includes(',')) {
                    question.correctAnswers = answer.split(',').map(a => a.trim());
                } else {
                    question.correctAnswers = [String(answer)];
                }
            }
        }
    }
}

// Export for use in other modules
window.QuizParser = QuizParser;
