import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, FileText} from "lucide-react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Layout from '../components/navigation_layout';
import { getCategoryColor } from "../utils/categoryColors";
import { getProjectBySlug } from "../utils/contentLoader";

const ProjectDetail = () => {
  const { slug } = useParams();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const project = getProjectBySlug(slug as string);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-400 hover:text-blue-300">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const renderExternalLinks = () => {
    const linkEntries = Object.entries(project.externalLinks);
    if (linkEntries.length === 0) return null;

    return (
      <div className="flex space-x-4 mb-8">
        {linkEntries.map(([text, url], index) => {
          const isLast = index === linkEntries.length - 1;
          const isGithub = text.toLowerCase().includes('github') || text.toLowerCase().includes('view code');
          const isPaper = text.toLowerCase().includes('paper')|| text.toLowerCase().includes('arxiv');
          const Icon = isGithub ? Github : isPaper ? FileText : ExternalLink;
          
          return (
            <a 
              key={index}
              href={url} 
              target="_blank"                 
              rel="noopener noreferrer"      
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                isLast 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              <Icon size={20} />
              <span>{text}</span>
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <Layout scrollToContact={scrollToContact}>

      {/* Project Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((category, index) => (
                  <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              {renderExternalLinks()}
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Project Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Key Results</h3>
              <ul className="space-y-3 text-slate-300">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Technical Challenges</h3>
              <ul className="space-y-3 text-slate-300 mb-8">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h4 className="text-xl font-bold mb-4 text-white">Technologies Used</h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.tech.map((tech, index) => (
                    <div key={index} className="bg-slate-700/50 text-slate-300 px-3 py-2 rounded text-center text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider between Project Details and Additional Content */}
      <div className="border-t border-slate-600" />

      {/* Additional Content */}
      {project.markdownContent && (
        <section className="py-16 px-6">
          <MarkdownRenderer content={project.markdownContent} />
        </section>
      )}
  </Layout>
  );
};

export default ProjectDetail;