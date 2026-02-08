# 🎓 QuizCraft - Complete Guide

Welcome to QuizCraft! This guide will help you get your quiz application up and running.

## 📦 What's Included

Your QuizCraft package contains everything you need:

```
quiz-web/
├── 🌐 Web Application
│   ├── index.html (main app)
│   ├── start.html (test page)
│   ├── css/ (styles)
│   └── js/ (functionality)
│
├── 📚 Documentation
│   ├── README.md (full docs)
│   ├── SETUP.md (quick start)
│   ├── DEPLOYMENT.md (hosting)
│   └── CONTRIBUTING.md (dev guide)
│
├── 📂 Examples
│   ├── sample-quiz.txt
│   └── sample-answers.txt
│
└── ⚙️ Configuration
    ├── .github/ (auto-deploy)
    ├── LICENSE (MIT)
    └── .gitignore
```

## 🚀 Three Ways to Use QuizCraft

### Option 1: Test Locally (Instant)

**Perfect for:** Trying it out, testing features

1. Open the `quiz-web` folder
2. Double-click `start.html` OR `index.html`
3. Your browser opens the app
4. Upload example files from `examples/` folder
5. Try creating a quiz!

**Pros:** Instant, no setup
**Cons:** Only works on your computer

---

### Option 2: Deploy to GitHub Pages (Recommended)

**Perfect for:** Sharing with students, permanent hosting, free forever

#### Quick Steps (5 minutes):

1. **Create GitHub Account** (if needed)
   - Go to https://github.com/join
   - Free account is perfect

2. **Create Repository**
   - Go to https://github.com/new
   - Name: `quizcraft`
   - Make it Public
   - Click "Create repository"

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag ALL files from `quiz-web` folder
   - Write commit message: "Initial commit"
   - Click "Commit changes"

4. **Enable Pages**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`, Folder: `/ (root)`
   - Click "Save"

5. **Get Your URL**
   - Wait 2 minutes
   - Your site: `https://YOUR_USERNAME.github.io/quizcraft`
   - Share this with anyone!

**Pros:** Free, permanent, shareable, professional URL
**Cons:** Requires GitHub account (free)

📖 **Detailed Guide:** See `DEPLOYMENT.md`

---

### Option 3: Deploy to Other Hosts

**Perfect for:** Custom domains, enterprise use

#### Popular Options:

**Netlify (Free)**
- Drag & drop the folder
- Instant deployment
- Custom domain support
- https://netlify.com

**Vercel (Free)**
- Connect GitHub repo
- Auto-deploys on updates
- Fast global CDN
- https://vercel.com

**Your Own Server**
- Upload via FTP/SCP
- Any web server works
- No special requirements

**Pros:** More control, custom domains
**Cons:** Slightly more complex

---

## 📖 How to Create Quizzes

### Method 1: Upload Files

Create a text file (`myquiz.txt`):

```
What is the capital of France?
A. London
B. Paris
C. Berlin
D. Madrid

True or False: The Earth is flat. (T/F)

What does CPU stand for? (Short answer)

The largest planet is _____.
```

Create answer key (`answers.txt`):

```
B
False
Central Processing Unit
Jupiter
```

Upload both in the app!

### Method 2: Paste Directly

Copy your questions → Paste in the app → Start quiz!

### Method 3: Use DOCX/PDF

Create in Microsoft Word or Google Docs, upload directly!

---

## 🎯 Supported Question Formats

| Type | Format | Example |
|------|--------|---------|
| **Multiple Choice** | Question + 4 options (A-D) | `What is 2+2?`<br>`A. 3`<br>`B. 4` ✓<br>`C. 5`<br>`D. 6` |
| **True/False** | Question + (T/F) or (True/False) | `Water is wet. (T/F)` ✓ True |
| **Short Answer** | Question + (Short answer) | `Capital of Japan? (Short answer)` ✓ Tokyo |
| **Fill-in-Blank** | Statement with `___` | `The sky is ___.` ✓ blue |

---

## 💡 Pro Tips

### For Teachers

1. **Create Question Banks**
   - Save quiz files by topic
   - Reuse across semesters
   - Share with colleagues

2. **Progressive Difficulty**
   - Start easy, get harder
   - Mix question types
   - Include explanations in feedback

3. **Track Student Progress**
   - Students download their results
   - Compare attempts
   - Identify weak areas

### For Students

1. **Self-Study Mode**
   - Create quizzes from notes
   - Test yourself regularly
   - Track improvement

2. **Group Study**
   - Share quiz files
   - Challenge friends
   - Collaborative learning

3. **Exam Prep**
   - Convert study guides to quizzes
   - Time yourself
   - Review wrong answers

