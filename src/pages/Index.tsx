import Layout from '../components/navigation_layout';

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout scrollToContact={scrollToContact}>
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
                  I'm an AI Researcher with a passion for making machines smarter and more efficient. My academic journey, which includes dual Ph.D. degrees in Data Science and Engineering, has given me a deep foundation in Computer Vision, Generative AI, optimization theory, and signal processing.
                </p>
                
                <p>
                  My work has centered on a core challenge: how can we drastically compress data without losing what makes it meaningful? To solve this, I specialize in using Generative AI to achieve extreme compression for images, video, and other media. I develop intelligent systems that preserve the essential information within the data, all while being optimized to run smoothly on edge devices with limited power.
                </p>
                
                <p>
                  I have collaborated with leading academic institutions, including Sapienza University of Rome, TU Berlin, and the National Inter-University Consortium for Telecommunications (CNIT), as well as various industry partners. My research papers have been published in top-tier conferences and journals, pushing the boundaries of semantic communications and generative AI applications.
                </p>
                
                <p>
                  For me, the most exciting research doesn't just live in a paper; it's designed from the ground up to be robust, practical, and impactful outside the lab.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img 
                    src="/images/home/image_home.webp"
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
    </Layout>
  );
};

export default Index;