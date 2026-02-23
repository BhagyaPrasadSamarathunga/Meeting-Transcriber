import { describe, it, expect } from 'vitest';
import { createTextBlob } from '@/lib/utils/createTextBlob';

describe('createTextBlob', () => {
  it('should create a text blob', () => {
    const blob = createTextBlob('Hello');

    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('text/plain;charset=utf-8');
  });
});
