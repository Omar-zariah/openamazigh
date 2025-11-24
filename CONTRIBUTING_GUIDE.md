# Contributing Guide

Thank you for your interest in contributing to OpenAmazigh! This guide will help you get started.

## Ways to Contribute

### 1. Content Contributions

#### Dictionary Entries
- Add new Tamazight words with Tifinagh script
- Improve existing translations
- Add example sentences
- Record audio pronunciations

#### Lessons
- Create new learning lessons
- Improve existing lesson content
- Add exercises and practice materials
- Create lesson quizzes

#### Cultural Content
- Share Amazigh stories and traditions
- Add historical information
- Contribute art and music content
- Write about festivals and celebrations

### 2. Audio Contributions

#### Recording Pronunciations
1. Use the AudioPlayer component to record
2. Ensure clear audio quality
3. Speak naturally and clearly
4. Submit through the contribute page

#### Audio Guidelines
- Format: WebM, MP3, or OGG
- Quality: Clear, no background noise
- Length: Short and focused
- Language: Native speaker preferred

### 3. Code Contributions

#### Bug Fixes
- Fix existing bugs
- Improve error handling
- Optimize performance
- Enhance accessibility

#### New Features
- Add new learning tools
- Create new components
- Extend API functionality
- Improve user experience

#### Documentation
- Improve existing docs
- Add code comments
- Write tutorials
- Create examples

## Getting Started

### Prerequisites
- Node.js 18+
- Git
- Code editor (VS Code recommended)

### Setup

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/yourusername/openamazigh.git
cd openamazigh
```

3. Install dependencies:
```bash
npm install
```

4. Run development server:
```bash
npm run dev
```

5. Open http://localhost:3000

## Contribution Process

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes
- Write clean, readable code
- Follow existing patterns
- Add comments where needed
- Test your changes

### 3. Commit Changes
```bash
git add .
git commit -m "Add: description of your changes"
```

### 4. Push and Create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Code Style

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible

### React Components
- Use functional components
- Use hooks for state management
- Keep components focused and reusable

### Styling
- Use Tailwind CSS
- Follow existing design patterns
- Ensure responsive design
- Support dark mode

## Content Guidelines

### Dictionary Entries
- Include Tifinagh script
- Provide accurate translation
- Add pronunciation guide
- Include example sentence
- Categorize appropriately

### Lessons
- Clear learning objectives
- Progressive difficulty
- Include exercises
- Add cultural context

### Cultural Content
- Accurate and respectful
- Well-researched
- Include sources when possible
- Culturally sensitive

## API Contributions

### Adding Endpoints
1. Create route file in `app/api/[endpoint]/route.ts`
2. Implement GET, POST, PUT, or DELETE
3. Add error handling
4. Document in `docs/API.md`
5. Add example usage

### Testing APIs
- Test with different inputs
- Handle edge cases
- Return proper error codes
- Validate input data

## Audio Contributions

### Recording Tips
- Use good microphone
- Record in quiet environment
- Speak clearly and naturally
- Keep recordings short
- Test playback quality

### Submission
- Use contribute page form
- Upload audio file
- Provide word and pronunciation
- Include any notes

## Review Process

1. **Automated Checks**: Code must pass linting
2. **Code Review**: Maintainers review changes
3. **Testing**: Changes are tested
4. **Approval**: Once approved, changes are merged

## Questions?

- Open an issue on GitHub
- Check existing documentation
- Ask in discussions
- Contact maintainers

## Recognition

All contributors will be:
- Listed in CONTRIBUTORS.md
- Credited in release notes
- Acknowledged in the project

Thank you for helping preserve and promote Amazigh culture! ⵣ

