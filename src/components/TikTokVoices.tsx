import React, { useState, useEffect, useRef } from 'react';
import './TikTokCarousel.css';
import '../styles/TikTokFix.css'; // Import dedicated fix styles
import TikTokVideoCard from './TikTokVideoCard';

// Using TikTokVideoCard component with thumbnails and play buttons
const TikTokVoices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5; // We have 5 TikTok videos
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
  
  // Touch gesture handlers with improved mobile scrolling support
  const handleTouchStart = (e: React.TouchEvent) => {
    // Store initial touch position
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    // Update current touch position
    touchEndX.current = e.touches[0].clientX;
    
    // Don't prevent default scrolling behavior
    // This allows the page to scroll normally when swiping vertically
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchDiff = touchStartX.current - touchEndX.current;
    
    // Minimum swipe distance required (in pixels)
    const minSwipeDistance = 50;
    
    // Only handle horizontal swipes
    if (Math.abs(touchDiff) > minSwipeDistance) {
      // Prevent click events after swipe
      e.preventDefault();
      
      if (touchDiff > minSwipeDistance) {
        nextSlide();
      } else if (touchDiff < -minSwipeDistance) {
        prevSlide();
      }
    }
    
    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };
  
  return (
    <section id="tiktok" className="section bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">TikTok Voices</h2>
        
        {/* Responsive container with improved spacing for navigation */}
        <div className="relative mx-auto" style={{ 
          maxWidth: '350px', 
          margin: '0 auto', 
          position: 'relative', 
          paddingLeft: '50px', 
          paddingRight: '50px' 
        }}>
          {/* Navigation buttons - positioned farther outside to avoid video interference */}
          <button 
            onClick={prevSlide}
            className="absolute w-12 h-12 bg-black/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white nav-button left"
            aria-label="Previous video"
            style={{
              top: '50%',
              left: '-30px',
              transform: 'translateY(-50%)',
              zIndex: 50,
              transition: 'all 0.2s ease',
              boxShadow: '0 0 8px rgba(147, 51, 234, 0.7)',
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute w-12 h-12 bg-black/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white nav-button right"
            aria-label="Next video"
            style={{
              top: '50%',
              right: '-30px',
              transform: 'translateY(-50%)',
              zIndex: 50,
              transition: 'all 0.2s ease',
              boxShadow: '0 0 8px rgba(147, 51, 234, 0.7)',
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* TikTok Carousel with improved video content display */}
          <div className="mx-auto" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div 
              ref={containerRef}
              className="tiktok-carousel-container relative mx-auto"
              style={{
                width: '280px',
                height: '500px',
                margin: '0 auto',
                boxShadow: '0 0 15px 3px rgba(147, 51, 234, 0.4)',
                borderRadius: '16px',
                animation: 'subtle-pulse 3s infinite alternate',
                position: 'relative', 
                overflow: 'hidden',
                backgroundColor: '#000',
                border: 'none',
                touchAction: 'pan-y', /* Enable vertical scrolling on mobile */
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Video 1 */}
              {activeSlide === 0 && (
                <div className="carousel-slide" style={{ width: '100%', height: '100%' }}>
                  <TikTokVideoCard videoId="7415355047913000222" author="entheogeninsight" />
                </div>
              )}
              
              {/* Video 2 */}
              {activeSlide === 1 && (
                <div className="carousel-slide" style={{ width: '100%', height: '100%' }}>
                  <TikTokVideoCard videoId="7216268901723951407" author="entheogeninsight" />
                </div>
              )}
              
              {/* Video 3 */}
              {activeSlide === 2 && (
                <div className="carousel-slide" style={{ width: '100%', height: '100%' }}>
                  <TikTokVideoCard videoId="7215189553415145771" author="entheogeninsight" />
                </div>
              )}
              
              {/* Video 4 */}
              {activeSlide === 3 && (
                <div className="carousel-slide" style={{ width: '100%', height: '100%' }}>
                  <TikTokVideoCard videoId="7346732457308069166" author="sporewave" />
                </div>
              )}
              
              {/* Video 5 */}
              {activeSlide === 4 && (
                <div className="carousel-slide" style={{ width: '100%', height: '100%' }}>
                  <TikTokVideoCard videoId="7347959263780943659" author="sporewave" />
                </div>
              )}
            </div>
          </div>
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

          /* Enhanced mobile styling for navigation */
          @media (max-width: 640px) {
            .nav-button.left {
              left: -5px;
              transform: translateY(-50%);
              width: 10vw;
              max-width: 40px;
              min-width: 32px;
            }
            .nav-button.right {
              right: -5px;
              transform: translateY(-50%);
              width: 10vw;
              max-width: 40px;
              min-width: 32px;
            }
            /* Improved mobile touch area */
            .tiktok-carousel-container {
              touch-action: pan-y; /* Enable vertical scrolling */
            }
          }
        `}
      </style>
    </section>
  );
};

export default TikTokVoices;
