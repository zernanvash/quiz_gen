// main.js - Main application logic and UI interactions

let currentQuiz = null;
let questions = [];

// Initialize PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Smooth scroll helper
function scrollToQuiz() {
    document.getElementById('quiz-app').scrollIntoView({ behavior: 'smooth' });
}

// Demo modal (placeholder)
function showDemo() {
    alert('Demo video coming soon! For now, try uploading a quiz file to get started.');
}

// File upload handlers
document.getElementById('file-input')?.addEventListener('change', handleFileUpload);
document.getElementById('answer-key-input')?.addEventListener('change', handleAnswerKeyUpload);

async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    showLoading('Parsing your quiz file...');
    
    try {
        questions = await QuizParser.parseFile(file);
        
        if (questions.length === 0) {
            throw new Error('No questions found in the file. Please check the format.');
        }
        
        hideLoading();
        showNotification(`Successfully loaded ${questions.length} questions!`, 'success');
        
        // Check if we should start quiz immediately or wait for answer key
        const hasAnswers = questions.some(q => 
            q.correctAnswer !== null || 
            (q.correctAnswers && q.correctAnswers.length > 0)
        );
        
        if (hasAnswers) {
            startQuiz(file.name);
        } else {
            showNotification('Upload an answer key to enable grading, or start the quiz in practice mode.', 'info');
        }
        
    } catch (error) {
        hideLoading();
        showNotification('Error: ' + error.message, 'error');
    }
}

