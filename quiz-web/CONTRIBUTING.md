# Contributing to QuizCraft

Thank you for your interest in contributing to QuizCraft! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Assume good intentions

## Getting Started

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/quizcraft.git
   cd quizcraft
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Edit files as needed
   - Test in multiple browsers
   - Ensure responsive design works

4. **Test Your Changes**
   - Open `index.html` in browsers
   - Test all question types
   - Try different file formats
   - Check mobile responsiveness

## Development Process

### Project Structure

```
quizcraft/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── parser.js       # File parsing logic
│   ├── quiz.js         # Quiz state management
│   └── main.js         # UI interactions
├── examples/           # Sample quiz files
├── .github/            # GitHub configurations
└── README.md
```

### Key Principles

1. **No Build Step** - Keep the project buildless
2. **Vanilla JavaScript** - No frameworks or transpilers
3. **Browser Compatibility** - Support modern browsers
4. **Privacy First** - All processing client-side
5. **Accessibility** - Follow WCAG guidelines

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Include ARIA labels where appropriate
- Maintain proper heading hierarchy
- Use meaningful class names

```html
<!-- Good -->
<section class="quiz-section" aria-label="Quiz Application">
  <h2>Quiz Questions</h2>
</section>

<!-- Avoid -->
<div class="section">
  <div class="title">Quiz Questions</div>
</div>
```

### CSS

- Use CSS custom properties for theming
- Follow BEM naming convention loosely
- Mobile-first responsive design
- Smooth transitions and animations

```css
/* Good */
.feature-card {
  background: var(--surface);
  transition: transform var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-8px);
}

/* Avoid inline styles and !important */
```

### JavaScript

- Use modern ES6+ features
- Prefer const/let over var
- Write descriptive function names
- Add comments for complex logic
- Handle errors gracefully

```javascript
// Good
async function parseQuizFile(file) {
  try {
    const questions = await QuizParser.parseFile(file);
    return questions;
  } catch (error) {
    showNotification('Failed to parse file: ' + error.message, 'error');
    return [];
  }
}

// Avoid unclear naming
async function doStuff(f) {
  return await parser.parse(f);
}
```

## Feature Development

### Adding New Question Types

1. Update `QuizParser` to detect new type
2. Add parsing logic in `parser.js`
3. Update `Quiz` class to handle new type
4. Add UI rendering in `main.js`
5. Update documentation

### Adding File Format Support

1. Add parsing function in `parser.js`
2. Include necessary libraries via CDN
3. Update file input accept attribute
4. Test thoroughly
5. Update README

## Testing

### Manual Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS and Android)
- [ ] Upload DOCX files
- [ ] Upload PDF files
- [ ] Upload TXT files
- [ ] Paste text directly
- [ ] Test with/without answer keys
- [ ] Complete full quiz flow
- [ ] Test all question types
- [ ] Download results
- [ ] Test error cases (invalid files, etc.)

### Browser Compatibility

Minimum versions:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Accessibility Testing

- Test with keyboard navigation
- Test with screen readers
- Check color contrast ratios
- Verify ARIA labels

## Submitting Changes

### Pull Request Process

1. **Update Your Branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add feature: descriptive commit message"
   ```

   Follow conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Adding tests
   - `chore:` Maintenance

3. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**
   - Go to GitHub and create PR
   - Fill out the PR template
   - Link any related issues
   - Request review

### PR Guidelines

- One feature/fix per PR
- Include description of changes
- Add screenshots for UI changes
- Ensure all tests pass
- Update documentation
- Keep commits clean and atomic

### PR Template

```markdown
## Description
Brief description of the change

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested on multiple browsers
- [ ] Tested on mobile
- [ ] Added/updated tests

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No breaking changes
```

## Reporting Bugs

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- Browser: [e.g. Chrome 120]
- OS: [e.g. macOS 14]
- Device: [e.g. iPhone 15]

**Additional context**
Any other relevant information
```

## Feature Requests

We love feature ideas! Please:

1. Check existing issues first
2. Describe the feature clearly
3. Explain the use case
4. Provide examples if possible
5. Discuss alternatives considered

## Documentation

When adding features:

- Update README.md
- Add code comments
- Update DEPLOYMENT.md if needed
- Create examples if applicable
- Update inline help text

## Community

- **GitHub Discussions**: Ask questions, share ideas
- **Issues**: Report bugs, request features
- **Pull Requests**: Contribute code
- **Twitter/X**: Share your experience

## Recognition

Contributors will be:
- Added to README contributors section
- Mentioned in release notes
- Credited in commits

## Questions?

- Open a GitHub Discussion
- Comment on related issues
- Reach out to maintainers

Thank you for contributing to QuizCraft! 🎉
