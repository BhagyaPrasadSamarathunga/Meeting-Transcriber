import { createTextBlob } from '@/lib/utils/createTextBlob';

interface Props {
  transcript: string;
}

export default function DownloadButton({ transcript }: Props) {
  const handleDownload = () => {
    const blob = createTextBlob(transcript);
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'transcript.txt';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!transcript}
      className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-sm disabled:bg-gray-400 disabled:opacity-50"
    >
      Download Transcript
    </button>
  );
}
