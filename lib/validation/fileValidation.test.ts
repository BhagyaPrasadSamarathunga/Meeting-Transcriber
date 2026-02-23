import { describe, it, expect } from 'vitest';
import { validateAudioFile } from '@/lib/validation/fileValidation';

describe('validateAudioFile', () => {
  it('should reject non-audio files', () => {
    const file = new File(['test'], 'test.txt', {
      type: 'text/plain',
    });

    const result = validateAudioFile(file);

    expect(result).not.toBeNull();
    expect(result?.toLowerCase()).toContain('audio');
  });

  it('should accept valid audio file', () => {
    const file = new File(['test'], 'audio.mp3', {
      type: 'audio/mp3',
    });

    const result = validateAudioFile(file);

    expect(result).toBeNull();
  });
});
