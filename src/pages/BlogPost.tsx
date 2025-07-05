
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Home, BookOpen, Heart, FileText, Rss, Link as LinkIcon, Mail } from "lucide-react";
import Contact from "../components/Contact";
import ContentRenderer from "../components/ContentRenderer";
import { getCategoryColor } from "../utils/categoryColors";
import { createMarkdownContent } from "../utils/markdownContent";
import { getBlogPostBySlug } from "../utils/contentLoader";

const BlogPost = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { slug } = useParams();
  const post = getBlogPostBySlug(slug as string);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Convert markdown content to ContentBlock array
  const contentBlocks = post.markdownContent ? createMarkdownContent(post.markdownContent) : [];

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
              <Link to="/portfolio" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
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

      {/* Blog Post Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-80 object-cover rounded-2xl shadow-2xl mb-8"
            />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category, catIndex) => (
                <span key={catIndex} className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                  {category}
                </span>
              ))}
              <div className="flex items-center text-slate-400 text-sm ml-2">
                <Calendar size={16} className="mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Divider between Project Details and Additional Content */}
      <div className="border-t border-slate-600 -mt-12" />

      {/* Blog Post Content */}
      <section className="py-16 px-6">
        <ContentRenderer blocks={contentBlocks} />
      </section>

      {/* Author Section */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
            <div className="flex items-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Francesco Pezone"
                className="w-20 h-20 rounded-full border-2 border-slate-600"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Francesco Pezone, PhD</h3>
                <p className="text-slate-300 leading-relaxed">
                  AI Researcher specializing in Computer Vision, Generative AI, and Semantic Communications. 
                  Dual PhD in Data Science and Engineering with experience in both academic research and industry applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default BlogPost;
