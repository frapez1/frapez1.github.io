
import { ArrowDown } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Francesco Pezone, PhD
            </a>
            <div className="flex space-x-6">
              <a href="/about" className="text-blue-400 font-semibold">About</a>
              <a href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="/passions" className="hover:text-blue-400 transition-colors">Passions</a>
              <a href="/cv" className="hover:text-blue-400 transition-colors">CV</a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                    alt="Francesco Pezone"
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-slate-700"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h1>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  I'm an AI Researcher with dual Ph.D. degrees in Data Science and Engineering, specializing in 
                  Computer Vision, Generative AI, optimization theory, and signal processing. My work focuses on 
                  developing innovative solutions that bridge the gap between theoretical research and practical deployment.
                </p>
                
                <p>
                  My research expertise lies in developing and deploying generative AI solutions to achieve high 
                  compression rates on multimodal data, with particular attention to preserving essential information. 
                  I'm proficient in both analytical and numerical optimization techniques for energy-aware performance 
                  tuning in Edge Network environments.
                </p>
                
                <p>
                  Throughout my academic journey, I've had the privilege of working with leading institutions including 
                  Sapienza University of Rome, TU Berlin, and the National Inter-University Consortium for Telecommunications (CNIT). 
                  My work has been published in top-tier conferences and journals, contributing to the advancement of 
                  semantic communications and generative AI applications.
                </p>
                
                <p>
                  I believe in developing systems that are both technically rigorous and practically deployable, 
                  always keeping in mind the real-world constraints and requirements that make research impactful.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-blue-400 mb-1">Rome & Berlin</div>
                  <div className="text-sm text-slate-400">Research Locations</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-purple-400 mb-1">Semantic AI</div>
                  <div className="text-sm text-slate-400">Specialization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Research Philosophy
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            "My expertise supports the development of systems that are both technically rigorous and practically deployable. 
            I believe that the most impactful research happens at the intersection of theoretical innovation and real-world application."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
