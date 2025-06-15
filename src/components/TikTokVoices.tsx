import React, { useState, useRef, useEffect } from 'react';

// TypeScript declaration for TikTok global object
declare global {
  interface Window {
    TikTok?: {
      reload: () => void;
    }
  }
}

// Styles for TikTok Carousel - embedded to avoid external CSS dependency
const carouselStyles = `
  .tiktok-carousel-wrapper {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    touch-action: pan-y;
    width: 100%;
  }

  .tiktok-carousel-container {
    position: relative;
    width: 100%;
    max-width: 325px;
    margin: 0 auto;
    overflow: hidden;
    touch-action: pan-y;
  }
  
  .tiktok-carousel-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    pointer-events: none;
    box-shadow: 0 0 10px 2px rgba(147, 51, 234, 0.4);
    z-index: 1;
    animation: subtle-pulse 3s infinite alternate;
  }
  
  @keyframes subtle-pulse {
    0% { box-shadow: 0 0 8px 2px rgba(147, 51, 234, 0.3); }
    100% { box-shadow: 0 0 12px 3px rgba(59, 130, 246, 0.5); }
  }
  
  .tiktok-slide {
    width: 100%;
    height: 575px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  .tiktok-embed {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    max-width: 325px !important;
    width: 100% !important;
  }
  
  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
  }
  
  .carousel-arrow:hover {
    background: #9333ea;
    transform: translateY(-50%) scale(1.1);
  }
  
  .carousel-arrow.left {
    left: -50px;
  }
  
  .carousel-arrow.right {
    right: -50px;
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    gap: 8px;
  }
  
  .carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    padding: 0;
  }
  
  .carousel-dot.active {
    background-color: #9333ea;
    transform: scale(1.3);
    box-shadow: 0 0 8px #9333ea;
  }

  @media (max-width: 640px) {
    .carousel-arrow.left {
      left: -20px;
      width: 32px;
      height: 32px;
    }
    
    .carousel-arrow.right {
      right: -20px;
      width: 32px;
      height: 32px;
    }
    
    .tiktok-slide {
      height: auto;
      max-height: 100vh;
    }
  }
`;

const TikTokVoices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // Touch event handlers for mobile swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    
    // Minimum swipe distance required (in pixels)
    const minSwipeDistance = 50;
    
    if (touchDiff > minSwipeDistance) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchDiff < -minSwipeDistance) {
      // Swipe right, go to previous slide
      prevSlide();
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };
  // Function to safely load and init TikTok embed script
  useEffect(() => {
    // Load TikTok embed script
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      
      // Initialize TikTok widget when script loads or when slide changes
      script.onload = () => {
        if (window.TikTok) {
          window.TikTok.reload();
        }
      };
      
      document.body.appendChild(script);
      
      return () => {
        // Clean up script if component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);
  
  // Initialize widget whenever the active slide changes
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (window.TikTok) {
        window.TikTok.reload();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeSlide]);
  
  return (
    <section id="tiktok" className="section bg-gray-900 py-12">
      {/* Inject carousel styles */}
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">TikTok Voices</h2>
        
        <div className="tiktok-carousel-wrapper max-w-xs mx-auto relative py-2">
          {/* TikTok Carousel */}
          <div 
            className="tiktok-carousel-container" 
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full will-change-transform" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* TikTok Video 1 - Using official embed code */}
              <div className="tiktok-slide">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@sporewave/video/7341913553680987435" 
                  data-video-id="7341913553680987435"
                  style={{ visibility: activeSlide === 0 ? 'visible' : 'hidden', position: activeSlide === 0 ? 'static' : 'absolute' }}
                >
                  <section></section>
                </blockquote>
              </div>
              
              {/* TikTok Video 2 - Using official embed code */}
              <div className="tiktok-slide">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@sporewave/video/7341915623588111659" 
                  data-video-id="7341915623588111659"
                  style={{ visibility: activeSlide === 1 ? 'visible' : 'hidden', position: activeSlide === 1 ? 'static' : 'absolute' }}
                >
                  <section></section>
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* Outside navigation buttons */}
          <button 
            onClick={prevSlide}
            className="carousel-arrow left"
            aria-label="Previous video"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="carousel-arrow right"
            aria-label="Next video"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.tiktok.com/@sporewave" 
            className="btn btn-primary inline-flex items-center space-x-2"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span>Follow on TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TikTokVoices;
