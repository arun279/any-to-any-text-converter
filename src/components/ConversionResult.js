export default function ConversionResult({ result }) {
  if (result.error) {
    return (
      <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <p>Error: {result.error}</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Conversion Result</h2>
      <p>
        Your file has been successfully converted. You can download it{' '}
        <a
          href={result.outputPath}
          download
          className="text-blue-500 hover:underline"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}