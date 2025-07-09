import { Link } from "react-router-dom";
import { Home, BookOpen, Heart, FileText, Rss, Link as LinkIcon, Mail } from "lucide-react";
import Contact from "../components/Contact";
import MobileNav from "../components/MobileNav";

const Passions = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const passions = [
    {
      title: "Acroyoga & Partner Acrobatics",
      description: "It's like grown-up playtime, but with way more core strength and trust involved. There's just something super cool about lifting someone into the air (or being the one flying). Trusting the process and knowing that everyone will do their part is key. The rest will be amazing!",
      media: {
        type: "",
        src: "/images/passions/Acro.png",
        alt: "Mountain landscape photography"
      },
      side: "right"
    },
    {
      title: "Camping & Biking",
      description: "Pack some snacks, hop on the bike, and just go. I love the mix of freedom and simplicity, riding all day, then setting up camp wherever feels right. No rush, no plans, just vibes, fresh air, and maybe a few unexpected detours. Just a suggestion if you're reading... check the wind!",
      media: {
        type: "image",
        src: "/images/passions/camping.png",
        alt: "Technology and innovation"
      },
      side: "left"
    },
    {
      title: "Cats",
      description: "Come on... look at this BEAUTY! Do I really need to say more??",
      media: {
        type: "image",
        src: "/images/passions/cat.jpeg",
        alt: "Mountain landscape photography"
      },
      side: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo_FP.png" 
                alt="FP Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Francesco Pezone, PhD
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link to="/portfolio" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <BookOpen size={18} />
                <span>Portfolio</span>
              </Link>
              <Link to="/passions" className="flex items-center space-x-2 text-blue-400 font-semibold">
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

            {/* Mobile Navigation */}
            <MobileNav scrollToContact={scrollToContact} />
          </div>
        </div>
      </nav>

      {/* Passions Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Passions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Some of the things that catch my interest for no obvious reason... and that's kind of the point.
          </p>
        </div>
      </section>

      {/* Passions Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {passions.map((passion, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${passion.side === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {passion.title}
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {passion.description}
                    </p>
                  </div>
                </div>

                {/* Media */}
                <div className={`${passion.side === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {passion.media.type === 'video' ? (
                      <div className="relative">
                        <img 
                          src={passion.media.src}
                          alt={passion.media.alt}
                          className="w-full h-80 object-cover"
                        />
                        {/* Video overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[8px] border-l-slate-800 border-y-[6px] border-y-transparent ml-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={passion.media.src}
                        alt={passion.media.alt}
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Passions;