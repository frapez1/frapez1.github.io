
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, } from "lucide-react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { getCategoryColor } from "../utils/categoryColors";
import { getBlogPostBySlug } from "../utils/contentLoader";
import Layout from '../components/navigation_layout';


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

  return (
    <Layout scrollToContact={scrollToContact}>
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
      {post.markdownContent && (
        <section className="py-16 px-6">
          <MarkdownRenderer content={post.markdownContent} />
        </section>
      )}

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
    </Layout>
  );
};

export default BlogPost;
