import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md py-4 px-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/SporeWaveFavicon.png" 
              alt="Minimalist psychedelic mushroom logo glowing with neon circuitry lines, symbolizing SporeWave's fusion of nature, tech, and open-source collaboration." 
              className="h-12 w-12"
            />
            <span className="text-xl font-bold ml-2 text-white">SporeWave</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-spore-purple transition duration-300">Home</a>
          <a href="#tiktok" className="text-white hover:text-spore-purple transition duration-300">TikTok</a>
          <a href="#research" className="text-white hover:text-spore-purple transition duration-300">Research</a>
          <a href="#sound" className="text-white hover:text-spore-purple transition duration-300">Sound</a>
          <a href="#donate" className="text-white hover:text-spore-purple transition duration-300">Donate</a>
          <a href="#partners" className="text-white hover:text-spore-purple transition duration-300">Partners</a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-4 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-spore-purple transition duration-300">Home</a>
            <a href="#tiktok" className="text-white hover:text-spore-purple transition duration-300">TikTok</a>
            <a href="#research" className="text-white hover:text-spore-purple transition duration-300">Research</a>
            <a href="#sound" className="text-white hover:text-spore-purple transition duration-300">Sound</a>
            <a href="#donate" className="text-white hover:text-spore-purple transition duration-300">Donate</a>
            <a href="#partners" className="text-white hover:text-spore-purple transition duration-300">Partners</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
