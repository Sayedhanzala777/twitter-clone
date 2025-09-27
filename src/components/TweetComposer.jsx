import React, { useState } from 'react';
import { X, Smile, Image as ImageIcon, Hash, Calendar } from 'lucide-react';

const TweetComposer = ({ onTweet }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [charCount, setCharCount] = useState(280);

  const emojis = ['😀', '😂', '❤️', '🔥', '✨', '🎉', '🚀', '💡', '👍', '👏'];

  const handleContentChange = (e) => {
    const text = e.target.value;
    if (text.length <= 280) {
      setContent(text);
      setCharCount(280 - text.length);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const addEmoji = (emoji) => {
    setContent(prev => prev + emoji);
    setCharCount(prev => prev - emoji.length);
  };

  const handleSubmit = () => {
    if (content.trim()) {
      onTweet({ content, image });
      setContent('');
      setImage(null);
      setCharCount(280);
    }
  };

  return (
    <div className="p-4 border-b border-gray-800 bg-gray-900/50 relative">
      <div className="flex space-x-3">
        <img src="https://placehold.co/48x48/6366F1/white?text=Y" alt="Profile" className="w-12 h-12 rounded-full object-cover flex-shrink-0"/>
        <div className="flex-1">
          <textarea value={content} onChange={handleContentChange} placeholder="What's happening?" className="w-full bg-transparent text-xl placeholder-gray-500 resize-none focus:outline-none focus:ring-0 min-h-[80px] max-h-32"/>
          
          {image && (
            <div className="mt-3 relative">
              <img src={image} alt="Preview" className="rounded-2xl max-h-64 object-cover w-full"/>
              <button onClick={() => setImage(null)} className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1">
                <X size={16} />
              </button>
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4 text-blue-500">
              <label className="cursor-pointer hover:text-blue-400">
                <ImageIcon size={20} />
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden"/>
              </label>
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}><Smile size={20}/></button>
              <Hash size={20} className="cursor-pointer"/>
              <Calendar size={20} className="cursor-pointer"/>
            </div>

            {showEmojiPicker && (
              <div className="absolute z-10 bg-gray-800 rounded-lg p-2 shadow-xl mt-2">
                <div className="flex space-x-2">
                  {emojis.map((emoji, idx) => (
                    <button key={idx} onClick={() => addEmoji(emoji)} className="text-2xl hover:bg-gray-700 rounded p-1">{emoji}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center space-x-3">
              <span className={`text-sm ${charCount < 20 ? 'text-red-400' : 'text-gray-500'}`}>{charCount}</span>
              <button onClick={handleSubmit} disabled={!content.trim() || charCount === 280} className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500 disabled:opacity-50 text-white font-bold py-2 px-6 rounded-full">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer;
