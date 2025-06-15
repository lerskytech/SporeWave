import React from 'react';

const GitHubBlock: React.FC = () => {
  return (
    <section className="section bg-black/50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spore-purple">Join Our Community</h2>
            <p className="text-lg text-gray-200 mb-8">
              SporeWave welcomes collaboration. Connect with us, share ideas, and help build
              the future of psychedelic research and wellness tools.
            </p>
            <a 
              href="https://github.com/lerskytech/SporeWave" 
              className="btn btn-primary flex items-center space-x-2 w-fit"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="md:w-1/3 flex justify-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-40 h-40 md:w-48 md:h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-spore-purple to-spore-blue rounded-full blur-lg opacity-70 animate-pulse"></div>
              <svg 
                className="w-full h-full relative" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-labelledby="github-octocat-title"
              >
                <title id="github-octocat-title">GitHub Octocat logo representing SporeWave's open-source transparency and collaboration.</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubBlock;
