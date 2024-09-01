import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import ConversionOptions from '@/components/ConversionOptions';
import ConversionResult from '@/components/ConversionResult';

export default function Home() {
  const [file, setFile] = useState(null);
  const [conversionResult, setConversionResult] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
    setConversionResult(null);
  };

  const handleConversion = async (options) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('options', JSON.stringify(options));

    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const result = await response.json();
      setConversionResult(result);
    } catch (error) {
      console.error('Error:', error);
      setConversionResult({ error: 'Conversion failed' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Text Format Converter</h1>
      <FileUpload onFileSelect={handleFileSelect} />
      <ConversionOptions onConvert={handleConversion} disabled={!file} />
      {conversionResult && <ConversionResult result={conversionResult} />}
    </div>
  );
}