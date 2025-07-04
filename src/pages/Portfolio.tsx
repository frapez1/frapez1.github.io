
import { Github, ExternalLink, Calendar, Users, Home, BookOpen, Heart, FileText, Rss, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "SQ-GAN",
      description: "Semantic Masked VQ-GAN selectively compressing images prioritizing relevant content at low bitrates. Achieved ~85% bitrate reduction while maintaining semantic fidelity.",
      tech: ["PyTorch", "GANs", "Computer Vision", "Semantic Segmentation"],
      category: "Research Project",
      github: "#",
      slug: "sq-gan",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    },
    {
      title: "SPIC",
      description: "Diffusion-based image and semantic maps compression model for high-fidelity semantic reconstruction. Integrates advanced diffusion models with semantic understanding.",
      tech: ["Diffusion Models", "PyTorch", "Semantic Analysis"],
      category: "Research Project",
      github: "#",
      slug: "spic",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop"
    },
    {
      title: "Advanced ML for Medical Imaging",
      description: "Breast density assessment and breast cancer detection model trained on public and confidential datasets. Achieved state-of-the-art performance in medical image analysis.",
      tech: ["Medical Imaging", "Deep Learning", "PyTorch", "Computer Vision"],
      category: "Applied ML",
      github: "#",
      slug: "medical-imaging",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
      title: "Networking for Big Data",
      description: "Datacenter performance analysis and internet traffic analysis using advanced network monitoring tools. Comprehensive study of network patterns and optimization strategies.",
      tech: ["Wireshark", "PyShark", "Network Analysis", "Big Data"],
      category: "Network Analysis",
      github: "#",
      slug: "networking-big-data",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    }
  ];

  const publications = [
    {
      title: "SQ-GAN: Semantic Image Communications Using Masked Vector Quantization",
      year: "2025",
      authors: "FRANCESCO PEZONE, Sergio Barbarossa, Giuseppe Caire",
      location: "Submitted at TCCN",
      description: "Advanced semantic communication framework using masked vector quantization for efficient image compression.",
      category: "Generative AI",
      paperUrl: "https://arxiv.org/abs/example1"
    },
    {
      title: "Semantic-Preserving Image Coding based on Conditional Diffusion Models",
      year: "2024",
      authors: "FRANCESCO PEZONE, Osman Musa, Giuseppe Caire, Sergio Barbarossa",
      location: "ICASSP",
      description: "Novel approach to image compression using conditional diffusion models while preserving semantic content.",
      category: "Computer Vision",
      paperUrl: "https://arxiv.org/abs/example2"
    },
    {
      title: "Goal-Oriented Communication for Edge Learning based on the Information Bottleneck",
      year: "2022",
      authors: "FRANCESCO PEZONE, Sergio Barbarossa, Paolo Di Lorenzo",
      location: "ICASSP",
      description: "Optimization framework for edge learning using information bottleneck principle.",
      category: "Edge Computing",
      paperUrl: "https://arxiv.org/abs/example3"
    }
  ];

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
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                      <Link to={`/project/${project.slug}`} className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </Link>
                    </div>
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
              </div>
            ))}
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
            {publications.map((pub, index) => (
              <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-all duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                      {pub.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {pub.year}
                    </div>
                    <a 
                      href={pub.paperUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      title="View Paper"
                    >
                      <LinkIcon size={16} />
                    </a>
                  </div>
                  <span className="text-slate-300 font-medium text-sm bg-slate-700/50 px-3 py-1 rounded">
                    {pub.location}
                  </span>
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
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
