
import { Calendar, Clock, ArrowRight, Home, BookOpen, Heart, FileText, Rss } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Breaking Down SQ-GAN: Semantic Image Compression Revolution",
      excerpt: "Exploring how our latest research achieves 85% bitrate reduction while maintaining semantic fidelity through masked vector quantization.",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      slug: "sq-gan-semantic-compression"
    },
    {
      title: "The Future of Diffusion Models in Image Processing",
      excerpt: "Deep dive into how conditional diffusion models are revolutionizing semantic-preserving image coding and what it means for the industry.",
      date: "2024-11-28",
      readTime: "12 min read",
      category: "AI Research",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
      slug: "diffusion-models-future"
    },
    {
      title: "From Academia to Industry: Bridging the Research Gap",
      excerpt: "My experience working with both academic institutions and industry partners, and how to make research practically deployable.",
      date: "2024-11-10",
      readTime: "6 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=face",
      slug: "academia-industry-bridge"
    },
    {
      title: "Edge Computing Optimization: A Practical Guide",
      excerpt: "Implementing energy-aware performance tuning in Edge Networks using stochastic optimization techniques.",
      date: "2024-10-22",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      slug: "edge-computing-optimization"
    },
    {
      title: "Medical AI: Lessons from Breast Cancer Detection",
      excerpt: "Key insights from developing state-of-the-art breast cancer detection models and the challenges of medical imaging AI.",
      date: "2024-09-15",
      readTime: "9 min read",
      category: "Medical AI",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      slug: "medical-ai-breast-cancer"
    },
    {
      title: "Information Bottleneck Principle in Modern ML",
      excerpt: "Understanding how the Information Bottleneck principle can optimize goal-oriented communication in edge learning scenarios.",
      date: "2024-08-30",
      readTime: "7 min read",
      category: "Theory",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      slug: "information-bottleneck-ml"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research": return "bg-blue-500/20 text-blue-400";
      case "AI Research": return "bg-purple-500/20 text-purple-400";
      case "Career": return "bg-green-500/20 text-green-400";
      case "Technology": return "bg-orange-500/20 text-orange-400";
      case "Medical AI": return "bg-red-500/20 text-red-400";
      case "Theory": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-slate-500/20 text-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Francesco Pezone, PhD
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
              <Link to="/blog" className="flex items-center space-x-2 text-blue-400 font-semibold">
                <Rss size={18} />
                <span>Blog</span>
              </Link>
              <Link to="/passions" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Heart size={18} />
                <span>Passions</span>
              </Link>
              <Link to="/cv" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FileText size={18} />
                <span>CV</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights from the intersection of AI research, computer vision, and practical applications. 
            Sharing knowledge, experiences, and thoughts on the latest developments in technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-slate-300">Featured Post</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-blue-400 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blogPosts[0].category)}`}>
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Clock size={16} className="mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{blogPosts[0].title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  
                  <Link 
                    to={`/blog/${blogPosts[0].slug}`} 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 inline-flex"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-slate-300">All Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white leading-tight">{post.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-xs">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center space-x-1"
                    >
                      <span>Read</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
