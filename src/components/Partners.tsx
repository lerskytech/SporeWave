import React from 'react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">
          Partners & Advocacy
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="max-w-3xl mb-12 fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-spore-purple to-spore-blue rounded-full blur opacity-75 animate-pulse"></div>
              <img 
                src="/images/SporeWave7.png" 
                alt="Four symbolic glowing mushrooms representing MAPS, Decriminalize Nature, Thank You Life, and Johns Hopkins, united for psychedelic advocacy and research." 
                className="relative w-full h-auto rounded-full shadow-xl"
              />
            </div>
          </div>
          
          <div className="max-w-3xl text-center fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-200 mb-8">
              SporeWave stands with the world's leading advocacy and science groups to destigmatize and legalize natural healing.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-4 text-center hover:border-spore-purple transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-spore-blue">Decriminalize Nature</h3>
                <p className="text-sm text-gray-300">Grassroots advocacy for psychedelic plant legalization</p>
              </div>
              
              <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-4 text-center hover:border-spore-pink transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-spore-pink">MAPS</h3>
                <p className="text-sm text-gray-300">Research and education promoting psychedelic medicine</p>
              </div>
              
              <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-4 text-center hover:border-spore-blue transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-spore-purple">Thank You Life</h3>
                <p className="text-sm text-gray-300">Integration services and educational resources</p>
              </div>
              
              <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-4 text-center hover:border-spore-purple transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-spore-blue">Johns Hopkins</h3>
                <p className="text-sm text-gray-300">Leading psychedelic research and clinical studies</p>
              </div>
            </div>
            
            <div className="mt-10 space-y-6">
              <h3 className="text-2xl font-bold text-white">Join The Movement</h3>
              <p className="text-gray-200">
                Through open-source collaboration and transparent science, we're building a community dedicated to healing, growth, and psychological wellness.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a 
                  href="https://github.com/sporewave/website" 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noreferrer"
                >
                  Contribute
                </a>
                <a 
                  href="#donate" 
                  className="btn border border-spore-purple text-white hover:bg-spore-purple/20"
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
