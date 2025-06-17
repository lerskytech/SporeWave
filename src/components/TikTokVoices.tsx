import React, { useState, useRef, useEffect } from 'react';
import './TikTokCarousel.css';
import './TikTokFix.css'; // Import dedicated fix styles
import TikTokVideoCard from './TikTokVideoCard';

// Using TikTokVideoCard component with thumbnails and play buttons
const TikTokVoices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3; // Updated to 3 slides based on the content below
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Add keyboard navigation support
  useEffect(() => {
    // Keyboard navigation
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
  
  // Touch gesture handlers
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
      nextSlide();
    } else if (touchDiff < -minSwipeDistance) {
      prevSlide();
    }
    
    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };
  
  return (
    <section id="tiktok" className="section bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">TikTok Voices</h2>
        
        <div className="relative mx-auto py-2" style={{ touchAction: 'none', maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          {/* TikTok Carousel */}
          <div 
            ref={containerRef}
            className="tiktok-carousel-container relative mx-auto"
            style={{
              width: '190px', // Further reduced to eliminate any possible borders
              margin: '0 auto',
              boxShadow: '0 0 10px 2px rgba(147, 51, 234, 0.4)',
              borderRadius: '16px',
              animation: 'subtle-pulse 3s infinite alternate',
              aspectRatio: '9/16', // Standard TikTok aspect ratio
              position: 'relative', 
              overflow: 'hidden', // Prevent scrolling within frame
              touchAction: 'none', // Prevent scrolling but still allow swipe gestures for carousel
              padding: 0, // Zero padding to eliminate any space for white borders
              backgroundColor: '#000', // Black background to match TikTok's color scheme
              border: 'none' // Ensure no borders
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* TikTok Videos */}
            <div className="carousel-slide" style={{ position: 'absolute', width: '100%', height: '100%', opacity: activeSlide === 0 ? 1 : 0, pointerEvents: activeSlide === 0 ? 'auto' : 'none', touchAction: 'none' }}>
              <TikTokVideoCard videoId="7415355047913000222" author="entheogeninsight" thumbnailUrl="https://i.imgur.com/EMvjf4F.jpg" />
            </div>
            
            <div className="carousel-slide" style={{ position: 'absolute', width: '100%', height: '100%', opacity: activeSlide === 1 ? 1 : 0, pointerEvents: activeSlide === 1 ? 'auto' : 'none', touchAction: 'none' }}>
              <TikTokVideoCard videoId="7216268901723951407" author="entheogeninsight" thumbnailUrl="https://i.imgur.com/SLjDThx.jpg" />
            </div>
            
            <div className="carousel-slide" style={{ position: 'absolute', width: '100%', height: '100%', opacity: activeSlide === 2 ? 1 : 0, pointerEvents: activeSlide === 2 ? 'auto' : 'none', touchAction: 'none' }}>
              <TikTokVideoCard videoId="7215189553415145771" author="entheogeninsight" thumbnailUrl="https://i.imgur.com/Z2NI97I.jpg" />
            </div>
          </div>
        </div>
        
        {/* Navigation Controls - Positioned on the sides of the carousel */}
        <div className="relative" style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
          <button 
            onClick={prevSlide}
            className="absolute left-0 w-10 h-10 bg-black/70 hover:bg-purple-600 rounded-full flex items-center justify-center text-white"
            aria-label="Previous video"
            style={{
              top: '-125px', // Position vertically centered relative to carousel height
              left: '-20px',
              zIndex: 50,
              transition: 'all 0.2s ease',
              boxShadow: '0 0 8px #9333ea',
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 w-10 h-10 bg-black/70 hover:bg-purple-600 rounded-full flex items-center justify-center text-white"
            aria-label="Next video"
            style={{
              top: '-125px', // Position vertically centered relative to carousel height
              right: '-20px',
              zIndex: 50,
              transition: 'all 0.2s ease',
              boxShadow: '0 0 8px #9333ea',
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className="w-2 h-2 rounded-full bg-gray-400 transition-all duration-200"
              style={{
                transform: index === activeSlide ? 'scale(1.5)' : 'scale(1)',
                backgroundColor: index === activeSlide ? '#9333ea' : 'rgba(255,255,255,0.5)',
                boxShadow: index === activeSlide ? '0 0 8px #9333ea' : 'none'
              }}
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

      <style>
        {`
          @keyframes subtle-pulse {
            0% { box-shadow: 0 0 8px 2px rgba(147, 51, 234, 0.3); }
            100% { box-shadow: 0 0 12px 3px rgba(59, 130, 246, 0.5); }
          }

          @media (max-width: 640px) {
            button.absolute.left-0 {
              left: 10px;
              transform: translateY(-50%);
            }
            button.absolute.right-0 {
              right: 10px;
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TikTokVoices;
