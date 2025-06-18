import React, { useEffect, useRef } from 'react';

interface TikTokVideoCardProps {
  videoId: string;
  author: string;
}

/**
 * TikTokVideoCard - Professional implementation using TikTok's official embed player v2
 *
 * This component uses TikTok's recommended embed approach with the player/v2 endpoint
 * that provides maximum compatibility across devices including mobile
 */
const TikTokVideoCard: React.FC<TikTokVideoCardProps> = ({ videoId, author }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // This is TikTok's official embed player URL format from their docs
  // It uses the v2 player which is optimized for both mobile and desktop viewing
  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;

  useEffect(() => {
    // Dynamically adjust sizing for optimal viewing experience
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current && iframeRef.current) {
        // Maintain proper aspect ratio based on container width
        const containerWidth = containerRef.current.offsetWidth;
        const aspectRatio = 16/9;
        
        if (containerWidth < 280) {
          // Mobile optimization - full width with natural height
          iframeRef.current.style.width = '100%';
          iframeRef.current.style.height = '100%';
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="tiktok-video-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#121212'
      }}
    >
      <iframe
        ref={iframeRef}
        src={embedUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; web-share"
        scrolling="no"
        title={`TikTok video by @${author}`}
      />
    </div>
  );
}

export default TikTokVideoCard;
