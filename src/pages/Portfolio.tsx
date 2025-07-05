import { Github, ExternalLink, Calendar, Users, Home, BookOpen, Heart, FileText, Rss, Link as LinkIcon, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Contact from "../components/Contact";
import { getCategoryColor } from "../utils/categoryColors";
import { allProjects } from "../utils/contentLoader";
import { publications } from "../content/publications";

const Portfolio = () => {
  const [showAllPublications, setShowAllPublications] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper function to get the first external link for the portfolio card
  const getFirstExternalLink = (externalLinks: Record<string, string>) => {
    const entries = Object.entries(externalLinks);
    return entries.length > 0 ? entries[0] : null;
  };

  const displayedPublications = showAllPublications ? publications : publications.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto py-4">
          <div className="flex justify-between items-center">
           <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo_FP.png" 
                alt="FP Logo" 
                className="w-8 h-8"
                // style={{ filter: 'hue-rotate(200deg) saturate(0.8) brightness(1.2)' }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Francesco Pezone, PhD
              </span>
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link to="/portfolio" className="flex items-center space-x-2 text-blue-400 font-semibold">
                <BookOpen size={18} />
                <span>Portfolio</span>
              </Link>
              <Link to="/blog" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Rss size={18} />
                <span>Blog</span>
              </Link>
              <Link to="/passions" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Heart size={18} />
                <span>Passions</span>
              </Link>
              <button 
                onClick={scrollToContact}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
              <Link to="/cv" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FileText size={18} />
                <span>CV</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Portfolio Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of my research projects, publications, and contributions to the field of 
            AI, Computer Vision, and Semantic Communications.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => {
              const firstLink = getFirstExternalLink(project.externalLinks);
              return (
                <Link 
                  key={index} 
                  to={`/project/${project.slug}`}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 block"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.categories.map((category, catIndex) => (
                          <span key={catIndex} className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                            {category}
                          </span>
                        ))}
                      </div>
                      {firstLink && (
                        <a 
                          href={firstLink[1]} 
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          {firstLink[0].toLowerCase().includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
                        </a>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Research Publications
          </h2>
          
          <div className="space-y-8">
            {displayedPublications.map((pub, index) => (
              <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-all duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                  <div className="flex flex-wrap gap-2">
                      {pub.categories.map((category, catIndex) => (
                        <span key={catIndex} className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {pub.year}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-slate-300 font-medium text-sm bg-slate-700/50 px-3 py-1 rounded">
                      {pub.location}
                    </span>
                    <a 
                      href={pub.paperUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                      title="View Paper"
                    >
                      <LinkIcon size={16} />
                      <span>Read Paper</span>
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{pub.title}</h3>
                <p className="text-slate-300 mb-4 text-lg">{pub.description}</p>
                
                <div className="flex items-center text-slate-400 text-sm">
                  <Users size={16} className="mr-2" />
                  <span className="font-medium">{pub.authors}</span>
                </div>
              </div>
            ))}
          </div>

          {publications.length > 2 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllPublications(!showAllPublications)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                {showAllPublications ? (
                  <>
                    <ChevronUp size={20} />
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    <span>Show More Publications</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Portfolio;
