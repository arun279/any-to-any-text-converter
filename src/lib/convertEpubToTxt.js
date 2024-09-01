import EPub from 'epub';

export async function convertEpubToTxt(filePath) {
  return new Promise((resolve, reject) => {
    const epub = new EPub(filePath);

    epub.on('end', () => {
      let text = '';

      epub.flow.forEach((chapter) => {
        epub.getChapter(chapter.id, (error, content) => {
          if (error) {
            reject(error);
          } else {
            // Remove HTML tags and convert entities
            text += content.replace(/<[^>]*>/g, '')
              .replace(/&nbsp;/g, ' ')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&amp;/g, '&') + '\n\n';

            if (chapter === epub.flow[epub.flow.length - 1]) {
              resolve(text);
            }
          }
        });
      });
    });

    epub.parse();
  });
}