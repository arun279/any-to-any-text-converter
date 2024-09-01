import { ensureDirectoryExists, generateUniqueFilename, cleanupTempFiles } from '@/lib/fileUtils';
import fs from 'fs';
import path from 'path';

jest.mock('fs');
jest.mock('path');

describe('fileUtils', () => {
  describe('ensureDirectoryExists', () => {
    it('should create directory if it does not exist', () => {
      fs.existsSync.mockReturnValue(false);
      ensureDirectoryExists('/test/dir');
      expect(fs.mkdirSync).toHaveBeenCalledWith('/test/dir', { recursive: true });
    });

    it('should not create directory if it already exists', () => {
      fs.existsSync.mockReturnValue(true);
      ensureDirectoryExists('/test/dir');
      expect(fs.mkdirSync).not.toHaveBeenCalled();
    });
  });

  describe('generateUniqueFilename', () => {
    it('should return original filename if it does not exist', () => {
      path.join.mockImplementation((...args) => args.join('/'));
      fs.existsSync.mockReturnValue(false);
      const result = generateUniqueFilename('/test/dir', 'file', 'txt');
      expect(result).toBe('file.txt');
    });

    it('should generate unique filename if original exists', () => {
      path.join.mockImplementation((...args) => args.join('/'));
      fs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(false);
      const result = generateUniqueFilename('/test/dir', 'file', 'txt');
      expect(result).toBe('file_1.txt');
    });
  });

  describe('cleanupTempFiles', () => {
    it('should delete old files', () => {
      const mockFiles = ['old.txt', 'new.txt'];
      const mockStats = [
        { ctime: new Date(Date.now() - 120 * 60000) },
        { ctime: new Date() }
      ];

      fs.readdir.mockImplementation((dir, callback) => callback(null, mockFiles));
      fs.stat.mockImplementation((path, callback) => callback(null, mockStats.shift()));

      cleanupTempFiles('/test/dir', 60);

      expect(fs.unlink).toHaveBeenCalledWith('/test/dir/old.txt', expect.any(Function));
      expect(fs.unlink).not.toHaveBeenCalledWith('/test/dir/new.txt', expect.any(Function));
    });
  });
});