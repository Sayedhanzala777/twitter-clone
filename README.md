TwitterXClone

Overview:
TwitterXClone is a fully responsive social media web application built with React and Tailwind CSS. The app is inspired by Twitter (now X) and provides core social media functionalities such as posting tweets, liking, retweeting, replying, and exploring trending topics. It also includes a “Who to follow” section and supports dark mode for a modern user experience.

Features:

Tweet Composer: Users can write tweets (up to 280 characters), upload images, and add emojis.

Interactive Tweets: Like, retweet, reply, and share tweets. Tweets display dynamic counts for likes, retweets, and replies.

Hashtags & Mentions: Automatically highlights hashtags (#) and mentions (@) with clickable styles.

Responsive Design: Optimized for desktop and mobile screens with a sidebar, mobile menu, and sticky headers.

Dark Mode: Toggle between light and dark themes seamlessly.

Trending & Suggestions: Shows trending topics and “Who to follow” suggestions to engage users.

User Profiles: Displays user avatars, names, and usernames in tweets and suggestions.

Tech Stack:

Frontend: React (with Hooks and functional components)

Styling: Tailwind CSS for utility-first responsive design

Icons: Lucide React icons

Build Tool: Vite for fast development and hot reloading

State Management: React useState and useCallback for dynamic tweet updates

Project Structure:

src/components/ → Contains reusable components like Tweet, TweetComposer, Sidebar, and RightSidebar

src/App.jsx → Main application file orchestrating components and state

src/index.jsx → React entry point

src/index.css → Tailwind CSS base, components, and utilities

How to Run Locally:

Clone the repository:

git clone <repo-url>
cd TwitterXClone


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at http://localhost:5173/

Potential Enhancements:

Connect to a backend API for real-time tweets and user authentication

Add notifications and direct messaging features

Integrate infinite scrolling for tweets

Improve accessibility and ARIA support

Author:
Sayed Hanzala
