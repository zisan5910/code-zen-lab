import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';
import { ChevronLeft, ChevronRight, Expand, Minimize, Loader2, FileText } from 'lucide-react';

interface Certificate {
  title: {
    en: string;
    bn: string;
  };
  image: string;
}

interface CertificatesProps {
  language: 'en' | 'bn';
  content: any;
  certificates: Certificate[];
}

const Certificates = ({ language, content, certificates }: CertificatesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const sliderRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = certificates.length;
    const failed = new Set<string>();

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setIsLoading(false);
      }
    };

    const handleImageError = (src: string) => {
      failed.add(src);
      loadedCount++;
      if (loadedCount === totalImages) {
        setFailedImages(failed);
        setIsLoading(false);
      }
    };

    certificates.forEach((cert, index) => {
      const img = new Image();
      img.src = cert.image;
      img.loading = 'eager';
      img.fetchPriority = 'high';
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(cert.image);
      
      if (index < 3) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = cert.image;
        document.head.appendChild(link);
      }
    });

    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, [certificates]);

  // Navigation handlers
  const handleNavigation = useCallback((newIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  }, []);

  const handlePrevious = useCallback(() => {
    handleNavigation(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
  }, [currentIndex, certificates.length, handleNavigation]);

  const handleNext = useCallback(() => {
    handleNavigation(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, certificates.length, handleNavigation]);

  const handleDotClick = useCallback((index: number) => {
    handleNavigation(index);
  }, [handleNavigation]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrevious();
  };

  // Fullscreen handlers
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (fullscreenRef.current?.requestFullscreen) {
        fullscreenRef.current.requestFullscreen().catch(() => {
          console.error('Error attempting to enable fullscreen');
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(timer);
  }, [certificates.length, isAutoPlaying, isLoading]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Dot navigation
  const getVisibleDots = () => {
    const maxDots = 11;
    const total = certificates.length;
    
    if (total <= maxDots) {
      return certificates.map((_, index) => index);
    }
    
    const current = currentIndex;
    const center = Math.floor(maxDots / 2);
    
    let start = Math.max(0, current - center);
    let end = Math.min(total - 1, current + center);
    
    if (end - start + 1 < maxDots) {
      if (start === 0) {
        end = Math.min(total - 1, maxDots - 1);
      } else if (end === total - 1) {
        start = Math.max(0, total - maxDots);
      }
    }
    
    const dots = [];
    for (let i = start; i <= end; i++) {
      dots.push(i);
    }
    return dots;
  };

  const getDotScale = (index: number) => {
    const visibleDots = getVisibleDots();
    const position = visibleDots.indexOf(index);
    const center = Math.floor(visibleDots.length / 2);
    const distance = Math.abs(position - center);
    
    if (index === currentIndex) return 1.2;
    if (distance === 0) return 1.2;
    if (distance === 1) return 1.0;
    if (distance === 2) return 0.8;
    if (distance === 3) return 0.6;
    if (distance === 4) return 0.5;
    return 0.3;
  };

  const getDotOpacity = (index: number) => {
    const visibleDots = getVisibleDots();
    const position = visibleDots.indexOf(index);
    const center = Math.floor(visibleDots.length / 2);
    const distance = Math.abs(position - center);
    
    if (index === currentIndex) return 1;
    if (distance === 0) return 1;
    if (distance === 1) return 0.8;
    if (distance === 2) return 0.6;
    if (distance === 3) return 0.4;
    if (distance === 4) return 0.3;
    return 0.2;
  };

  return (
    <Element name="certificates">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-surface via-surface/80 to-muted/20 p-8 rounded-2xl shadow-card border border-border"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <FileText className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              {content[language].certifications}
            </h2>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="w-full h-[60vw] sm:h-[50vw] max-h-[400px] min-h-[250px] flex items-center justify-center bg-muted rounded-xl">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
              <span className="text-muted-foreground text-sm sm:text-base">Loading certificates...</span>
            </div>
          </div>
        ) : (
          <div 
            className={`relative w-full max-w-6xl mx-auto ${
              isFullscreen ? 'h-screen w-screen bg-black p-0 m-0 fixed inset-0 z-50' : 'px-2 sm:px-4'
            }`}
            ref={fullscreenRef}
          >
            {/* Certificate Image Container */}
            <div 
              className={`relative group ${
                isFullscreen 
                  ? 'w-full h-full bg-black' 
                  : 'w-full h-[60vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] max-h-[500px] min-h-[250px] bg-transparent'
              } overflow-hidden rounded-xl shadow-lg`}
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className={`w-full h-full flex items-center justify-center ${
                    isFullscreen ? 'p-4 bg-black' : 'bg-transparent'
                  }`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {failedImages.has(certificates[currentIndex].image) ? (
                    <div className="w-full h-full flex items-center justify-center bg-muted rounded-xl">
                      <div className="text-center p-4">
                        <div className="text-muted-foreground font-medium mb-2">
                          Certificate image unavailable offline
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {certificates[currentIndex].title[language]}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={certificates[currentIndex].image}
                      alt={certificates[currentIndex].title[language]}
                      className="max-w-full max-h-full object-contain cursor-pointer"
                      style={{
                        background: 'transparent',
                        filter: isFullscreen ? 'none' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                      }}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      onError={() => {
                        setFailedImages(prev => new Set([...prev, certificates[currentIndex].image]));
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Fullscreen Toggle Button */}
              <button
                onClick={toggleFullscreen}
                className={`absolute top-4 right-4 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm ${
                  isFullscreen ? '!opacity-100' : ''
                }`}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5" />
                ) : (
                  <Expand className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Navigation Controls */}
            {!isFullscreen && (
              <div className="mt-6">
                {/* Title with Navigation Arrows */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePrevious}
                    className="flex p-3 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full bg-surface hover:bg-muted"
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex-1 text-center px-4">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-2 mb-3">
                      {certificates[currentIndex].title[language]}
                    </h3>
                    <button
                      onClick={() => window.open(certificates[currentIndex].image, '_blank')}
                      className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm rounded-full hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {language === 'en' ? 'Verify Certificate' : 'সার্টিফিকেট যাচাই করুন'}
                    </button>
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex p-3 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full bg-surface hover:bg-muted"
                    aria-label="Next certificate"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dot Navigation */}
                {certificates.length > 1 && (
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center space-x-2">
                      {getVisibleDots().map((index) => (
                        <button
                          key={index}
                          className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                            index === currentIndex 
                              ? 'bg-primary' 
                              : 'bg-muted hover:bg-muted-foreground/20'
                          }`}
                          style={{
                            width: `${getDotScale(index) * 6}px`,
                            height: `${getDotScale(index) * 6}px`,
                            opacity: getDotOpacity(index),
                            transform: `scale(${getDotScale(index)})`,
                          }}
                          onClick={() => handleDotClick(index)}
                          aria-label={`Go to certificate ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Position Counter */}
                <div className="flex justify-center">
                  <div className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full">
                    {currentIndex + 1} / {certificates.length}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.section>
    </Element>
  );
};

export default Certificates;