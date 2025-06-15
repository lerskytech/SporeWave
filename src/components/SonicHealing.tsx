import React, { useState } from 'react';

const SonicHealing: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section id="sound" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">
          Sonic Healing
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-spore-purple to-spore-blue rounded-full blur opacity-75 animate-pulse"></div>
              <img 
                src="/images/SporeWave4.png" 
                alt="Psychedelic mushroom speaker emitting ambient soundwaves in a neon dreamscape, visualizing sound healing through SporeWave's music." 
                className="relative w-full h-auto rounded-full shadow-2xl"
              />
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-spore-blue/80 rounded-full flex items-center justify-center cursor-pointer ${isPlaying ? 'scale-90' : 'scale-100'} transition-all duration-300`}
                onClick={() => setIsPlaying(!isPlaying)}
                role="button"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsPlaying(!isPlaying);
                  }
                }}
              >
                {isPlaying ? (
                  <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Listen to curated soundscapes and ambient tracks for mindful journeys, integration, and everyday mental wellness.
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl text-spore-blue">Delta Dreamscape</h3>
                    <span className="text-gray-400">8:24</span>
                  </div>
                  <div className="h-1 w-full bg-gray-700 rounded-full mb-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-spore-purple to-spore-blue rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Deep meditation</span>
                    <span>Theta waves</span>
                  </div>
                </div>
                
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl text-spore-pink">Mushroom Voyage</h3>
                    <span className="text-gray-400">12:37</span>
                  </div>
                  <div className="h-1 w-full bg-gray-700 rounded-full mb-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-spore-pink to-spore-blue rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Integration journey</span>
                    <span>Alpha waves</span>
                  </div>
                </div>
                
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl text-spore-purple">Healing Forest</h3>
                    <span className="text-gray-400">10:15</span>
                  </div>
                  <div className="h-1 w-full bg-gray-700 rounded-full mb-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-spore-blue to-spore-purple rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Ambient wellness</span>
                    <span>Nature sounds</span>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary mt-4">
                Explore Sound Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SonicHealing;
