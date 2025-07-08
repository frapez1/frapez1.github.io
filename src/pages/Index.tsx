
import { Link } from "react-router-dom";
import { User, BookOpen, Heart, FileText, Rss, Home, Mail } from "lucide-react";
import Contact from "../components/Contact";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <Link to="/" className="flex items-center space-x-2 text-blue-400 font-semibold">
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link to="/portfolio" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <BookOpen size={18} />
                <span>Portfolio</span>
              </Link>
              {/* <Link to="/blog" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Rss size={18} />
                <span>Blog</span>
              </Link> */}
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

      {/* Hero/About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h1>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  I'm an AI Researcher with dual Ph.D. degrees in Data Science and Engineering, specializing in 
                  Computer Vision, Generative AI, optimization theory, and signal processing.
                </p>
                
                <p>
                  My research expertise lies in developing and deploying generative AI solutions to achieve high 
                  compression rates on multimodal data, with particular attention to preserving essential information. 
                  I'm proficient in both analytical and numerical optimization techniques for energy-aware performance 
                  tuning in Edge Network environments.
                </p>
                
                <p>
                  Throughout my career, I've collaborated with leading academic institutions including 
                  Sapienza University of Rome, TU Berlin, and the National Inter-University Consortium for Telecommunications (CNIT), 
                  as well as industry partners. My work has been published in top-tier conferences and journals, 
                  contributing to the advancement of semantic communications and generative AI applications.
                </p>
                
                <p>
                  I believe in developing systems that are both technically rigorous and practically deployable, 
                  always keeping in mind the real-world constraints and requirements that make research impactful 
                  in both academic and industrial contexts.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img 
                    src="public/images/home/image_home.png"
                    alt="Francesco Pezone"
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-slate-700"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      {/* <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/blog"
              className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </section> */}

      {/* Research Philosophy */}
      {/* <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Research Philosophy
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            "My expertise supports the development of systems that are both technically rigorous and practically deployable. 
            I believe that the most impactful research happens at the intersection of theoretical innovation and real-world application, 
            whether in academic or industrial settings."
          </p>
        </div>
      </section> */}
      <Contact />
    </div>
  );
};

export default Index;
