import React, { useState, useEffect, useRef } from 'react';
import './TikTokCarousel.css';
import '../styles/TikTokFix.css'; // Import dedicated fix styles
import TikTokVideoCard from './TikTokVideoCard';

/**
 * TikTokVoices - Professional carousel implementation for TikTok videos
 * 
 * Features:
 * - Reliable video loading on all devices
 * - Touch-friendly navigation with swipe gestures
 * - Keyboard navigation support
 * - Responsive layout and controls
 * - Pagination dots for position indication
 */
const TikTokVoices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Define all videos centrally for easier management
  const videos = [
    { videoId: "7415355047913000222", author: "entheogeninsight" },
    { videoId: "7216268901723951407", author: "entheogeninsight" },
    { videoId: "7215189553415145771", author: "entheogeninsight" },
    { videoId: "7346732457308069166", author: "sporewave" },
    { videoId: "7347959263780943659", author: "sporewave" }
  ];
  
  const totalSlides = videos.length;
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Add keyboard navigation support
  useEffect(() => {
    // Handle loading state
    setIsLoading(true);
    
    // Clear loading after a short delay to allow iframe to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [activeSlide]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    // Min swipe distance threshold to trigger slide change
    const minSwipeDistance = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (swipeDistance > minSwipeDistance) {
      // Swipe right, go to previous slide
      prevSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swipe left, go to next slide
      nextSlide();
    }
    
    // Reset touch coordinates
    setTouchStartX(0);
    setTouchEndX(0);
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

          {/* Professional TikTok Carousel with loading states and optimized rendering */}
          <div className="mx-auto" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div 
              ref={containerRef}
              className="tiktok-carousel-container relative mx-auto"
              style={{
                width: '360px', // Further increased width for better fit
                maxWidth: '90vw', // Responsive width for mobile
                height: '560px', // Adjusted height for new proportions
                margin: '0 auto',
                boxShadow: '0 0 15px 3px rgba(147, 51, 234, 0.4)',
                borderRadius: '16px',
                animation: 'subtle-pulse 3s infinite alternate',
                position: 'relative', 
                overflow: 'hidden',
                backgroundColor: '#121212',
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
              {/* Loading indicator */}
              {isLoading && (
                <div className="loading-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(18, 18, 18, 0.7)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10,
                  borderRadius: '16px'
                }}>
                  <div className="spinner" style={{
                    width: '50px',
                    height: '50px',
                    border: '4px solid rgba(147, 51, 234, 0.3)',
                    borderTop: '4px solid rgba(147, 51, 234, 0.9)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                </div>
              )}
              
              {/* Dynamic video rendering from videos array */}
              {videos.map((video, index) => (
                activeSlide === index && (
                  <div 
                    key={video.videoId} 
                    className="carousel-slide" 
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      opacity: isLoading ? '0.3' : '1',
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  >
                    <TikTokVideoCard 
                      videoId={video.videoId} 
                      author={video.author}
                    />
                  </div>
                )
              ))}
              
              {/* CSS for spinner animation */}
              <style dangerouslySetInnerHTML={{
                __html: `
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `
              }} />
            </div>
          </div>
        </div>
        
        {/* Enhanced pagination dots with active state animation */}
        <div className="pagination-dots flex justify-center mt-4">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`pagination-dot mx-1 ${activeSlide === i ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: activeSlide === i ? '12px' : '10px',
                height: activeSlide === i ? '12px' : '10px',
                borderRadius: '50%',
                backgroundColor: activeSlide === i ? 'rgba(147, 51, 234, 0.9)' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                padding: 0,
                transition: 'all 0.3s ease',
                transform: activeSlide === i ? 'scale(1.2)' : 'scale(1)',
                boxShadow: activeSlide === i ? '0 0 8px rgba(147, 51, 234, 0.5)' : 'none'
              }}
            />
          ))}
        </div>
        
        {/* Professional TikTok follow button */}
        <div className="text-center mt-8">
          <a 
            href="https://www.tiktok.com/@sporewave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
            style={{
              boxShadow: '0 4px 12px rgba(140, 0, 255, 0.2)',
              transform: 'translateY(0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(-2px)';
              target.style.boxShadow = '0 6px 16px rgba(140, 0, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 4px 12px rgba(140, 0, 255, 0.2)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19.321 5.562a4.174 4.174 0 0 1-1.866-1.703 4.08 4.08 0 0 1-.431-2.566h-3.38v17.275c0 .904-.726 1.637-1.63 1.637a1.63 1.63 0 0 1-1.633-1.63c0-.904.732-1.635 1.633-1.635.19 0 .367.037.536.101v-3.369a5.025 5.025 0 0 0-.536-.03c-2.767 0-5.012 2.246-5.012 5.01 0 2.767 2.245 5.012 5.012 5.012 2.764 0 5.01-2.245 5.01-5.011V9.773a8.907 8.907 0 0 0 5.144 1.63V7.991a5.537 5.537 0 0 1-2.847-.784v-1.645z"/>
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
