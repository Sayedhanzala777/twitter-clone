import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Tweet from './components/Tweet';
import TweetComposer from './components/TweetComposer';
import { mockTweets } from './data/mockTweets';
import { trends } from './data/trends';
import { suggestions as mockSuggestions } from './data/suggestions';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setTweets(mockTweets);
    setSuggestions(mockSuggestions);
  }, []);

  const handleNewTweet = useCallback((tweetData) => {
    const newTweet = {
      id: tweets.length + 1,
      user: { name: 'You', username: 'yourusername', avatar: 'https://placehold.co/48x48/6366F1/white?text=Y' },
      content: tweetData.content,
      timestamp: 'now',
      likes: 0,
      retweets: 0,
      replies: 0,
      liked: false,
      retweeted: false,
      image: tweetData.image
    };
    setTweets(prev => [newTweet, ...prev]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tweets.length]);

  const handleLike = useCallback((tweetId, liked) => {
    setTweets(prev => prev.map(tweet => tweet.id === tweetId ? { ...tweet, liked, likes: liked ? tweet.likes + 1 : tweet.likes - 1 } : tweet));
  }, []);

  const handleRetweet = useCallback((tweetId, retweeted) => {
    setTweets(prev => prev.map(tweet => tweet.id === tweetId ? { ...tweet, retweeted, retweets: retweeted ? tweet.retweets + 1 : tweet.retweets - 1 } : tweet));
  }, []);

  const handleReply = useCallback((tweetId) => console.log('Reply to tweet:', tweetId), []);
  const handleShare = useCallback((tweetId) => console.log('Share tweet:', tweetId), []);
  const handleFollow = useCallback((userId) => setSuggestions(prev => prev.map(user => user.id === userId ? { ...user, followed: true } : user)), []);

  const isMobile = window.innerWidth < 768;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {isMobile && (
        <div className="lg:hidden sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800 p-4 flex items-center justify-between">
          <button onClick={() => setIsMobileMenuOpen(true)}>Menu</button>
          <div className="text-xl font-bold">𝕏</div>
          <div className="w-8"></div>
        </div>
      )}

      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

      <div className="max-w-7xl mx-auto flex">
        {(isMobile ? isMobileMenuOpen : true) && <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} setIsMobileMenuOpen={setIsMobileMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />}

        <div className={`flex-1 ${isMobile ? '' : 'ml-64'} ${isMobile ? 'lg:ml-64' : ''} border-r border-gray-800`}>
          {isMobile && <div className="sticky top-0 z-30 bg-black/90 backdrop-blur-md border-b border-gray-800 p-4"><h1 className="text-xl font-bold">Home</h1></div>}
          <TweetComposer onTweet={handleNewTweet} />
          {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} onLike={handleLike} onRetweet={handleRetweet} onReply={handleReply} onShare={handleShare} />)}
        </div>

        <RightSidebar trends={trends} suggestions={suggestions} onFollow={handleFollow} />
      </div>
    </div>
  );
};

export default App;
