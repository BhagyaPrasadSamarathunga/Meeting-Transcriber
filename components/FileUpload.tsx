'use client';

import { useState } from 'react';

interface Props {
  onUpload: (file: File) => void;
  loading: boolean;
}

export default function FileUpload({ onUpload, loading }: Props) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-center">
        Upload an Audio File
      </h2>
      <div className="w-full border-2 border-dashed border-gray-300 my-4 rounded-md p-6 text-center">
        <input
          data-testid="file-input"
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          className="block w-full text-sm text-gray-600
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-sm file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-600 file:text-white
                         hover:file:bg-blue-700"
        />
      </div>

      <button
        onClick={() => file && onUpload(file)}
        disabled={loading || !file}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-sm transition disabled:bg-gray-400 disabled:opacity-50"
      >
        {loading ? 'Transcribing...' : 'Transcribe'}
      </button>
    </div>
  );
}
