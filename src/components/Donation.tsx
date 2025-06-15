import React, { useEffect, useRef } from 'react';

const Donation: React.FC = () => {
  // Simple approach without refs or useEffect
  return (
    <section id="donate" className="section bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-spore-purple to-spore-blue">
          Support SporeWave
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 fade-in order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Your donation funds our tools, content, and outreach to decriminalize, educate, and empower healing. Join the wave.
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/40 border border-spore-purple/30 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-spore-blue">Where Your Support Goes</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-spore-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Development of psychedelic education tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-spore-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Content creation that supports decriminalization efforts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-spore-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Public education and awareness campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-spore-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Healing soundscape development and distribution</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col items-center mt-8 mb-4">
                <a 
                  href="https://ko-fi.com/B0B21GINMO" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block btn bg-spore-purple hover:bg-spore-purple/80 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-transform duration-300 text-lg"
                >
                  Support on Ko-fi
                </a>
                <p className="text-gray-300 text-center mt-3">Help fund our mission with a donation</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-spore-pink to-spore-purple rounded-lg blur opacity-75 animate-pulse"></div>
              <img 
                src="/images/SporeWave5.png" 
                alt="A glowing heart-shaped mycelium network beneath a hand holding a mushroom, representing donations fueling psychedelic healing and awareness." 
                className="relative w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
