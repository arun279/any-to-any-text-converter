import { useState } from 'react';

export default function ConversionOptions({ onConvert, disabled }) {
  const [outputFormat, setOutputFormat] = useState('txt');

  const handleConvert = () => {
    onConvert({ outputFormat });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Conversion Options</h2>
      <div className="flex items-center">
        <label htmlFor="outputFormat" className="mr-4">
          Output Format:
        </label>
        <select
          id="outputFormat"
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="txt">TXT</option>
        </select>
      </div>
      <button
        onClick={handleConvert}
        disabled={disabled}
        className={`mt-4 px-4 py-2 text-white rounded ${
          disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        Convert
      </button>
    </div>
  );
}