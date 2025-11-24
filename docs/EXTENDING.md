# Extending OpenAmazigh

This guide explains how to extend and contribute to OpenAmazigh.

## Adding New Features

### 1. Adding Dictionary Entries

Edit `app/dictionary/page.tsx` and add to the `sampleEntries` array:

```typescript
{
  word: 'ⵉⵎⵣⵉⵏ',
  translation: 'Your translation',
  pronunciation: 'pronunciation',
  example: 'Example sentence',
  category: 'Category',
}
```

### 2. Adding Lessons

Edit `app/learn/[id]/page.tsx` and add to the `lessonContents` object:

```typescript
7: {
  id: 7,
  title: 'Your Lesson Title',
  content: [
    'Lesson content here...',
  ],
  exercises: [
    'Exercise 1',
    'Exercise 2',
  ],
}
```

### 3. Adding Quiz Questions

Edit `app/learn/quiz/page.tsx` and add to `quizQuestions`:

```typescript
{
  question: 'Your question?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correctAnswer: 0,
  explanation: 'Explanation here',
}
```

### 4. Adding Audio Pronunciations

1. Record audio file (WebM, MP3, or OGG format)
2. Upload to `/public/audio/` directory
3. Update dictionary entry with audio URL
4. Use `AudioPlayer` component to play

### 5. Creating API Endpoints

Create new file in `app/api/[endpoint]/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Your endpoint' })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  // Your logic here
  return NextResponse.json({ success: true })
}
```

## Component Structure

### Creating Reusable Components

1. Create component in `components/` directory
2. Use TypeScript for type safety
3. Follow existing component patterns
4. Add to component exports if needed

Example:
```typescript
// components/MyComponent.tsx
'use client'

interface MyComponentProps {
  title: string
  onClick?: () => void
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
    </div>
  )
}
```

## Adding Cultural Content

### Adding to Culture Page

Edit `app/culture/page.tsx` and add to `culturalItems`:

```typescript
{
  id: 8,
  title: 'Your Title',
  description: 'Description here',
  category: 'History' | 'Music' | 'Art' | 'Traditions' | 'Festivals',
  icon: YourIcon,
  color: 'bg-color-500',
  href: '/optional-link',
}
```

## Audio Features

### Recording Audio

Use the `AudioPlayer` component with `onRecord` prop:

```typescript
<AudioPlayer
  word="ⴰⵣⵓⵍ"
  pronunciation="azul"
  onRecord={() => {
    // Handle recording
  }}
/>
```

### Playing Audio

```typescript
<AudioPlayer
  src="/audio/azul.webm"
  word="ⴰⵣⵓⵍ"
  pronunciation="azul"
/>
```

## API Integration

### Using the Contributions API

```typescript
const response = await fetch('/api/contributions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'dictionary',
    title: 'New Word',
    content: 'Details...',
    email: 'user@example.com',
  }),
})
```

### Using the Audio API

```typescript
const formData = new FormData()
formData.append('audio', audioFile)
formData.append('word', 'ⴰⵣⵓⵍ')
formData.append('pronunciation', 'azul')

const response = await fetch('/api/audio', {
  method: 'POST',
  body: formData,
})
```

## Styling Guidelines

- Use Tailwind CSS classes
- Follow existing color scheme (amazigh-primary, amazigh-secondary, etc.)
- Use dark mode classes: `dark:bg-gray-800`
- Maintain responsive design (mobile-first)

## Best Practices

1. **Type Safety**: Always use TypeScript types
2. **Accessibility**: Add ARIA labels and keyboard support
3. **Performance**: Use React hooks efficiently
4. **Error Handling**: Add try-catch blocks for async operations
5. **Documentation**: Comment complex logic
6. **Testing**: Test your changes before submitting

## Contributing Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
6. Respond to feedback

## Questions?

- Check existing code for patterns
- Review API documentation
- Open an issue on GitHub
- Contact the maintainers

