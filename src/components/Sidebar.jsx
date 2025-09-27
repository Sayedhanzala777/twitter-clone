import React from 'react';
import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal, Menu, Sun, Moon } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isMobile, setIsMobileMenuOpen, darkMode, setDarkMode }) => {
  const navItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Search, label: 'Explore', id: 'explore' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: Mail, label: 'Messages', id: 'messages' },
    { icon: Bookmark, label: 'Bookmarks', id: 'bookmarks' },
    { icon: User, label: 'Profile', id: 'profile' },
    { icon: MoreHorizontal, label: 'More', id: 'more' }
  ];

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50 bg-black h-full w-64' : 'w-64 fixed h-full'} p-4 border-r border-gray-800 flex flex-col`}>
      <div className="mb-8">
        <div className="text-3xl font-bold text-white mb-8">𝕏</div>
        <nav className="space-y-2">
          {navItems.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`flex items-center space-x-3 w-full p-3 rounded-full hover:bg-gray-900 transition-colors ${activeTab === id ? 'font-bold text-white' : 'text-gray-400'}`}
            >
              <Icon size={24} />
              <span className="text-xl">{label}</span>
            </button>
          ))}
        </nav>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full mt-4">Post</button>
      </div>

      <div className="mt-auto flex items-center justify-between p-3 rounded-full hover:bg-gray-900 cursor-pointer">
        <div className="flex items-center space-x-3">
          <img src="https://placehold.co/40x40/6366F1/white?text=Y" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <div className="font-bold text-white">Your Name</div>
            <div className="text-gray-500">@yourusername</div>
          </div>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-800">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {isMobile && (
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800">
          <Menu size={24} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
