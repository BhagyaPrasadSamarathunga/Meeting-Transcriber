import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FileUpload from '@/components/FileUpload';

describe('FileUpload Component', () => {
  it('renders transcribe button', () => {
    render(<FileUpload onUpload={vi.fn()} loading={false} />);
    expect(
      screen.getByRole('button', { name: /transcribe/i })
    ).toBeInTheDocument();
  });

  it('calls onUpload when file selected and button clicked', () => {
    const mockUpload = vi.fn();

    render(<FileUpload onUpload={mockUpload} loading={false} />);

    const file = new File(['test'], 'audio.mp3', {
      type: 'audio/mp3',
    });

    const input = screen.getByTestId('file-input');

    fireEvent.change(input, {
      target: { files: [file] },
    });

    fireEvent.click(screen.getByRole('button', { name: /transcribe/i }));

    expect(mockUpload).toHaveBeenCalledTimes(1);
  });
});
