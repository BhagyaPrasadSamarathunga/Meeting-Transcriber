export function validateAudioFile(file: File): string | null {
  if (!file.type.startsWith('audio/')) {
    return 'Only audio files are allowed.';
  }

  return null;
}
