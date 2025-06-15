import React from 'react';

const Research: React.FC = () => {
  return (
    <section id="research" className="section bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">Featured Research</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 fade-in order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-spore-purple to-spore-blue rounded-lg blur opacity-75"></div>
              <img 
                src="/images/SporeWave2.png" 
                alt="Futuristic desk showing psilocybin research papers and brainwave charts, representing scientific support for mushroom-based trauma healing." 
                className="relative w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Johns Hopkins, MAPS, and Thank You Life are leading the research showing psilocybin can treat depression, PTSD, and addiction. SporeWave amplifies their science for public good.
              </p>
              <div className="space-y-4">
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2 text-spore-blue">Depression Treatment</h3>
                  <p className="text-gray-300">Recent studies show significant reductions in depression symptoms after just 1-2 sessions of psilocybin-assisted therapy.</p>
                </div>
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2 text-spore-pink">PTSD Recovery</h3>
                  <p className="text-gray-300">Veterans and trauma survivors report breakthrough healing experiences with guided psychedelic sessions.</p>
                </div>
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2 text-spore-purple">Addiction Treatment</h3>
                  <p className="text-gray-300">Clinical trials demonstrate psilocybin's potential to break addiction patterns and promote lasting behavioral change.</p>
                </div>
              </div>
              <a 
                href="https://hopkinspsychedelic.org" 
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-6 inline-block"
              >
                Read the Research
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
