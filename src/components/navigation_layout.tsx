import { Link, useLocation } from 'react-router-dom';
import MobileNav from './navigation_mobile';
import Contact from './Contact';
import { getNavItems } from './navigation';

interface LayoutProps {
  children: React.ReactNode;
  scrollToContact: () => void;
}

const Layout = ({ children, scrollToContact }: LayoutProps) => {
  const location = useLocation();
  const navItems = getNavItems(scrollToContact);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src="/logo_FP.webp" 
                alt="FP Logo" 
                className="w-8 h-8 flex-shrink-0"
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex-shrink-0">
                Francesco Pezone, PhD
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                if (item.type === 'button') {
                  return (
                    <div key={item.path} className="flex-shrink-0">
                      <button 
                        onClick={item.action}
                        className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors relative pb-1 hover:border-b-2 hover:border-blue-400/50"
                      >
                        <Icon size={18} className="flex-shrink-0" />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </button>
                    </div>
                  );
                }

                return (
                  <div key={item.path} className="flex-shrink-0">
                    <Link 
                      to={item.path} 
                      className={`flex items-center space-x-2 transition-colors relative pb-1 ${
                        active 
                          ? 'text-blue-400 border-b-2 border-blue-400' 
                          : 'text-slate-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-400/50'
                      }`}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Mobile Navigation */}
            <MobileNav scrollToContact={scrollToContact} />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {children}

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Layout;