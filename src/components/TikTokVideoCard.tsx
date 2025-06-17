import React, { useEffect, useRef } from 'react';

interface TikTokVideoCardProps {
  videoId: string;
  author: string;
  thumbnailUrl?: string;
}

const TikTokVideoCard: React.FC<TikTokVideoCardProps> = ({ videoId, author, thumbnailUrl }) => {
  const defaultThumbnail = `https://i.imgur.com/0BKjgKP.jpg`; // Placeholder image
  const tiktokUrl = `https://www.tiktok.com/@${author}/video/${videoId}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Load TikTok embed script
  useEffect(() => {
    // Create a script element for the TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="tiktok-video-card" style={{
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'none',
      touchAction: 'none',
      maxWidth: '100%',
      backgroundColor: '#000',
      padding: 0
    }}>
      {/* TikTok iframe embed */}
      <iframe 
        ref={iframeRef}
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          backgroundColor: '#000'
        }}
        allowFullScreen 
        allow="encrypted-media; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default TikTokVideoCard;
