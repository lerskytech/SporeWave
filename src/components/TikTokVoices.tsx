import React, { useState, useRef, useEffect } from 'react';
import '../styles/TikTokCarousel.css';

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
  return (
    <section id="tiktok" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">TikTok Voices</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* TikTok Carousel */}
          <div 
            className="tiktok-carousel-container overflow-hidden rounded-lg relative" 
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-0 rounded-lg glow-border"></div>
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full h-full will-change-transform" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* TikTok Video 1 */}
              <div className="w-full flex-shrink-0 overflow-hidden">
                <div className="aspect-w-9 aspect-h-16 bg-black">
                  <iframe
                    src="https://www.tiktok.com/embed/t/ZTjtUs53P/"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full border-0"
                    title="SporeWave TikTok video 1"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              {/* TikTok Video 2 */}
              <div className="w-full flex-shrink-0 overflow-hidden">
                <div className="aspect-w-9 aspect-h-16 bg-black">
                  <iframe
                    src="https://www.tiktok.com/embed/t/ZTjtUpyaj/"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full border-0"
                    title="SporeWave TikTok video 2"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-spore-purple text-white p-3 rounded-r-lg z-10 focus:outline-none"
              aria-label="Previous video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-spore-purple text-white p-3 rounded-l-lg z-10 focus:outline-none"
              aria-label="Next video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Pagination dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${index === activeSlide ? 'bg-spore-purple' : 'bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
