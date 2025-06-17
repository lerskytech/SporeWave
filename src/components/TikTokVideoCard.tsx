import React from 'react';

interface TikTokVideoCardProps {
  videoId: string;
  author: string;
  thumbnailUrl?: string;
}

const TikTokVideoCard: React.FC<TikTokVideoCardProps> = ({ videoId, author, thumbnailUrl }) => {
  const defaultThumbnail = `https://i.imgur.com/0BKjgKP.jpg`; // Placeholder image
  const tiktokUrl = `https://www.tiktok.com/@${author}/video/${videoId}`;
  
  return (
    <div className="tiktok-video-card" style={{
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'none',
      touchAction: 'none',
      maxWidth: '100%', // Ensure it doesn't exceed container width
      backgroundColor: '#000', // Black background to match TikTok
      padding: 0 // Zero padding to eliminate white space
    }}>
      {/* Use direct img element instead of background-image */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}>
        <img 
          src={thumbnailUrl || defaultThumbnail} 
          alt={`TikTok by @${author}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        {/* Overlay with gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem' // Reduced padding to prevent content cutoff
        }}>
          {/* TikTok logo */}
          <div style={{ 
            position: 'absolute', 
            top: '12px', 
            left: '12px', 
            display: 'flex', 
            alignItems: 'center'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span style={{ marginLeft: '8px', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>@{author}</span>
          </div>
          
          {/* Play button */}
          <a 
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid white',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              boxShadow: '0 0 15px rgba(147, 51, 234, 0.7)',
            }}
            className="hover:scale-110 hover:bg-purple-600/30"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </a>
          
          {/* "Watch on TikTok" text */}
          <p style={{ 
            color: 'white', 
            marginTop: '16px', 
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            fontSize: '14px'
          }}>
            Watch on TikTok
          </p>
        </div>
      </div>
    </div>
  );
};

export default TikTokVideoCard;
