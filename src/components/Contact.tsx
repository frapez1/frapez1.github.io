import { Mail, Linkedin, Github, Copy } from "lucide-react";

const Contact = () => {
  const email = "francesco.pezone.ds@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => alert("Email address copied!"))
      .catch(() => console.error("Copy failed"));
  };

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
          {/* GRADIENT WRAPPER WITH DIVIDER */}
          <div className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg divide-x divide-white/30">
            {/* BUTTON A */}
            <a
              href={`mailto:${email}`}
              className="
                flex items-center
                px-8 py-4
                bg-transparent
                rounded-l-lg      /* full on outer left */
                rounded-r-sm      /* small on the shared corner */
                transition-all duration-300 transform hover:scale-105
              "
            >
              <Mail size={20} />
              <span className="ml-2 font-semibold text-white">Send me an email</span>
            </a>

            {/* BUTTON B */}
            <button
              onClick={copyEmail}
              className="
                flex items-center justify-center
                px-4 py-4
                bg-transparent
                rounded-l-sm      /* small on the shared corner */
                rounded-r-lg      /* full on outer right */
                transition-all duration-300 transform hover:scale-105
              "
              aria-label="Copy email to clipboard"
            >
              <Copy size={20} className="text-white" />
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/francesco-pezone"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-blue-600 p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="https://github.com/frapez1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              title="GitHub Profile"
            >
              <Github size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
