import { Download, MapPin, Calendar, Award, Code, Database, Users, Lightbulb , Link as LinkIcon,  ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Contact from "../components/Contact";
import Layout from '../components/navigation_layout';

const CV = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    Code: [
      "Python", "PyTorch", "TensorFlow", "Docker", "Git",
      "AWS", "Lambda", "Bash", "SQL"
    ],
  
    "AI/ML": [
      "Transformers", "Computer Vision", "LLMs", "LangGraph",
      "OpenCV", "Diffusion Models", "Multimodal learning", "Synthetic Data Generation"  
    ],
  
    Data_Deployment: [
      "NumPy", "Pandas", "MLOps", "FastAPI", "MLflow",
      "Seaborn", "OpenCV", "BeautifulSoup"
    ],
  
    Soft_Skills: [
      "Communication", "Teamwork", "Problem-solving",
      "Critical Thinking", "Research Writing", "Leadership"
    ]
  };

  const INITIAL_EXPERIENCES_TOSHOW = 3; // how many experiences to show before the "Show previous Experience" button
  const experience = [
    // {
    //   position: "",
    //   company: "Motus ML",
    //   period: "Nov 2025 - current",
    //   location: "Remote (Milan, IT)",
    //   details: [
    //     
    //   ]
    // },
    {
      position: "AI Research Scientist",
      company: "National Inter-University Consortium for Telecommunications (CNIT)",
      period: "Sep 2024 - Jan 2025",
      location: "Remote (Rome, IT)",
      details: [
        "Developed VQ-GAN based image compression framework for semantic communication with 85% bitrate reduction",
        "Outperformed classic and ML-based codecs at bitrates as low as 0.01BPP",
        "Engineered adaptive conditioned masking mechanism for semantically important features",
        "Authored research journal published at IEEE Transactions on Cognitive Communications"
      ]
    },
    {
      position: "AI Consultant",
      company: "Einblick",
      period: "Jan - Feb 2021",
      location: "Remote (Boston, US)",
      details: [
        "Evaluated AI-powered data visualization platform for usability and performance optimization",
        "Advised product leadership on ML-driven features to enhance user experience",
        "Delivered strategic recommendations reducing dashboard load times by 25%"
      ]
    },
    {
      position: "Teaching Assistant",
      company: "Sapienza University of Rome",
      period: "Sep 2020 - Feb 2021",
      location: "Rome, IT",
      details: [
        "Delivered hands-on lab sessions for 100+ master's students in Data Mining",
        "Provided guidance on algorithmic implementations and experimental reproducibility",
        "Evaluated student projects with emphasis on code clarity and computational efficiency"
      ]
    },
    {
      position: "Science Communicator",
      company: "Le Muse di Archimede",
      period: "Nov 2018 - Mar 2020",
      location: "Rome, IT",
      details: [
        "Designed and led interactive STEM workshops for diverse audiences aged 6 to 99",
        "Tailored content to accommodate varying levels of prior knowledge while ensuring scientific rigor",
        "Refined public speaking and pedagogical skills by engaging live audiences of up to 200 participants"
      ]
    },
    {
      position: "Physics Engineer (Intern)",
      company: "National Institute for Nuclear Physics (INFN)",
      period: "Jan - Jun 2018",
      location: "Frascati, IT",
      details: [
        "Set up and tested signal amplification circuits for muon detectors supporting CERN experiments",
        "Analyzed signal integrity using digital oscilloscopes and real-time diagnostics",
        "Contributed to evaluating hardware performance under operational conditions"
      ]
    }
  ];

  const education = [
    {
      degree: "PhD in Data Science",
      period: "Nov 2021 - Jan 2025",
      institution: "Sapienza University of Rome (Cotutelle with TU Berlin)",
      location: "Rome, IT",
      details: "Researched integration of generative models (DDPMs, GANs, VAEs) into semantic communication frameworks for efficient data compression and reconstruction."
    },
    {
      degree: "PhD in Engineering", 
      period: "Nov 2021 - Jan 2025",
      institution: "Technische Universität Berlin (Cotutelle with Sapienza)",
      location: "Berlin, DE",
      details: "Developed resource allocation strategies for Edge Networks using stochastic optimization and Information Bottleneck principle."
    },
    {
      degree: "M.Sc. in Data Science",
      period: "Sep 2019 - June 2021", 
      institution: "Sapienza University of Rome",
      location: "Rome, IT",
      details: "Specialized in Deep Learning, Data Mining, NLP and Big Data. Awarded IEEE SPS Italy Best Master's Thesis Prize | Ranked first in Master's Honors Program."
    },
    {
      degree: "B.Sc. in Physics",
      period: "Sep 2015 - June 2019",
      institution: "University of Rome Tor Vergata", 
      location: "Rome, IT",
      details: "Strong foundation in mathematics, physics and analytical thinking."
    }
  ];


  const getSkillIcon = (category: string) => {
    switch (category) {
      case "Code": return <Code size={20} />;
      case "AI/ML": return <Lightbulb size={20} />;
      case "Data/Deployment": return <Database size={20} />;
      case "Soft Skills": return <Users size={20} />;
      default: return <Code size={20} />;
    }
  };

  const displayedExperience = showAllExperience ? experience : experience.slice(0, INITIAL_EXPERIENCES_TOSHOW);

  return (
    <Layout scrollToContact={scrollToContact}>
      {/* CV Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Curriculum <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Vitae</span>
              </h1>
              <p className="text-xl text-slate-300">
                AI Researcher & Computer Vision Expert
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1pU3qQZgVdvuLTJCQt0FZlGfpobXm2CGz/view?usp=sharing"   /* ← put your real link here */
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <LinkIcon size={20} />
              <span>See&nbsp;Full&nbsp;PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-400">
                    {getSkillIcon(category)}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="inline-block bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {displayedExperience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-green-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <p className="text-lg text-slate-300">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <div className="flex items-center text-slate-400 text-sm mb-1">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 pl-4">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-slate-300 flex items-start leading-relaxed">
                      <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {experience.length > INITIAL_EXPERIENCES_TOSHOW && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                {showAllExperience ? (
                  <>
                    <ChevronUp size={20} />
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    <span>Show Previous Experience</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-slate-300 mb-1">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-slate-400 text-sm mb-1">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Languages & Awards */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Languages
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">English</span>
                    <span className="text-slate-400">Advanced (C1)</span>
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Italian</span>
                    <span className="text-slate-400">Native</span>
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">German</span>
                    <span className="text-slate-400">Intermediate (B1)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Awards & Recognition
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="flex items-start space-x-3">
                    <Award className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-semibold">IEEE SPS Italy Best Master's Thesis Award</h3>
                      <p className="text-slate-400 text-sm">Recognition for outstanding research contribution</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                  <div className="flex items-start space-x-3">
                    <Award className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-semibold">First in Master's Honors Program</h3>
                      <p className="text-slate-400 text-sm">Top academic performance in Data Science program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CV;