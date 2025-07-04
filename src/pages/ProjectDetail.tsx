
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Home, BookOpen, Heart, FileText, Rss } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();

  // Sample project data - in a real app, this would come from an API or database
  const projectData = {
    "sq-gan": {
      title: "SQ-GAN: Semantic Image Communications Using Masked Vector Quantization",
      description: "Semantic Masked VQ-GAN selectively compressing images prioritizing relevant content at low bitrates. Achieved ~85% bitrate reduction while maintaining semantic fidelity.",
      longDescription: "This project introduces a novel approach to semantic image compression using masked vector quantization within a Generative Adversarial Network (GAN) framework. The system intelligently identifies and preserves semantically important regions while aggressively compressing less critical areas, achieving unprecedented compression ratios without significant loss of perceptual quality.",
      tech: ["PyTorch", "GANs", "Computer Vision", "Semantic Segmentation"],
      category: "Research Project",
      github: "https://github.com/francesco-pezone/sq-gan",
      demo: "#",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      results: [
        "85% bitrate reduction compared to traditional methods",
        "Preserved semantic fidelity in compressed images",
        "Real-time compression capabilities on GPU hardware",
        "Successfully tested on multiple datasets including COCO and ImageNet"
      ],
      challenges: [
        "Balancing compression ratio with semantic preservation",
        "Training stability in adversarial networks",
        "Computational efficiency for real-time applications"
      ]
    }
  };

  const project = projectData[slug as keyof typeof projectData];

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
              <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex space-x-4 mb-8">
                <a 
                  href={project.github} 
                  className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a 
                  href={project.demo} 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
              
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
    </div>
  );
};

export default ProjectDetail;