async function handleAnswerKeyUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (questions.length === 0) {
        showNotification('Please upload a quiz file first!', 'warning');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const text = e.target.result;
            QuizParser.parseAnswerKey(text, questions);
            showNotification('Answer key applied successfully!', 'success');
            
            // Ask if user wants to start now
            if (confirm('Answer key loaded! Start the quiz now?')) {
                startQuiz('Quiz');
            }
        } catch (error) {
            showNotification('Error parsing answer key: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
}

function parseTextInput() {
    const text = document.getElementById('paste-input').value.trim();
    
    if (!text) {
        showNotification('Please paste your quiz questions first!', 'warning');
        return;
    }
    
    try {
        questions = QuizParser.parseText(text);
        
        if (questions.length === 0) {
            throw new Error('No questions found. Please check your format.');
        }
        
        showNotification(`Successfully parsed ${questions.length} questions!`, 'success');
        
        // Ask about answer key
        const needAnswers = confirm('Do you want to add an answer key for grading?');
        if (needAnswers) {
            showAnswerKeyPaste();
        } else {
            startQuiz('Custom Quiz');
        }
        
    } catch (error) {
        showNotification('Error: ' + error.message, 'error');
    }
}

function showAnswerKeyPaste() {
    const container = document.getElementById('answer-key-paste');
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth' });
}

function parseAnswerKey() {
    const text = document.getElementById('answer-paste-input').value.trim();
    
    if (!text) {
        showNotification('Please paste your answers first!', 'warning');
        return;
    }
    
    if (questions.length === 0) {
        showNotification('Please create or upload questions first!', 'warning');
        return;
    }
    
    try {
        QuizParser.parseAnswerKey(text, questions);
        showNotification('Answer key applied successfully!', 'success');
        
        if (confirm('Answer key loaded! Start the quiz now?')) {
            startQuiz('Custom Quiz');
        }
    } catch (error) {
        showNotification('Error parsing answer key: ' + error.message, 'error');
    }
}

// Quiz flow
function startQuiz(title) {
    if (questions.length === 0) {
        showNotification('No questions to display!', 'error');
        return;
    }
    
    currentQuiz = new Quiz(questions, title);
    
    // Update UI
    document.getElementById('quiz-title').textContent = title;
    document.getElementById('question-count').textContent = `${questions.length} questions`;
    
    // Show quiz screen
    showScreen('quiz-screen');
    
    // Start the quiz
    currentQuiz.start();
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    const question = currentQuiz.getCurrentQuestion();
    const container = document.getElementById('question-container');
    
    // Update progress
    const progress = currentQuiz.getProgress();
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    const questionNumber = currentQuiz.currentQuestionIndex + 1;
    const totalQuestions = currentQuiz.questions.length;
    document.getElementById('question-indicator').textContent = `${questionNumber} / ${totalQuestions}`;
    
    // Render question based on type
    let html = `<div class="question-card">
        <div class="question-text">${questionNumber}. ${question.question}</div>`;
    
    if (question.type === 'multiple_choice') {
        html += '<div class="options-list">';
        ['A', 'B', 'C', 'D'].forEach(letter => {
            const isSelected = question.userAnswer === letter;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption('${letter}')">
                    <div class="option-label">${letter}</div>
                    <div class="option-text">${question.options[letter]}</div>
                </div>
            `;
        });
        html += '</div>';
    } else if (question.type === 'true_false') {
        html += `
            <div class="options-list">
                <div class="option ${question.userAnswer === 'true' ? 'selected' : ''}" onclick="selectOption('true')">
                    <div class="option-label">T</div>
                    <div class="option-text">True</div>
                </div>
                <div class="option ${question.userAnswer === 'false' ? 'selected' : ''}" onclick="selectOption('false')">
                    <div class="option-label">F</div>
                    <div class="option-text">False</div>
                </div>
            </div>
        `;
    } else {
        const placeholder = question.type === 'fill_in_blank' ? 
            'Type your answer to fill in the blank...' : 
            'Type your short answer...';
        const value = question.userAnswer || '';
        html += `
            <input type="text" 
                   class="text-input" 
                   placeholder="${placeholder}"
                   value="${value}"
                   onchange="answerTextQuestion(this.value)">
        `;
    }
    
    html += '</div>';
    container.innerHTML = html;
    
    // Update navigation buttons
    updateNavigationButtons();
}

function selectOption(value) {
    currentQuiz.answerQuestion(value);
    displayCurrentQuestion();
}

function answerTextQuestion(value) {
    currentQuiz.answerQuestion(value);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = !currentQuiz.canGoPrevious();
    
    if (currentQuiz.isLastQuestion()) {
        nextBtn.textContent = 'Finish Quiz';
        nextBtn.onclick = finishQuiz;
    } else {
        nextBtn.innerHTML = `
            Next
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
        nextBtn.onclick = nextQuestion;
    }
}

function nextQuestion() {
    if (currentQuiz.nextQuestion()) {
        displayCurrentQuestion();
    }
}

function previousQuestion() {
    if (currentQuiz.previousQuestion()) {
        displayCurrentQuestion();
    }
}

function finishQuiz() {
    // Check if all questions are answered
    const unanswered = currentQuiz.questions.filter(q => !q.userAnswer).length;
    
    if (unanswered > 0) {
        const confirm = window.confirm(
            `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Finish anyway?`
        );
        if (!confirm) return;
    }
    
    const results = currentQuiz.finish();
    displayResults(results);
}

function displayResults(results) {
    showScreen('results-screen');
    
    // Update score circle
    const percentage = results.percentage;
    document.getElementById('score-percent').textContent = `${Math.round(percentage)}%`;
    
    // Animate score ring
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        document.getElementById('score-ring').style.strokeDashoffset = offset;
    }, 100);
    
    // Update summary
    document.getElementById('correct-count').textContent = results.correctCount;
    document.getElementById('incorrect-count').textContent = results.incorrectCount;
    document.getElementById('total-time').textContent = currentQuiz.formatDuration(results.duration);
    
    // Display detailed results
    const detailsContainer = document.getElementById('results-details');
    let html = '';
    
    results.questions.forEach((q, idx) => {
        const icon = q.isCorrect ? '✓' : '✗';
        const statusClass = q.isCorrect ? 'correct' : 'incorrect';
        
        html += `
            <div class="result-item ${statusClass}">
                <div class="result-header">
                    <div class="result-icon">${icon}</div>
                    <div class="result-question">${idx + 1}. ${q.question}</div>
                </div>
                <div class="result-answer">Your answer: <strong>${q.userAnswer || 'Not answered'}</strong></div>
        `;
        
        if (!q.isCorrect) {
            html += `<div class="result-correct">Correct answer: ${currentQuiz.getCorrectAnswerText(q)}</div>`;
        }
        
        html += '</div>';
    });
    
    detailsContainer.innerHTML = html;
}

function downloadResults() {
    if (!currentQuiz) return;
    
    const results = currentQuiz.finish();
    const exportData = currentQuiz.exportResults(results);
    
    // Create JSON file
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-results-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Results downloaded successfully!', 'success');
}

function retakeQuiz() {
    if (!currentQuiz) return;
    
    if (confirm('Are you sure you want to retake the quiz? This will clear your current answers.')) {
        currentQuiz.reset();
        currentQuiz.start();
        showScreen('quiz-screen');
        displayCurrentQuestion();
    }
}

function newQuiz() {
    if (confirm('Start a new quiz? This will clear your current progress.')) {
        currentQuiz = null;
        questions = [];
        document.getElementById('file-input').value = '';
        document.getElementById('answer-key-input').value = '';
        document.getElementById('paste-input').value = '';
        document.getElementById('answer-paste-input').value = '';
        showScreen('upload-screen');
    }
}

function exitQuiz() {
    if (confirm('Exit the quiz? Your progress will be lost.')) {
        currentQuiz.stopTimer();
        currentQuiz = null;
        showScreen('upload-screen');
    }
}

// UI helpers
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    
    // Scroll to top of app
    document.getElementById('quiz-app').scrollIntoView({ behavior: 'smooth' });
}

function showLoading(message) {
    // Simple loading implementation
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
    `;
    overlay.textContent = message;
    document.body.appendChild(overlay);
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.remove();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#6366f1'};
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add SVG gradient for score ring
window.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('.score-ring');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'scoreGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6366f1');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#ec4899');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
