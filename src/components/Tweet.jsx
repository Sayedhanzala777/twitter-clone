import React, { useState } from 'react';
import { Heart, Repeat, MessageCircle, Share2, X } from 'lucide-react';

const Tweet = ({ tweet, onLike, onRetweet, onReply, onShare }) => {
  const [isLiked, setIsLiked] = useState(tweet.liked);
  const [isRetweeted, setIsRetweeted] = useState(tweet.retweeted);
  const [likeCount, setLikeCount] = useState(tweet.likes);
  const [retweetCount, setRetweetCount] = useState(tweet.retweets);

  const handleLike = () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikeCount(prev => newLiked ? prev + 1 : prev - 1);
    onLike(tweet.id, newLiked);
  };

  const handleRetweet = () => {
    const newRetweeted = !isRetweeted;
    setIsRetweeted(newRetweeted);
    setRetweetCount(prev => newRetweeted ? prev + 1 : prev - 1);
    onRetweet(tweet.id, newRetweeted);
  };

  const highlightText = (text) => {
    return text.split(/(\s+)/).map((part, idx) => {
      if (part.startsWith('#') || part.startsWith('@')) {
        return <span key={idx} className="text-blue-400 hover:underline cursor-pointer">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="p-4 border-b border-gray-800 hover:bg-gray-950 transition-colors duration-200 group">
      <div className="flex space-x-3">
        <img src={tweet.user.avatar} alt={tweet.user.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0"/>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-bold text-white hover:underline cursor-pointer truncate">{tweet.user.name}</span>
            <span className="text-gray-500">@{tweet.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 text-sm">{tweet.timestamp}</span>
          </div>
          <p className="mt-1 text-gray-100 leading-relaxed whitespace-pre-wrap">{highlightText(tweet.content)}</p>
          
          {tweet.image && (
            <img src={tweet.image} alt="Tweet attachment" className="mt-3 rounded-2xl max-h-96 object-cover w-full"/>
          )}

          <div className="flex items-center justify-between mt-4 max-w-md">
            <button onClick={() => onReply(tweet.id)} className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group-hover:text-blue-400 p-2 -m-2 rounded-full hover:bg-blue-500/10">
              <MessageCircle size={20} /><span className="text-sm">{tweet.replies}</span>
            </button>
            <button onClick={handleRetweet} className={`flex items-center space-x-2 transition-colors p-2 -m-2 rounded-full hover:bg-green-500/10 ${isRetweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-400 group-hover:text-green-400'}`}>
              <Repeat size={20} className={`${isRetweeted ? 'fill-green-500' : ''}`} />
              <span className="text-sm">{retweetCount}</span>
            </button>
            <button onClick={handleLike} className={`flex items-center space-x-2 transition-colors p-2 -m-2 rounded-full hover:bg-red-500/10 ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-400 group-hover:text-red-400'}`}>
              <Heart size={20} className={`${isLiked ? 'fill-red-500 animate-pulse' : ''}`} />
              <span className="text-sm">{likeCount}</span>
            </button>
            <button onClick={() => onShare(tweet.id)} className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group-hover:text-blue-400 p-2 -m-2 rounded-full hover:bg-blue-500/10">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
