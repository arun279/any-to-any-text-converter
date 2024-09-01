const { convertEpubToTxt } = require('../../src/lib/convertEpubToTxt');

jest.mock('epub', () => {
  return jest.fn().mockImplementation(() => ({
    on: jest.fn((event, callback) => {
      if (event === 'end') {
        callback();
      }
    }),
    flow: [{ id: 'chapter1' }],
    getChapter: jest.fn((id, callback) => {
      callback(null, '<p>Test content</p>');
    }),
    parse: jest.fn(),
  }));
});

describe('convertEpubToTxt', () => {
  it('should convert EPUB content to plain text', async () => {
    const result = await convertEpubToTxt('test.epub');
    expect(result).toBe('Test content\n\n');
  });
});