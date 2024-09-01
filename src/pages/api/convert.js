import formidable from 'formidable';
import fs from 'fs';
import { convertEpubToTxt } from '@/lib/convertEpubToTxt';

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
  form.uploadDir = './uploads';
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    const { file } = files;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      const txtContent = await convertEpubToTxt(file.path);
      const outputPath = `./uploads/${file.name.replace('.epub', '.txt')}`;
      fs.writeFileSync(outputPath, txtContent);

      res.status(200).json({ success: true, outputPath });
    } catch (error) {
      res.status(500).json({ error: 'Error converting file' });
    } finally {
      // Clean up the uploaded file
      fs.unlinkSync(file.path);
    }
  });
}