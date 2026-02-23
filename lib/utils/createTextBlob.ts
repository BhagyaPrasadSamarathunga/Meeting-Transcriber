export function createTextBlob(content: string): Blob {
  return new Blob([content], {
    type: 'text/plain;charset=utf-8',
  });
}
