
import React from 'react';

interface ContentBlock {
  type: 'text' | 'image' | 'table' | 'list';
  content: any;
}

interface ContentRendererProps {
  blocks: ContentBlock[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ blocks }) => {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={index} className="mb-6">
            <div 
              dangerouslySetInnerHTML={{ __html: block.content }}
              className="prose prose-lg max-w-none"
            />
          </div>
        );

      case 'image':
        return (
          <div key={index} className="mb-8">
            <img 
              src={block.content.src} 
              alt={block.content.alt || ''}
              className="w-full rounded-lg shadow-lg"
            />
            {block.content.caption && (
              <p className="text-slate-400 text-sm mt-2 text-center italic">
                {block.content.caption}
              </p>
            )}
          </div>
        );

      case 'table':
        return (
          <div key={index} className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse border border-slate-600 rounded-lg">
              <thead>
                <tr className="bg-slate-700/50">
                  {block.content.headers.map((header: string, i: number) => (
                    <th key={i} className="border border-slate-600 px-4 py-2 text-left text-white font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.content.rows.map((row: string[], i: number) => (
                  <tr key={i} className="hover:bg-slate-800/30">
                    {row.map((cell, j) => (
                      <td key={j} className="border border-slate-600 px-4 py-2 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'list':
        return (
          <div key={index} className="mb-8">
            {block.content.ordered ? (
              <ol className="list-decimal list-inside space-y-2 text-slate-300 ml-4">
                {block.content.items.map((item: string, i: number) => (
                  <li key={i} className="leading-relaxed pl-2">{item}</li>
                ))}
              </ol>
            ) : (
              <ul className="space-y-3 text-slate-300 ml-4">
                {block.content.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default ContentRenderer;