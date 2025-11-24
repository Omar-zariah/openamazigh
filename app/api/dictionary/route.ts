import { NextRequest, NextResponse } from 'next/server'

// API endpoint for dictionary operations
// Allows for dynamic dictionary management and extensions

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const category = searchParams.get('category')

  // In a real app, this would query a database
  // For now, return a structure showing how it would work

  return NextResponse.json({
    message: 'Dictionary API endpoint',
    query,
    category,
    results: [], // Would contain actual dictionary entries
    endpoints: {
      GET: '/api/dictionary?q=word&category=greetings - Search dictionary',
      POST: '/api/dictionary - Add new dictionary entry',
      PUT: '/api/dictionary/:id - Update dictionary entry',
      DELETE: '/api/dictionary/:id - Delete dictionary entry',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { word, translation, pronunciation, example, category } = body

    if (!word || !translation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a real app, save to database
    return NextResponse.json(
      {
        success: true,
        message: 'Dictionary entry added successfully',
        id: Math.random().toString(36).substring(7),
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

