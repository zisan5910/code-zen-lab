import { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail, Share2, Search, PenTool } from 'lucide-react';

// Import components in alphabetical order
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

  // Smooth scrolling handler
  const scrollToSection = (section: string) => {
    if (section === 'research') {
      setCurrentPage('research');
      // Scroll to top when switching to research page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'blog') {
      setCurrentPage('blog');
      // Scroll to top when switching to blog page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setCurrentPage('home');
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
            <Profile
              language={language}
              content={content as any}
              scrollToSection={scrollToSection}
            />

            {/* Main Content Sections */}
            <main className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 gap-8">
                {/* Education Section */}
                <Education language={language} />

                {/* Courses Section */}
                <Courses language={language} />

                {/* Experience Section */}
                <Experience language={language} />

                {/* Certificates Section */}
                <Certificates
                  language={language}
                  content={content}
                  certificates={certificates}
                />

                {/* Skills Section */}
                <Skills language={language} />

                {/* Family Information Section */}
                <Family language={language} />

                {/* Contact Section */}
                <Contact language={language} />
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
