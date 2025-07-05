
interface ContentBlock {
  type: 'text' | 'image' | 'table' | 'list';
  content: any;
}

export const parseMarkdownContent = (content: string): ContentBlock[] => {
  const blocks: ContentBlock[] = [];
  const lines = content.split('\n\n'); // Split by double newlines for blocks
  
  for (const block of lines) {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) continue;
    
    // Handle images: ![alt](src "caption")
    if (trimmedBlock.startsWith('![')) {
      const imageMatch = trimmedBlock.match(/!\[([^\]]*)\]\(([^"]*?)(?:\s+"([^"]*)")?\)/);
      if (imageMatch) {
        blocks.push({
          type: 'image',
          content: {
            src: imageMatch[2].trim(),
            alt: imageMatch[1] || '',
            caption: imageMatch[3] || ''
          }
        });
        continue;
      }
    }
    
    // Handle lists: lines starting with - or numbers
    if (trimmedBlock.includes('\n-') || trimmedBlock.match(/^\d+\./m) || trimmedBlock.startsWith('-') || trimmedBlock.match(/^\d+\./)) {
      const listLines = trimmedBlock.split('\n').filter(line => line.trim());
      const isOrdered = listLines.some(line => line.match(/^\d+\./));
      const items = listLines
        .map(line => {
          if (line.match(/^\d+\./)) {
            return line.replace(/^\d+\.\s*/, '').trim();
          } else if (line.startsWith('-')) {
            return line.replace(/^-\s*/, '').trim();
          }
          return line.trim();
        })
        .filter(item => item);
      
      if (items.length > 0) {
        blocks.push({
          type: 'list',
          content: {
            ordered: !!isOrdered,
            items
          }
        });
        continue;
      }
    }
    
    // Handle tables: lines with | separators
    if (trimmedBlock.includes('|')) {
      const tableLines = trimmedBlock.split('\n').filter(line => line.trim() && line.includes('|'));
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split('|').map(h => h.trim()).filter(h => h);
        const rows = tableLines.slice(2).map(line => 
          line.split('|').map(cell => cell.trim()).filter(cell => cell)
        );
        
        if (headers.length > 0 && rows.length > 0) {
          blocks.push({
            type: 'table',
            content: {
              headers,
              rows
            }
          });
          continue;
        }
      }
    }
    
    // Everything else is text (including headers, paragraphs, etc.)
    blocks.push({
      type: 'text',
      content: convertTextMarkdown(trimmedBlock)
    });
  }
  
  return blocks;
};

const convertTextMarkdown = (text: string): string => {
  return text
    // Headers with proper classes
    .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-white mb-4 mt-6">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-white mb-6 mt-8">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold text-white mb-8 mt-10">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Convert remaining lines to paragraphs
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      if (line.startsWith('<h')) {
        return line;
      }
      return `<p class="text-slate-300 mb-4 leading-relaxed">${line}</p>`;
    })
    .join('');
};

// Helper function to create markdown content easily
export const createMarkdownContent = (markdownString: string): ContentBlock[] => {
  return parseMarkdownContent(markdownString);
};