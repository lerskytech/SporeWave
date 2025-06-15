import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-spore-purple via-spore-blue to-spore-pink">
              SporeWave
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200">
              Psychedelic Healing. Real Stories, Real Science.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#donate" 
                className="btn btn-primary"
              >
                Join the Movement
              </a>
              <a 
                href="#research" 
                className="btn border border-spore-purple text-white hover:bg-spore-purple/20 focus:ring-spore-purple"
              >
                Explore Research
              </a>
            </div>
          </div>
          <div className="md:w-1/2 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-spore-purple to-spore-blue rounded-lg blur opacity-75 animate-pulse"></div>
              <img 
                src="/images/SporeWave1.png" 
                alt="Bioluminescent mushroom forest under a cosmic aurora, symbolizing psychedelic healing and ambient consciousness." 
                className="relative w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
