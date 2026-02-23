import { describe, it, expect, vi } from 'vitest';
import { transcribeAudio } from '@/services/transcriptionService';

describe('transcribeAudio', () => {
  it('should return transcript when API succeeds', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ transcript: 'Test transcript' }),
      } as Response)
    ) as any;

    const file = new File(['test'], 'audio.mp3', {
      type: 'audio/mp3',
    });

    const result = await transcribeAudio(file);

    expect(result.transcript).toBe('Test transcript');
  });

  it('should throw error when API fails', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Failed' }),
      } as Response)
    ) as any;

    const file = new File(['test'], 'audio.mp3', {
      type: 'audio/mp3',
    });

    await expect(transcribeAudio(file)).rejects.toThrow();
  });
});
