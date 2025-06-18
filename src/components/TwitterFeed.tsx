import React, { useState, useEffect } from 'react';
import '../styles/TwitterFeed.css';

interface Tweet {
  id: string;
  text: string;
  author: {
    name: string;
    username: string;
    profileImageUrl: string;
    followersCount: number;
  };
  createdAt: string;
  metrics: {
    likes: number;
    retweets: number;
    replies: number;
  };
  hashtags: string[];
}

/**
 * TwitterFeed - Professional curated Twitter feed component
 * 
 * Features:
 * - Displays tweets with relevant hashtags
 * - Filters for accounts with at least 5K followers
 * - Professional, clean display format
 * - Auto-refreshing content
 */
const TwitterFeed: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeHashtag, setActiveHashtag] = useState<string>('psilocybinresearch');
  
  // Relevant hashtags focused on scientific/educational psilocybin content
  const hashtags = [
    'psilocybinresearch',
    'neuroplasticity',
    'psychedelicmedicine',
    'mycology',
    'psychedelicscience',
    'therapeuticpotential',
    'mentalhealthresearch'
  ];

  // Minimum follower threshold
  const MIN_FOLLOWERS = 5000;

  // Sample tweets for development (would be replaced by actual API call)
  const sampleTweets: Tweet[] = [
    {
      id: '1',
      text: 'Our latest peer-reviewed study on #psilocybinresearch shows significant potential for treating treatment-resistant depression. The data reveals sustained therapeutic effects at 6-month follow-up. #psychedelicmedicine #mentalhealthresearch',
      author: {
        name: 'Psychedelic Research Institute',
        username: 'psych_research',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
        followersCount: 58700
      },
      createdAt: '2025-06-16T18:30:00Z',
      metrics: {
        likes: 1342,
        retweets: 587,
        replies: 76
      },
      hashtags: ['psilocybinresearch', 'psychedelicmedicine', 'mentalhealthresearch']
    },
    {
      id: '2',
      text: 'New findings: Single administration of psilocybin increases #neuroplasticity in the prefrontal cortex for up to 48 hours post-session. This mechanism may explain the rapid antidepressant effects observed clinically. #psychedelicscience #neuroscience',
      author: {
        name: 'Neuroplasticity Lab',
        username: 'neuro_plasticity',
        profileImageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
        followersCount: 42500
      },
      createdAt: '2025-06-17T09:15:00Z',
      metrics: {
        likes: 921,
        retweets: 334,
        replies: 49
      },
      hashtags: ['neuroplasticity', 'psychedelicscience', 'neuroscience']
    },
    {
      id: '3',
      text: 'Mycological update: Recent advances in cultivation techniques are allowing researchers to produce consistent, pharmaceutical-grade psilocybin compounds for clinical trials. This standardization is crucial for medicine development. #mycology #therapeuticpotential',
      author: {
        name: 'Mycology Research',
        username: 'mycology_science',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
        followersCount: 35900
      },
      createdAt: '2025-06-17T14:45:00Z',
      metrics: {
        likes: 693,
        retweets: 212,
        replies: 34
      },
      hashtags: ['mycology', 'therapeuticpotential', 'psilocybinresearch']
    },
    {
      id: '4',
      text: 'Educational seminar: "The Science of Psychedelics in Therapy" - Join us to learn about the latest research protocols, safety guidelines, and therapeutic frameworks being used in clinical settings. #psychedelicmedicine #mentalhealthresearch',
      author: {
        name: 'Therapeutic Applications Lab',
        username: 'therapeutic_apps',
        profileImageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
        followersCount: 29200
      },
      createdAt: '2025-06-17T16:20:00Z',
      metrics: {
        likes: 567,
        retweets: 176,
        replies: 38
      },
      hashtags: ['psychedelicmedicine', 'mentalhealthresearch', 'therapeuticpotential']
    },
    {
      id: '5',
      text: 'Important distinction: When discussing #psychedelicscience, we must separate clinical applications from recreational use. Our focus remains on developing evidence-based therapeutic protocols within regulated frameworks. #psilocybinresearch',
      author: {
        name: 'Clinical Psychedelics',
        username: 'clinical_psychs',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
        followersCount: 48300
      },
      createdAt: '2025-06-17T17:50:00Z',
      metrics: {
        likes: 812,
        retweets: 309,
        replies: 57
      },
      hashtags: ['psychedelicscience', 'psilocybinresearch', 'mentalhealthresearch']
    }
  ];

  // Function to fetch tweets - would connect to Twitter API in production
  const fetchTweets = async (tag: string) => {
    setIsLoading(true);
    
    try {
      // In a production app, this would be an actual API call:
      // const response = await fetch(`https://api.twitter.com/2/tweets/search/recent?query=%23${tag}&...`);
      // const data = await response.json();
      
      // For demo purposes, filter sample tweets by selected hashtag
      setTimeout(() => {
        const filteredTweets = sampleTweets.filter(tweet => 
          tweet.hashtags.includes(tag) && 
          tweet.author.followersCount >= MIN_FOLLOWERS
        );
        setTweets(filteredTweets);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error fetching tweets:', error);
      setIsLoading(false);
    }
  };

  // Initial fetch and set up refresh interval
  useEffect(() => {
    fetchTweets(activeHashtag);
    
    // Refresh tweets every 5 minutes
    const refreshInterval = setInterval(() => {
      fetchTweets(activeHashtag);
    }, 300000);
    
    return () => clearInterval(refreshInterval);
  }, [activeHashtag]);

  // Format date to readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Format large numbers with K/M notation
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <div className="twitter-feed-wrapper">
      <h2 className="feed-title">Psilocybin Research Insights</h2>
      
      {/* Hashtag filter buttons */}
      <div className="hashtag-filters">
        {hashtags.map(tag => (
          <button
            key={tag}
            className={`hashtag-button ${activeHashtag === tag ? 'active' : ''}`}
            onClick={() => setActiveHashtag(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Finding valuable insights...</p>
        </div>
      )}
      
      {/* Tweets display */}
      <div className="tweets-container">
        {!isLoading && tweets.length === 0 && (
          <div className="no-tweets-message">
            <p>No tweets found for #{activeHashtag} from accounts with 5K+ followers.</p>
          </div>
        )}
        
        {!isLoading && tweets.map(tweet => (
          <div key={tweet.id} className="tweet-card">
            <div className="tweet-header">
              <img 
                src={tweet.author.profileImageUrl} 
                alt={tweet.author.name} 
                className="profile-image" 
              />
              <div className="author-info">
                <div className="author-name">{tweet.author.name}</div>
                <div className="author-username">@{tweet.author.username}</div>
              </div>
              <div className="followers-badge">
                {formatNumber(tweet.author.followersCount)} followers
              </div>
            </div>
            
            <div className="tweet-content">
              <p>{tweet.text}</p>
            </div>
            
            <div className="tweet-footer">
              <div className="tweet-date">{formatDate(tweet.createdAt)}</div>
              <div className="tweet-metrics">
                <span className="metric"><i className="fa fa-heart"></i> {formatNumber(tweet.metrics.likes)}</span>
                <span className="metric"><i className="fa fa-retweet"></i> {formatNumber(tweet.metrics.retweets)}</span>
                <span className="metric"><i className="fa fa-reply"></i> {formatNumber(tweet.metrics.replies)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="twitter-footer">
        <p className="twitter-note">Showing scientific insights from researchers with 5,000+ followers</p>
        <a 
          href={`https://twitter.com/search?q=%23${activeHashtag}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-more-link"
        >
          View more research on Twitter
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
