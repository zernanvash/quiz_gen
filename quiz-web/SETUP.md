# 🚀 QuizCraft - Quick Setup Guide

## What You Have

A complete, production-ready quiz web application with:
- ✅ Beautiful, responsive UI
- ✅ Support for DOCX, PDF, TXT files  
- ✅ Multiple question types
- ✅ Automatic grading
- ✅ Results export
- ✅ GitHub Pages ready
- ✅ No build process needed!

## 📁 Project Structure

```
quiz-web/
├── index.html              # Main page
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── parser.js          # File parsing
│   ├── quiz.js            # Quiz logic
│   └── main.js            # UI interactions
├── examples/
│   ├── sample-quiz.txt    # Example quiz
│   └── sample-answers.txt # Example answers
├── .github/
│   └── workflows/
│       └── deploy.yml     # Auto-deployment
├── README.md              # Documentation
├── DEPLOYMENT.md          # Deploy guide
├── CONTRIBUTING.md        # Contribution guide
├── LICENSE                # MIT License
└── .gitignore            # Git ignore rules
```

## 🎯 Deploy to GitHub Pages (5 minutes)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `quizcraft` (or your choice)
3. Description: "Interactive quiz generator web app"
4. Choose Public
5. Click "Create repository"

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**

1. On your new repo page, click "uploading an existing file"
2. Drag the entire `quiz-web` folder contents
3. Commit message: "Initial commit"
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to the quiz-web folder
cd quiz-web

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - QuizCraft app"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/quizcraft.git

# Push
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 4: Wait & Access

- GitHub will deploy your site (1-2 minutes)
- Your site will be live at: `https://YOUR_USERNAME.github.io/quizcraft`
- Check the Pages section for the exact URL

## ✅ Verify It Works

1. Visit your deployed URL
2. Try the sample quiz in `examples/`
3. Upload the sample files
4. Test all features

## 🎨 Customize Your Site

### Change Title/Branding

Edit `index.html`:
```html
<!-- Line ~6 -->
<title>Your Quiz App Name</title>

<!-- Line ~20 -->
<span class="logo-text">Your Name</span>
```

### Change Colors

Edit `css/styles.css`:
```css
/* Line ~4-10 - Change these color variables */
--primary: #6366f1;      /* Main brand color */
--secondary: #ec4899;    /* Accent color */
--accent: #f59e0b;       /* Highlight color */
```

### Update GitHub Links

Find and replace in `index.html`:
```
yourusername → YOUR_GITHUB_USERNAME
```

## 📱 Test Your Site

### Desktop Browsers
- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge

### Mobile
- ✅ iOS Safari
- ✅ Android Chrome

### Features to Test
- ✅ Upload DOCX file
- ✅ Upload PDF file
- ✅ Paste text quiz
- ✅ Take complete quiz
- ✅ View results
- ✅ Download results

## 🔧 Common Issues & Fixes

### Issue: 404 Page Not Found
**Fix**: Ensure `index.html` is in the root of your repository

### Issue: Styles Not Loading
**Fix**: Check that `css/styles.css` path is correct (no leading `/`)

### Issue: Can't Parse DOCX/PDF
**Fix**: Check browser console - CDN scripts should load

### Issue: GitHub Pages Not Deploying
**Fix**: 
1. Check Settings → Pages
2. Ensure correct branch selected
3. Wait 2-3 minutes
4. Check Actions tab for deploy status

## 🎓 Using Your Quiz App

### Create a Quiz File

1. Create a text file with questions:
```
What is Python?
A. A snake
B. A programming language
C. A database
D. A framework

True or False: Python is compiled. (T/F)
```

2. Create answers.txt:
```
B
False
```

3. Upload both to your quiz app!

### Share With Students

Just share your URL:
```
https://YOUR_USERNAME.github.io/quizcraft
```

Students can:
- Upload quiz files
- Take quizzes
- Get instant feedback
- Download results

## 🚀 Next Steps

1. ⭐ Star the repository (for visibility)
2. 📝 Update README with your info
3. 🎨 Customize colors/branding
4. 📱 Share with friends/students
5. 🐛 Report bugs on GitHub
6. 💡 Request features
7. 🤝 Contribute improvements

## 📚 Resources

- **Live Demo**: See it in action
- **Documentation**: Full README.md
- **Deployment Guide**: DEPLOYMENT.md
- **Contributing**: CONTRIBUTING.md
- **Issues**: Report problems
- **Discussions**: Ask questions

## 💬 Get Help

- GitHub Issues: Bug reports
- GitHub Discussions: Questions
- README: Full documentation
- Examples: Sample quiz files

## 🎉 You're Done!

Your quiz app is now:
- ✅ Deployed online
- ✅ Accessible to anyone
- ✅ Free forever
- ✅ Fully functional
- ✅ Easy to update

**Share your URL and start creating quizzes!**

---

Made with ❤️ using QuizCraft

Questions? Open an issue on GitHub!
