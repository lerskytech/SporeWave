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
  const [activeHashtag, setActiveHashtag] = useState<string>('mindfulness');
  
  // Relevant hashtags for our content
  const hashtags = [
    'mindfulness',
    'meditation',
    'consciousness',
    'wellness',
    'spirituality',
    'mentalhealth',
    'awareness'
  ];

  // Minimum follower threshold
  const MIN_FOLLOWERS = 5000;

  // Sample tweets for development (would be replaced by actual API call)
  const sampleTweets: Tweet[] = [
    {
      id: '1',
      text: 'The practice of #mindfulness allows us to be present with our experiences without judgment. This opens the door to greater compassion and understanding.',
      author: {
        name: 'Mindful Living',
        username: 'mindful_living',
        profileImageUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
        followersCount: 28500
      },
      createdAt: '2025-06-16T18:30:00Z',
      metrics: {
        likes: 342,
        retweets: 87,
        replies: 12
      },
      hashtags: ['mindfulness', 'meditation', 'wellness']
    },
    {
      id: '2',
      text: 'Your #consciousness is the foundation of everything you experience. Expanding it is the most profound journey you can undertake. #awareness #spirituality',
      author: {
        name: 'Consciousness Today',
        username: 'consciousness_now',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        followersCount: 12700
      },
      createdAt: '2025-06-17T09:15:00Z',
      metrics: {
        likes: 521,
        retweets: 134,
        replies: 29
      },
      hashtags: ['consciousness', 'awareness', 'spirituality']
    },
    {
      id: '3',
      text: 'Recent research shows that just 10 minutes of #meditation daily can significantly reduce anxiety levels and improve focus. Start small, stay consistent. #mentalhealth',
      author: {
        name: 'Meditation Science',
        username: 'med_science',
        profileImageUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
        followersCount: 35900
      },
      createdAt: '2025-06-17T14:45:00Z',
      metrics: {
        likes: 893,
        retweets: 312,
        replies: 54
      },
      hashtags: ['meditation', 'mentalhealth', 'wellness']
    },
    {
      id: '4',
      text: 'The path to #wellness isn\'t always linear. Embrace the journey with compassion for yourself. #mindfulness #selfcare',
      author: {
        name: 'Wellness Journey',
        username: 'wellness_path',
        profileImageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
        followersCount: 9200
      },
      createdAt: '2025-06-17T16:20:00Z',
      metrics: {
        likes: 267,
        retweets: 76,
        replies: 18
      },
      hashtags: ['wellness', 'mindfulness', 'selfcare']
    },
    {
      id: '5',
      text: 'Expanding your #consciousness isn\'t just about spiritual growth—it\'s about seeing the world with fresh eyes and an open heart. #spirituality #awareness',
      author: {
        name: 'Spiritual Growth',
        username: 'spirit_expand',
        profileImageUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
        followersCount: 18300
      },
      createdAt: '2025-06-17T17:50:00Z',
      metrics: {
        likes: 412,
        retweets: 109,
        replies: 27
      },
      hashtags: ['consciousness', 'spirituality', 'awareness']
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
      <h2 className="feed-title">Community Insights</h2>
      
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
        <p className="twitter-note">Showing tweets from accounts with 5,000+ followers</p>
        <a 
          href={`https://twitter.com/search?q=%23${activeHashtag}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-more-link"
        >
          View more on Twitter
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
