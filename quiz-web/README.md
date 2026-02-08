# QuizCraft 📚

A beautiful, interactive web-based quiz generator that transforms your study materials into engaging quizzes. Upload DOCX, PDF, or text files and get instant quizzes with automatic grading, detailed feedback, and downloadable results.

![QuizCraft Banner](https://via.placeholder.com/1200x400/1a1a2e/6366f1?text=QuizCraft+-+Interactive+Quiz+Generator)

## ✨ Features

- **📝 Smart Question Parser** - Automatically detects multiple choice, true/false, short answer, and fill-in-the-blank questions
- **⚡ Instant Grading** - Get immediate feedback with automatic scoring and percentage calculation
- **📊 Detailed Analytics** - Review comprehensive reports showing correct answers and areas for improvement
- **💾 Export Results** - Download quiz results in JSON format for tracking progress
- **🎨 Multiple Formats** - Support for DOCX, PDF, and plain text files
- **🔒 Privacy First** - All processing happens in your browser - your files never leave your device
- **📱 Responsive Design** - Works beautifully on desktop, tablet, and mobile devices
- **🌙 Dark Theme** - Easy on the eyes with a modern dark interface

## 🚀 Quick Start

### Option 1: Use Online (Recommended)

Visit the live demo: [https://yourusername.github.io/quizcraft](https://yourusername.github.io/quizcraft)

### Option 2: Run Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quizcraft.git
cd quizcraft
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

That's it! No build process or dependencies required.

### Option 3: Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/quizcraft`

## 📖 How to Use

### Step 1: Prepare Your Quiz File

Create a text file with your questions in one of these formats:

#### Multiple Choice
```
What is Python?
A. A snake
B. A programming language
C. A database
D. A framework
```

#### True/False
```
Python is a compiled language. (True/False)
```

#### Short Answer
```
What does HTML stand for? (Short answer)
```

#### Fill-in-the-Blank
```
The Python keyword to define a function is _____.
```

### Step 2: Create an Answer Key (Optional)

Create a text file with one answer per line:

```
B
False
Hypertext Markup Language
def
```

Or use JSON format for multiple acceptable answers:

```json
[
  "B",
  false,
  ["Hypertext Markup Language", "HTML"],
  ["def"]
]
```

### Step 3: Upload and Take the Quiz

1. Visit the QuizCraft website
2. Upload your quiz file (or paste the text)
3. Optionally upload an answer key
4. Start the quiz!
5. Review your results and download them

## 🎯 Supported Question Types

| Type | Description | Example |
|------|-------------|---------|
| **Multiple Choice** | Questions with 4 options (A, B, C, D) | `What is 2+2?`<br>`A. 3`<br>`B. 4`<br>`C. 5`<br>`D. 6` |
| **True/False** | Binary questions | `The sky is blue. (T/F)` |
| **Short Answer** | Open-ended questions | `What is the capital of France? (Short answer)` |
| **Fill-in-the-Blank** | Complete the sentence | `Water is composed of hydrogen and _____.` |

## 📁 File Formats

### Supported Input Formats

- **DOCX** - Microsoft Word documents
- **PDF** - Portable Document Format
- **TXT** - Plain text files

### Answer Key Formats

- **TXT** - One answer per line
- **JSON** - Structured format with support for multiple acceptable answers

## 🛠️ Technology Stack

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks!)
- **File Parsing**: 
  - [Mammoth.js](https://github.com/mwilliamson/mammoth.js) for DOCX
  - [PDF.js](https://github.com/mozilla/pdf.js) for PDF
- **Styling**: Custom CSS with modern design patterns
- **Fonts**: 
  - [Outfit](https://fonts.google.com/specimen/Outfit) for display
  - [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for code

## 🎨 Design Philosophy

QuizCraft features a distinctive educational tech aesthetic with:

- **Dark theme** optimized for extended study sessions
- **Bold gradients** for visual hierarchy and engagement
- **Smooth animations** for delightful micro-interactions
- **Clean typography** for maximum readability
- **Floating cards** and modern UI patterns

## 📊 Example Quiz Files

Check out the `examples/` directory for sample quiz files:

- `sample-programming.txt` - Programming concepts quiz
- `sample-history.docx` - Historical events quiz  
- `sample-science.pdf` - Science trivia quiz
- `answer-keys/` - Corresponding answer keys

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Keep the codebase vanilla JavaScript (no frameworks)
- Follow the existing code style
- Test on multiple browsers
- Update documentation for new features

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Mammoth.js** - For excellent DOCX parsing
- **PDF.js** - For robust PDF rendering
- **Google Fonts** - For beautiful typography
- All contributors and users of QuizCraft!

## 📧 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Issues**: [GitHub Issues](https://github.com/yourusername/quizcraft/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/quizcraft/discussions)

## 🗺️ Roadmap

- [ ] Add support for image-based questions
- [ ] Implement quiz templates
- [ ] Add study mode with flashcards
- [ ] Create mobile apps (iOS/Android)
- [ ] Add collaborative quiz creation
- [ ] Implement quiz sharing features
- [ ] Add gamification elements
- [ ] Support for multiple languages

## ⭐ Star History

If you find QuizCraft useful, please consider giving it a star on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/quizcraft&type=Date)](https://star-history.com/#yourusername/quizcraft&Date)

---

**Made with ❤️ for students and educators**

[Live Demo](https://yourusername.github.io/quizcraft) | [Report Bug](https://github.com/yourusername/quizcraft/issues) | [Request Feature](https://github.com/yourusername/quizcraft/issues)
