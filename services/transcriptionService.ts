import type { TranscriptionResponse } from '@/types/transcription';

export async function transcribeAudio(
  file: File
): Promise<TranscriptionResponse> {
  const formData = new FormData();
  formData.append('audio', file);

  const res = await fetch('/api/transcribe', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Transcription failed');
  }

  return data;
}
