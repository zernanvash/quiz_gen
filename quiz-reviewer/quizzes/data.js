// quizzes/data.js - Quiz data storage
// Add your quizzes to this file!

const QUIZZES = [
    {
        id: 'general-knowledge',
        title: 'General Knowledge',
        description: 'Test your general knowledge with this fun quiz',
        icon: '🌍',
        questions: [
            {
                type: 'multiple_choice',
                question: 'What is the capital of France?',
                options: {
                    A: 'London',
                    B: 'Paris',
                    C: 'Berlin',
                    D: 'Madrid'
                },
                correctAnswer: 'B'
            },
            {
                type: 'multiple_choice',
                question: 'Which planet is known as the Red Planet?',
                options: {
                    A: 'Venus',
                    B: 'Jupiter',
                    C: 'Mars',
                    D: 'Saturn'
                },
                correctAnswer: 'C'
            },
            {
                type: 'true_false',
                question: 'The Great Wall of China is visible from space.',
                correctAnswer: false
            },
            {
                type: 'multiple_choice',
                question: 'What is the largest ocean on Earth?',
                options: {
                    A: 'Atlantic Ocean',
                    B: 'Indian Ocean',
                    C: 'Arctic Ocean',
                    D: 'Pacific Ocean'
                },
                correctAnswer: 'D'
            },
            {
                type: 'true_false',
                question: 'Python is a type of programming language.',
                correctAnswer: true
            }
        ]
    },
    {
        id: 'math-basics',
        title: 'Math Basics',
        description: 'Practice fundamental mathematics concepts',
        icon: '🔢',
        questions: [
            {
                type: 'multiple_choice',
                question: 'What is 15 + 27?',
                options: {
                    A: '42',
                    B: '41',
                    C: '43',
                    D: '40'
                },
                correctAnswer: 'A'
            },
            {
                type: 'multiple_choice',
                question: 'What is the square root of 64?',
                options: {
                    A: '6',
                    B: '7',
                    C: '8',
                    D: '9'
                },
                correctAnswer: 'C'
            },
            {
                type: 'true_false',
                question: 'A triangle has four sides.',
                correctAnswer: false
            },
            {
                type: 'multiple_choice',
                question: 'What is 12 × 8?',
                options: {
                    A: '84',
                    B: '96',
                    C: '104',
                    D: '88'
                },
                correctAnswer: 'B'
            },
            {
                type: 'true_false',
                question: 'Pi (π) is approximately equal to 3.14.',
                correctAnswer: true
            }
        ]
    },
    {
        id: 'programming-basics',
        title: 'Programming Basics',
        description: 'Test your knowledge of programming fundamentals',
        icon: '💻',
        questions: [
            {
                type: 'multiple_choice',
                question: 'What is Python?',
                options: {
                    A: 'A snake',
                    B: 'A programming language',
                    C: 'A database system',
                    D: 'A web browser'
                },
                correctAnswer: 'B'
            },
            {
                type: 'multiple_choice',
                question: 'Which data structure is ordered and mutable in Python?',
                options: {
                    A: 'Tuple',
                    B: 'Set',
                    C: 'List',
                    D: 'Dictionary'
                },
                correctAnswer: 'C'
            },
            {
                type: 'true_false',
                question: 'Python is a compiled language.',
                correctAnswer: false
            },
            {
                type: 'multiple_choice',
                question: 'What does HTML stand for?',
                options: {
                    A: 'Hyper Text Markup Language',
                    B: 'High Tech Modern Language',
                    C: 'Home Tool Markup Language',
                    D: 'Hyperlinks and Text Markup Language'
                },
                correctAnswer: 'A'
            },
            {
                type: 'true_false',
                question: 'JavaScript and Java are the same language.',
                correctAnswer: false
            }
        ]
    }
];
