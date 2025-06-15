import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-spore-purple mb-4">SporeWave</h3>
            <p className="text-gray-300 text-sm">
              SporeWave exists to shift the narrative around psychedelics by amplifying real stories, real science, and real sound.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-spore-blue mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#research" className="hover:text-spore-purple transition duration-300">Research</a></li>
              <li><a href="#sound" className="hover:text-spore-purple transition duration-300">Sonic Healing</a></li>
              <li><a href="#tiktok" className="hover:text-spore-purple transition duration-300">TikTok Stories</a></li>
              <li><a href="#partners" className="hover:text-spore-purple transition duration-300">Partners & Advocacy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-spore-pink mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="https://github.com/sporewave/website" className="hover:text-spore-purple transition duration-300">GitHub Repository</a></li>
              <li><a href="https://ko-fi.com/sporewave" className="hover:text-spore-purple transition duration-300">Support on Ko-fi</a></li>
              <li><a href="https://www.tiktok.com/@sporewave" className="hover:text-spore-purple transition duration-300">TikTok Content</a></li>
              <li><a href="https://hopkinspsychedelic.org" className="hover:text-spore-purple transition duration-300">Scientific Research</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-spore-blue mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/sporewave" 
                aria-label="Follow SporeWave on Instagram"
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-spore-purple/50 hover:border-spore-purple hover:bg-spore-purple/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@sporewave" 
                aria-label="Follow SporeWave on TikTok"
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-spore-purple/50 hover:border-spore-purple hover:bg-spore-purple/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@sporewave" 
                aria-label="Follow SporeWave on YouTube"
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-spore-purple/50 hover:border-spore-purple hover:bg-spore-purple/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/sporewave/website" 
                aria-label="SporeWave on GitHub"
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-spore-purple/50 hover:border-spore-purple hover:bg-spore-purple/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="border-t border-gray-800 pt-8 space-y-6">
          <p className="text-gray-400 text-sm text-center">
            SporeWave is open source. View the code, contribute, or report issues on GitHub.
          </p>
          <p className="text-gray-400 text-sm text-center max-w-3xl mx-auto">
            SporeWave exists to shift the narrative around psychedelics by amplifying real stories, real science, and real sound. 
            Our goal: decriminalization, access, and true healing, built together in the open.
          </p>
          <p className="text-gray-500 text-xs text-center mt-6">
            &copy; {new Date().getFullYear()} SporeWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
