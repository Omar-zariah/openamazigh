# OpenAmazigh API Documentation

This document describes the API structure for extending and integrating with OpenAmazigh.

## Base URL

```
/api
```

## Endpoints

### Contributions API

#### POST `/api/contributions`

Submit a new contribution to the platform.

**Request Body:**
```json
{
  "type": "dictionary" | "lesson" | "audio" | "cultural" | "other",
  "title": "string",
  "content": "string",
  "email": "string",
  "notes": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contribution received successfully",
  "id": "contribution-id"
}
```

### Audio API

#### POST `/api/audio`

Upload audio pronunciation file.

**Form Data:**
- `audio`: File (audio file)
- `word`: string (word in Tifinagh)
- `pronunciation`: string (phonetic pronunciation)

**Response:**
```json
{
  "success": true,
  "message": "Audio uploaded successfully",
  "url": "/audio/word-timestamp.webm"
}
```

#### GET `/api/audio?word=ⴰⵣⵓⵍ`

Retrieve audio for a specific word.

**Response:**
```json
{
  "word": "ⴰⵣⵓⵍ",
  "audioUrl": "/audio/azul.webm"
}
```

### Dictionary API

#### GET `/api/dictionary?q=word&category=greetings`

Search dictionary entries.

**Query Parameters:**
- `q`: Search query
- `category`: Filter by category

**Response:**
```json
{
  "query": "azul",
  "category": "greetings",
  "results": [
    {
      "word": "ⴰⵣⵓⵍ",
      "translation": "Hello / Peace",
      "pronunciation": "azul",
      "example": "ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ",
      "category": "Greetings"
    }
  ]
}
```

#### POST `/api/dictionary`

Add new dictionary entry.

**Request Body:**
```json
{
  "word": "ⴰⵣⵓⵍ",
  "translation": "Hello / Peace",
  "pronunciation": "azul",
  "example": "ⴰⵣⵓⵍ ⵏⵏⴰⵏⵏⵉⵏ",
  "category": "Greetings"
}
```

## Extending the API

### Adding New Endpoints

1. Create a new route file in `app/api/[endpoint]/route.ts`
2. Export GET, POST, PUT, or DELETE functions
3. Handle request/response properly
4. Add error handling
5. Document in this file

### Example: Adding a Lessons API

```typescript
// app/api/lessons/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    lessons: [
      // lesson data
    ]
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  // Save lesson logic
  return NextResponse.json({ success: true })
}
```

## Integration Examples

### Submitting a Contribution

```javascript
const response = await fetch('/api/contributions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    type: 'dictionary',
    title: 'New Word',
    content: 'Word details...',
    email: 'user@example.com',
  }),
})

const data = await response.json()
```

### Uploading Audio

```javascript
const formData = new FormData()
formData.append('audio', audioFile)
formData.append('word', 'ⴰⵣⵓⵍ')
formData.append('pronunciation', 'azul')

const response = await fetch('/api/audio', {
  method: 'POST',
  body: formData,
})

const data = await response.json()
```

### Collections API

#### GET `/api/collections`

Get all word collections for a user.

**Response:**
```json
{
  "collections": [
    {
      "id": "collection-id",
      "name": "Collection Name",
      "words": ["word1", "word2"],
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### POST `/api/collections`

Create a new word collection.

**Request Body:**
```json
{
  "name": "Collection Name",
  "words": ["word1", "word2"]
}
```

### Achievements API

#### GET `/api/achievements`

Get user achievements.

**Response:**
```json
{
  "achievements": [
    {
      "id": "achievement-id",
      "unlocked": true,
      "unlockedAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### POST `/api/achievements`

Unlock an achievement.

**Request Body:**
```json
{
  "achievementId": "achievement-id",
  "userId": "user-id"
}
```

## Future API Endpoints

- `/api/lessons` - Lesson management
- `/api/users` - User profiles and progress
- `/api/culture` - Cultural content management
- `/api/analytics` - Usage statistics
- `/api/export` - Data export functionality
- `/api/streaks` - Study streak tracking

## Authentication

Currently, the API is open. For production, consider adding:
- API keys for contributors
- User authentication
- Rate limiting
- Input validation and sanitization

## Storage

For production, integrate with:
- Database (PostgreSQL, MongoDB, etc.)
- File storage (AWS S3, Cloudinary, etc.)
- CDN for audio/video files

