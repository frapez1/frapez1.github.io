
import { Link } from "react-router-dom";
import { Home, BookOpen, Heart, FileText, Rss } from "lucide-react";

const Passions = () => {
  const passions = [
    {
      title: "Mountain Hiking & Nature Photography",
      description: "Exploring the beauty of mountains and capturing breathtaking landscapes. The tranquility of nature provides the perfect balance to intensive research work. Through my lens, I document the raw beauty of untouched wilderness, from alpine meadows to rugged peaks. Each hike is both a physical challenge and a creative journey that inspires my approach to problem-solving in research.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        alt: "Mountain landscape photography"
      },
      side: "right"
    },
    {
      title: "Astrophotography & Night Sky",
      description: "Capturing the wonders of the universe through long-exposure photography. The night sky reminds me of the infinite possibilities in both science and art. Spending hours under the stars, waiting for the perfect shot, teaches patience and precision - qualities that directly translate to my research methodology. The technical challenges of astrophotography mirror the complexities of computer vision algorithms.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
        alt: "Night sky astrophotography"
      },
      side: "left"
    },
    {
      title: "Science Communication & Teaching",
      description: "Bridging the gap between complex scientific concepts and public understanding. I believe that making science accessible is crucial for societal progress. Whether through lectures, workshops, or informal discussions, I find joy in breaking down complex AI concepts into digestible insights. This passion for communication has shaped my approach to writing research papers and presenting at conferences.",
      media: {
        type: "video",
        src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
        alt: "Science communication and teaching"
      },
      side: "right"
    },
    {
      title: "Technology Innovation & Experimentation",
      description: "Staying at the forefront of technological advancement, exploring how AI and machine learning can solve real-world problems and improve human lives. I'm constantly experimenting with new frameworks, algorithms, and approaches. My home lab serves as a playground for testing emerging technologies, from edge computing devices to the latest generative AI models.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        alt: "Technology and innovation"
      },
      side: "left"
    },
    {
      title: "Cultural Exchange & Travel",
      description: "Experiencing different cultures and perspectives through travel has profoundly shaped my worldview. Living between Rome and Berlin has given me a deep appreciation for cultural diversity and different approaches to problem-solving. Each destination offers unique insights into how technology is perceived and implemented across different societies, enriching my understanding of global AI applications.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
        alt: "Travel and cultural exchange"
      },
      side: "right"
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
              <Link to="/portfolio" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <BookOpen size={18} />
                <span>Portfolio</span>
              </Link>
              <Link to="/blog" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Rss size={18} />
                <span>Blog</span>
              </Link>
              <Link to="/passions" className="flex items-center space-x-2 text-blue-400 font-semibold">
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

      {/* Passions Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Passions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Beyond research and academia, I'm passionate about exploring the world, capturing its beauty, 
            and sharing the wonders of science with others. These pursuits fuel my creativity and inform my research approach.
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

      {/* Quote Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-light text-slate-300 leading-relaxed italic">
            "The intersection of science, technology, and human experience is where the most 
            meaningful discoveries happen. My passions fuel my curiosity and drive my research forward, 
            reminding me that innovation thrives when we remain curious about the world around us."
          </blockquote>
          <div className="mt-6 text-blue-400 font-semibold">— Francesco Pezone</div>
        </div>
      </section>
    </div>
  );
};

export default Passions;
