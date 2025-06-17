import React, { useEffect } from 'react';

interface TikTokVideoCardProps {
  videoId: string;
  author: string;
  thumbnailUrl?: string;
}

const TikTokVideoCard: React.FC<TikTokVideoCardProps> = ({ videoId, author, thumbnailUrl }) => {
  const defaultThumbnail = `https://i.imgur.com/0BKjgKP.jpg`; // Placeholder image
  const blockquoteId = `tiktok-${videoId}`;
  
  useEffect(() => {
    // Create a script element for the TikTok embed script
    const loadTikTokScript = () => {
      // Remove any existing script first
      const existingScript = document.getElementById('tiktok-embed-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Create new script
      const script = document.createElement('script');
      script.id = 'tiktok-embed-script';
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      
      // Add the script to the document
      document.body.appendChild(script);
    };
    
    // Short timeout to ensure the blockquote is in the DOM first
    setTimeout(loadTikTokScript, 300);
    
    // Cleanup function
    return () => {
      const script = document.getElementById('tiktok-embed-script');
      if (script) {
        script.remove();
      }
    };
  }, [videoId]); // Re-run when videoId changes
  
  return (
    <div 
      className="tiktok-video-container" 
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        borderRadius: '8px'
      }}
    >
      <blockquote 
        className="tiktok-embed" 
        cite={`https://www.tiktok.com/@${author}/video/${videoId}`}
        data-video-id={videoId} 
        style={{
          width: '100%',
          minWidth: '325px', // TikTok's minimum width
          height: '100%',
          margin: '0 auto',
          padding: 0,
          border: 'none',
          backgroundColor: 'black',
        }}
        id={blockquoteId}
      >
        <section>
          <a target="_blank" href={`https://www.tiktok.com/@${author}/video/${videoId}`}></a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokVideoCard;