---

## 🎨 Customization

### Change Branding

Edit `index.html` (lines 20-25):
```html
<span class="logo-text">Your School Name</span>
```

### Change Colors

Edit `css/styles.css` (lines 4-10):
```css
--primary: #YOUR_COLOR;
--secondary: #YOUR_COLOR;
```

Use this color picker: https://coolors.co

### Add Your Logo

1. Add logo file to `/assets` folder
2. Edit `index.html`:
```html
<img src="assets/logo.png" alt="Logo">
```

---

## 🔧 Troubleshooting

### App Not Working?

**Check:**
1. Is JavaScript enabled in browser?
2. Are you using a modern browser? (Chrome, Firefox, Safari, Edge)
3. Open browser console (F12) for errors

### Files Not Uploading?

**Check:**
1. File format: .docx, .pdf, or .txt only
2. File size: Under 10MB recommended
3. File isn't corrupted

### Questions Not Parsing?

**Check:**
1. Format matches examples above
2. Multiple choice has exactly 4 options (A-D)
3. Options start with letter + period or parenthesis
4. No extra blank lines between options

### Answer Key Not Working?

**Check:**
1. One answer per line
2. Matches question order
3. Correct format (A/B/C/D for MC, True/False for T/F)

---

## 📊 Features Breakdown

### ✅ What's Included

- [x] Multiple question types
- [x] File upload (DOCX, PDF, TXT)
- [x] Text paste input
- [x] Answer key support
- [x] Automatic grading
- [x] Instant feedback
- [x] Progress tracking
- [x] Results export (JSON)
- [x] Responsive design
- [x] Dark theme
- [x] Keyboard navigation
- [x] Privacy-focused (client-side only)

### 🚧 Coming Soon (Potential Features)

- [ ] Image questions
- [ ] Audio questions
- [ ] Timed quizzes
- [ ] Leaderboards
- [ ] Study modes
- [ ] Flashcards
- [ ] Multi-language support
- [ ] Print results

---

## 🆘 Getting Help

### Documentation
- **README.md** - Full project documentation
- **SETUP.md** - Quick deployment guide
- **DEPLOYMENT.md** - Detailed hosting guide
- **CONTRIBUTING.md** - Developer guide

### Online Resources
- **GitHub Issues** - Report bugs
- **GitHub Discussions** - Ask questions
- **Example Files** - In `examples/` folder

### Common Questions

**Q: Is this free?**
A: Yes! Completely free and open source (MIT License)

**Q: Do I need to code?**
A: No! Just upload files and use it

**Q: Can students see answers?**
A: Only after completing the quiz

**Q: Is data stored online?**
A: No! Everything processes in the browser

**Q: Can I modify it?**
A: Yes! MIT License allows full customization

**Q: Does it work offline?**
A: Not for file parsing (requires CDN libraries)

**Q: Mobile friendly?**
A: Yes! Works on phones and tablets

**Q: How many questions?**
A: No limit! Tested with 100+ questions

---

## 🎉 Success Stories

### Use Cases

**Education:**
- Classroom quizzes
- Homework assignments
- Exam practice
- Self-assessment

**Corporate:**
- Training materials
- Compliance testing
- Onboarding quizzes
- Knowledge checks

**Personal:**
- Study for certifications
- Language learning
- Trivia games
- Memory training

---

## 📞 Support

### Need Help?

1. Check this guide first
2. Review README.md
3. Check examples folder
4. Search existing issues on GitHub
5. Open a new issue with details

### Want to Contribute?

1. Read CONTRIBUTING.md
2. Fork the repository
3. Make improvements
4. Submit pull request

---

## 🎓 Learn More

### Project Links

- **GitHub Repository:** Your repo URL here
- **Live Demo:** Your deployed URL here
- **Documentation:** Full README
- **License:** MIT (free for any use)

### Related Projects

- Mammoth.js (DOCX parsing)
- PDF.js (PDF parsing)
- GitHub Pages (free hosting)

---

## ✨ Final Checklist

Before sharing your quiz app:

- [ ] Tested locally
- [ ] Uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Site loads correctly
- [ ] Example quiz works
- [ ] Customized branding (optional)
- [ ] Updated README with your info
- [ ] Shared URL with students/colleagues

---

## 🙌 Thank You!

You're now ready to create amazing quizzes with QuizCraft!

**Share your feedback:**
- ⭐ Star the repo on GitHub
- 🐛 Report bugs
- 💡 Suggest features
- 📢 Tell others

**Happy Quiz Creating!** 🎓✨

---

*Made with ❤️ for education*

*Last updated: February 2026*
