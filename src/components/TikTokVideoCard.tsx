import React from 'react';

interface TikTokVideoCardProps {
  videoId: string;
  author: string;
}

/**
 * TikTokVideoCard - Displays a TikTok video using the official TikTok embed API
 * 
 * This component uses the most reliable method for embedding TikTok videos in React,
 * using the direct video URL that TikTok recommends for embedding.
 */
const TikTokVideoCard: React.FC<TikTokVideoCardProps> = ({ videoId, author }) => {
  // For direct video embed, the most reliable URL format is:
  const embedUrl = `https://www.tiktok.com/@${author}/video/${videoId}`;
  
  return (
    <div 
      className="tiktok-video-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      <iframe
        src={embedUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; encrypted-media"
        title={`TikTok video by @${author}`}
      ></iframe>
    </div>
  );
};

export default TikTokVideoCard;
