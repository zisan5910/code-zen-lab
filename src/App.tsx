import { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail, Share2, Search, PenTool } from 'lucide-react';

// Import components
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Education from './components/Education';
import Experience from './components/Experience';
import FloatingMenu from './components/FloatingMenu';
import Footer from './components/Footer';
import Family from './components/Family';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Skills from './components/Skills';

// Import pages
import Research from './pages/Research';
import Blog from './pages/Blog';

// Import data
import { content, certificates } from './data/content';

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [age, setAge] = useState<number>(0);

  // Calculate age on component mount and update daily
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000); // Update daily
    return () => clearInterval(interval);
  }, []);

  // Navigation configuration
  const navigationItems = [
    { id: 'profile', icon: <UserCircle size={20} /> },
    { id: 'education', icon: <School size={20} /> },
    { id: 'courses', icon: <BookOpen size={20} /> },
    { id: 'experience', icon: <Briefcase size={20} /> },
    { id: 'certificates', icon: <FileBadge size={20} /> },
    { id: 'skills', icon: <Code size={20} /> },
    { id: 'family', icon: <HeartHandshake size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> },
    { id: 'research', icon: <Search size={20} /> },
    { id: 'blog', icon: <PenTool size={20} /> },
    { id: 'social-links', icon: <Share2 size={20} />, target: 'footer' }
  ];

  // Handle URL-based routing and deep linking
  useEffect(() => {
    const path = window.location.pathname;
    const section = path.substring(1); // Remove leading slash
    
    if (section === 'research') {
      setCurrentPage('research');
    } else if (section === 'blog') {
      setCurrentPage('blog');
    } else if (section && ['profile', 'education', 'courses', 'experience', 'certificates', 'skills', 'family', 'contact'].includes(section)) {
      setCurrentPage('home');
      setActiveSection(section);
      // Small delay to ensure DOM is ready for scrolling
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          smooth: true,
          offset: -64,
        });
      }, 100);
    } else {
      // Default to home page
      setCurrentPage('home');
      setActiveSection('profile');
    }
  }, []);

  // Update URL when section changes
  const updateURL = (section: string, page: string = 'home') => {
    const newURL = page === 'home' ? `/${section}` : `/${page}`;
    window.history.pushState({}, '', newURL);
  };

  // Smooth scrolling handler
  const scrollToSection = (section: string) => {
    if (section === 'research') {
      setCurrentPage('research');
      updateURL('research', 'research');
      // Scroll to top when switching to research page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'blog') {
      setCurrentPage('blog');
      updateURL('blog', 'blog');
      // Scroll to top when switching to blog page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setCurrentPage('home');
    updateURL(section);
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  };

  // Back to home handler
  const handleBackToHome = () => {
    setCurrentPage('home');
    setActiveSection('profile');
    updateURL('profile');
    // Scroll to top when going back to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'research':
        return <Research language={language} />;
      case 'blog':
        return <Blog language={language} />;
      default:
        return (
          <>
            {/* Profile Section */}
            <Element name="profile">
              <Profile
                language={language}
                content={content as any}
                scrollToSection={scrollToSection}
              />
            </Element>

            {/* Main Content Sections */}
            <main className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 gap-8">
                {/* Education Section */}
                <Element name="education">
                  <Education language={language} />
                </Element>

                {/* Courses Section */}
                <Element name="courses">
                  <Courses language={language} />
                </Element>

                {/* Experience Section */}
                <Element name="experience">
                  <Experience language={language} />
                </Element>

                {/* Certificates Section */}
                <Element name="certificates">
                  <Certificates
                    language={language}
                    content={content}
                    certificates={certificates}
                  />
                </Element>

                {/* Skills Section */}
                <Element name="skills">
                  <Skills language={language} />
                </Element>

                {/* Family Information Section */}
                <Element name="family">
                  <Family language={language} age={age} />
                </Element>

                {/* Contact Section */}
                <Element name="contact">
                  <Contact language={language} />
                </Element>
              </div>
            </main>

            {/* Footer */}
            <Element name="footer">
              <Footer language={language} />
            </Element>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navigation 
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        onBackToHome={handleBackToHome}
      />

      {/* Render Current Page */}
      {renderCurrentPage()}

      {/* Professional Floating Menu */}
      <FloatingMenu 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
      />
    </div>
  );
}

export default App;
