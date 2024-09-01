import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { convertEpubToTxt } from '@/lib/convertEpubToTxt';
import { ensureDirectoryExists, generateUniqueFilename } from '@/lib/fileUtils';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public', 'uploads');
  form.keepExtensions = true;

  ensureDirectoryExists(form.uploadDir);

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    const file = files.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      const txtContent = await convertEpubToTxt(file.filepath);
      const outputFilename = generateUniqueFilename(form.uploadDir, path.parse(file.originalFilename).name, 'txt');
      const outputPath = path.join(form.uploadDir, outputFilename);
      fs.writeFileSync(outputPath, txtContent);

      const relativeOutputPath = `/uploads/${outputFilename}`;
      res.status(200).json({ success: true, outputPath: relativeOutputPath });
    } catch (error) {
      console.error('Error converting file:', error);
      res.status(500).json({ error: 'Error converting file' });
    } finally {
      // Clean up the uploaded file
      fs.unlinkSync(file.filepath);
    }
  });
}