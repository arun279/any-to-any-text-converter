import fs from 'fs';
import path from 'path';

export function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function generateUniqueFilename(directory, basename, extension) {
  let filename = `${basename}.${extension}`;
  let counter = 1;

  while (fs.existsSync(path.join(directory, filename))) {
    filename = `${basename}_${counter}.${extension}`;
    counter++;
  }

  return filename;
}

export function cleanupTempFiles(directory, ageInMinutes = 60) {
  const now = new Date();
  
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.stat(path.join(directory, file), (err, stat) => {
        if (err) throw err;

        const endTime = new Date(stat.ctime.getTime() + ageInMinutes * 60000);

        if (now > endTime) {
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
        }
      });
    }
  });
}