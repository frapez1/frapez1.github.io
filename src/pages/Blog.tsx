
import { Calendar, Clock, ArrowRight, Link as LinkIcon} from "lucide-react";
import { Link } from "react-router-dom";
import { getCategoryColor } from "../utils/categoryColors";
import { getSortedBlogPosts, getFeaturedBlogPost } from "../utils/contentLoader";
import Layout from '../components/navigation_layout';


const Blog = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const sortedBlogPosts = getSortedBlogPosts();
  const featuredPost = getFeaturedBlogPost();

  return (
    <Layout scrollToContact={scrollToContact}>
      {/* Blog Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Not peer-reviewed, definitely not optimized! Just the stuff that doesn't fit in a paper or a repo. Me, thinking out loud. 
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-slate-300">Featured Post</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-blue-400 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.categories.map((category, catIndex) => (
                      <span key={catIndex} className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                        {category}
                      </span>
                    ))}
                    <div className="flex items-center text-slate-400 text-sm ml-2">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{featuredPost.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <Link 
                    to={`/blog/${featuredPost.slug}`} 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 inline-flex"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-slate-300">All Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sortedBlogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                  {post.categories.map((category, catIndex) => (
                      <span key={catIndex} className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                        {category}
                      </span>
                    ))}
                    <div className="flex items-center text-slate-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white leading-tight">{post.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-xs">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center space-x-1"
                    >
                      <span>Read</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
