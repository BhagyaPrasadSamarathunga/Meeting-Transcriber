interface Props {
  transcript: string;
}

export default function TranscriptViewer({ transcript }: Props) {
  return (
    <div className="mt-6 w-full">
      <h2 className="text-lg font-semibold mb-2">Transcript</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-md p-4 bg-gray-50 whitespace-pre-wrap min-h-[200px]">
        {transcript ? transcript : ''}
      </div>
    </div>
  );
}
