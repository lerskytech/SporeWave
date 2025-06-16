import React, { useState, useRef, useEffect } from 'react';

const TikTokVoices: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;
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
        
        <div className="relative max-w-xs mx-auto py-2" style={{ touchAction: 'pan-y' }}>
          {/* TikTok Carousel */}
          <div 
            className="relative overflow-hidden mx-auto"
            style={{
              width: '325px',
              maxWidth: '100%',
              margin: '0 auto',
              boxShadow: '0 0 10px 2px rgba(147, 51, 234, 0.4)',
              borderRadius: '16px',
              animation: 'subtle-pulse 3s infinite alternate'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* TikTok Video 1 - Using official iframe v2 embed code */}
            <iframe 
              src="https://www.tiktok.com/embed/v2/7341913553680987435" 
              width="325" 
              height="575" 
              allow="autoplay; encrypted-media" 
              allowFullScreen 
              style={{ 
                borderRadius: "16px", 
                border: "none",
                display: activeSlide === 0 ? 'block' : 'none'
              }}
            ></iframe>
            
            {/* TikTok Video 2 - Using official iframe v2 embed code */}
            <iframe 
              src="https://www.tiktok.com/embed/v2/7341915623588111659" 
              width="325" 
              height="575" 
              allow="autoplay; encrypted-media" 
              allowFullScreen 
              style={{ 
                borderRadius: "16px", 
                border: "none",
                display: activeSlide === 1 ? 'block' : 'none'
              }}
            ></iframe>
          </div>
          
          {/* Outside navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-x-10 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-purple-600 rounded-full flex items-center justify-center text-white z-10"
            aria-label="Previous video"
            style={{
              transition: 'all 0.2s ease',
              boxShadow: activeSlide === 0 ? 'none' : '0 0 8px #9333ea'
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 translate-x-10 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-purple-600 rounded-full flex items-center justify-center text-white z-10"
            aria-label="Next video"
            style={{
              transition: 'all 0.2s ease',
              boxShadow: activeSlide === totalSlides - 1 ? 'none' : '0 0 8px #9333ea'
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
