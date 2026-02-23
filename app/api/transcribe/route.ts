import { NextResponse } from 'next/server';
import { validateAudioFile } from '@/lib/validation/fileValidation';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('audio') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const validationError = validateAudioFile(file);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('Missing OPENAI_API_KEY');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API key.' },
        { status: 500 }
      );
    }

    const forwardForm = new FormData();
    forwardForm.append('file', file);
    forwardForm.append('model', 'whisper-1');

    const response = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: forwardForm,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI error:', errorText);

      return NextResponse.json(
        { error: 'Transcription provider error.' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      transcript: data.text,
    });
  } catch (error) {
    console.error('Transcription route crashed:', error);

    return NextResponse.json(
      { error: 'Transcription failed.' },
      { status: 500 }
    );
  }
}
