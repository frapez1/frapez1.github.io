
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30 border-t border-slate-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          I'm always interested in discussing new opportunities, collaborations, or research ideas. 
          Feel free to reach out!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:francesco.pezone.ds@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
          >
            <Mail size={20} />
            <span>Send me an email</span>
          </a>
          
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/francesco-pezone"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-blue-600 p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="https://github.com/frapez1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              title="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
