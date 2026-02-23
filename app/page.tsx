'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import FileUpload from '@/components/FileUpload';
import TranscriptViewer from '@/components/TranscriptViewer';
import DownloadButton from '@/components/DownloadButton';
import { transcribeAudio } from '@/services/transcriptionService';

export default function Home() {
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = async (file: File) => {
    setError('');
    setLoading(true);

    try {
      const data = await transcribeAudio(file);
      setTranscript(data.transcript);
    } catch (err: any) {
      setError(err.message || 'Transcription failed');
    }

    setLoading(false);
  };

  return (
    <>
      <Header />

      <main className="flex flex-col text-black items-center justify-center mt-20 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl items-center">
          <FileUpload onUpload={handleFileUpload} loading={loading} />
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div className="flex flex-col items-center justify-center">
            <TranscriptViewer transcript={transcript} />
            <DownloadButton transcript={transcript} />
          </div>
        </div>
      </main>
    </>
  );
}
