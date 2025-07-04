
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Home, BookOpen, Heart, FileText, Rss } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from an API or database
  const blogData = {
    "sq-gan-semantic-compression": {
      title: "Breaking Down SQ-GAN: Semantic Image Compression Revolution",
      excerpt: "Exploring how our latest research achieves 85% bitrate reduction while maintaining semantic fidelity through masked vector quantization.",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      content: `
        <p>In the rapidly evolving landscape of image compression, semantic understanding has emerged as a game-changing paradigm. Our latest research introduces SQ-GAN (Semantic Quantization Generative Adversarial Network), a novel approach that revolutionizes how we think about image compression by prioritizing semantic content over pixel-perfect reconstruction.</p>

        <h2>The Challenge of Traditional Compression</h2>
        <p>Traditional image compression methods like JPEG and WebP focus on preserving visual fidelity across the entire image uniformly. While effective for general purposes, this approach fails to consider the semantic importance of different regions within an image. A person's face in a portrait deserves more preservation than the background blur, yet traditional methods treat them equally.</p>

        <h2>Semantic-Aware Compression</h2>
        <p>SQ-GAN addresses this limitation by incorporating semantic understanding directly into the compression pipeline. Using advanced computer vision techniques, our system identifies semantically important regions and applies differential compression strategies:</p>

        <ul>
          <li><strong>High-priority regions</strong>: Faces, text, important objects receive minimal compression</li>
          <li><strong>Medium-priority regions</strong>: General objects and structures get moderate compression</li>
          <li><strong>Low-priority regions</strong>: Backgrounds and less important areas undergo aggressive compression</li>
        </ul>

        <h2>Technical Implementation</h2>
        <p>The core innovation lies in our masked vector quantization approach within a GAN framework. The system learns to:</p>

        <ol>
          <li>Identify semantic regions using a pre-trained segmentation network</li>
          <li>Apply adaptive quantization masks based on semantic importance</li>
          <li>Reconstruct the image using a generator trained to preserve semantic fidelity</li>
          <li>Refine the output through adversarial training for perceptual quality</li>
        </ol>

        <h2>Results and Impact</h2>
        <p>Our experiments demonstrate remarkable improvements over traditional methods:</p>

        <ul>
          <li>85% reduction in bitrate while maintaining semantic fidelity</li>
          <li>Superior performance on human perceptual studies</li>
          <li>Real-time compression capabilities on modern GPU hardware</li>
          <li>Robust performance across diverse image categories</li>
        </ul>

        <h2>Future Directions</h2>
        <p>This work opens several exciting research directions. We're exploring applications in video compression, where temporal semantic consistency becomes crucial. Additionally, we're investigating how this approach can be adapted for different domains like medical imaging, where semantic preservation is critical for diagnostic accuracy.</p>

        <p>The implications extend beyond compression efficiency. By teaching machines to understand what matters in an image, we're moving closer to human-like visual processing, with applications in autonomous systems, content creation, and beyond.</p>
      `
    }
  };

  const post = blogData[slug as keyof typeof blogData];

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
              <Link to="/blog" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
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
            
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <div className="flex items-center text-slate-400 text-sm">
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

      {/* Blog Post Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg prose-invert prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: '#cbd5e1',
              lineHeight: '1.75'
            }}
          />
        </div>
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
    </div>
  );
};

export default BlogPost;
