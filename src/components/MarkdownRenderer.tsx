import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeKatex]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-white mb-8 mt-10">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-white mb-6 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold text-white mb-4 mt-6">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold text-white mb-3 mt-5">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg font-bold text-white mb-2 mt-4">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-bold text-white mb-2 mt-3">{children}</h6>
          ),
          p: ({ children }) => (
            <p className="text-slate-300 mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-3 text-slate-300 ml-4 mb-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 text-slate-300 ml-4 mb-6">{children}</ol>
          ),
          li: ({ children, ...props }) => {
            const isOrdered = props.node && (props.node as any).parent && (props.node as any).parent.tagName === 'ol';
            return (
              <li className={`leading-relaxed ${isOrdered ? 'pl-2' : 'flex items-start space-x-3'}`}>
                {!isOrdered && <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>}
                <span>{children}</span>
              </li>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-400 pl-6 py-2 mb-6 text-slate-300 italic bg-slate-800/30 rounded-r-lg">{children}</blockquote>
          ),
          code: ({ children, ...props }) => {
            const isInline = !props.node?.properties?.className;
            return isInline ? (
              <code className="bg-slate-700 text-blue-300 px-2 py-1 rounded text-sm">{children}</code>
            ) : (
              <code className="block bg-slate-800 text-slate-300 p-4 rounded-lg overflow-x-auto mb-6">{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-slate-800 text-slate-300 p-4 rounded-lg overflow-x-auto mb-6 border border-slate-600">{children}</pre>
          ),
          table: ({ children }) => (
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border border-slate-600 rounded-lg">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-700/50">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody>{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-slate-800/30">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="border border-slate-600 px-4 py-2 text-left text-white font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-slate-600 px-4 py-2 text-slate-300">{children}</td>
          ),
          img: ({ src, alt = "", title }) => {
            let classes = "w-full";
            let caption = "";
          
            if (title) {
              const [cls, cap] = title.split("|").map((s) => s.trim());
              if (cls) classes = cls;
              if (cap) caption = cap;
            }

            // Fix image path - if it starts with /public/, remove that part
            let imageSrc = src || "";
            if (imageSrc.startsWith("/public/")) {
              imageSrc = imageSrc.replace("/public/", "/");
            }
          
            return (
              <figure className="mb-8">
                <img
                  src={imageSrc}
                  alt={alt}
                  className={`${classes} h-auto rounded-lg shadow-lg`}
                />
                {caption && (
                  <figcaption className="text-slate-400 text-sm mt-2 text-center italic">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        p: ({ children }) => <>{children}</>,
                      }}
                    >
                      {caption}
                    </ReactMarkdown>
                  </figcaption>
                )}
              </figure>
            );
          },
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-300">{children}</em>
          ),
          hr: () => (
            <hr className="border-slate-600 my-8" />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;