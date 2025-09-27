import React from 'react';
import { Search, TrendingUp, UserPlus } from 'lucide-react';

const RightSidebar = ({ trends, suggestions, onFollow }) => {
  return (
    <div className="w-80 p-4 space-y-6 hidden lg:block">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-3 text-gray-500" size={20} />
        <input type="text" placeholder="Search" className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"/>
      </div>

      {/* Trends */}
      <div className="bg-gray-900 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <TrendingUp size={24} className="mr-2 text-pink-500" /> What's happening
        </h2>
        {trends.map((trend, index) => (
          <div key={index} className="py-3 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors duration-200 group">
            <div className="text-gray-500 text-sm mb-1">Trending</div>
            <div className="font-bold text-white group-hover:text-blue-400 transition-colors">{trend.topic}</div>
            <div className="text-gray-500 text-sm">{trend.tweets} posts</div>
          </div>
        ))}
      </div>

      {/* Who to follow */}
      <div className="bg-gray-900 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>
        {suggestions.map((user, index) => (
          <div key={index} className="flex items-center justify-between py-3 group">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover"/>
              <div>
                <div className="font-bold text-white hover:underline cursor-pointer group-hover:text-blue-400 transition-colors">{user.name}</div>
                <div className="text-gray-500">@{user.username}</div>
              </div>
            </div>
            <button onClick={() => onFollow(user.id)} className="bg-white text-black font-bold py-1 px-4 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-1">
              <UserPlus size={16} /> <span>Follow</span>
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-xs space-y-2">
        <div className="flex flex-wrap gap-2">
          <span>Terms</span><span>Privacy</span><span>Cookie Policy</span><span>Accessibility</span><span>Ads</span><span>More</span>
        </div>
        <div>© 2024 X Corp.</div>
        <div className="text-gray-400 mt-4">Created by Hanzala</div>
      </div>
    </div>
  );
};

export default RightSidebar;
