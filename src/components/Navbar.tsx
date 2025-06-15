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
          <a href="https://github.com/sporewave/website" className="flex items-center space-x-1 bg-spore-purple hover:bg-spore-blue text-white px-4 py-2 rounded-lg transition duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
            </svg>
            <span>Fork on GitHub</span>
          </a>
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
            <a href="https://github.com/sporewave/website" className="flex items-center space-x-1 bg-spore-purple hover:bg-spore-blue text-white px-4 py-2 rounded-lg transition duration-300 w-full justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
              </svg>
              <span>Fork on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
