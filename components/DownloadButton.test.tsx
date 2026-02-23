import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import DownloadButton from './DownloadButton';

vi.mock('@/lib/utils/createTextBlob', () => ({
  createTextBlob: vi.fn(
    () => new Blob(['mock transcript'], { type: 'text/plain' })
  ),
}));

describe('DownloadButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders button', () => {
    render(<DownloadButton transcript="Test transcript" />);
    expect(
      screen.getByRole('button', { name: /download transcript/i })
    ).toBeInTheDocument();
  });

  it('is disabled when transcript is empty', () => {
    render(<DownloadButton transcript="" />);
    expect(
      screen.getByRole('button', { name: /download transcript/i })
    ).toBeDisabled();
  });

  it('triggers download when clicked', () => {
    const mockCreateObjectURL = vi.fn(() => 'blob:mock-url');
    global.URL.createObjectURL = mockCreateObjectURL;

    const mockClick = vi.fn();

    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(
      mockClick
    );

    render(<DownloadButton transcript="Test transcript" />);

    fireEvent.click(
      screen.getByRole('button', { name: /download transcript/i })
    );

    expect(mockCreateObjectURL).toHaveBeenCalled();
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
