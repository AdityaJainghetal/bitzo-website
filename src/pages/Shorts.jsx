// import React, { useState, useRef, useEffect } from 'react';

// const shortsData = [
//   {
//     id: 's1',
//     title: 'Amazing Nature Moments 🌿',
//     creator: '@naturelover',
//     views: '2.6M views',
//     likes: '145K',
//     comments: '3.2K',
//     videoUrl: 'https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&mute=1&loop=1&playlist=EngW7tLk6R8&controls=0&showinfo=0&rel=0',
//     bg: 'from-green-900 via-emerald-950 to-black',
//   },
//   {
//     id: 's2',
//     title: 'Cute Cats Compilation 😺',
//     creator: '@catlovers',
//     views: '4.2M views',
//     likes: '220K',
//     comments: '8.5K',
//     videoUrl: 'https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&mute=1&loop=1&playlist=hY7m5jjJ9mM&controls=0&showinfo=0&rel=0',
//     bg: 'from-orange-900 via-amber-950 to-black',
//   },
//   {
//     id: 's3',
//     title: 'Ocean Waves - Relaxing Sounds 🌊',
//     creator: '@oceanvibes',
//     views: '1.8M views',
//     likes: '98K',
//     comments: '2.1K',
//     videoUrl: 'https://www.youtube.com/embed/WHPEKLQID4U?autoplay=1&mute=1&loop=1&playlist=WHPEKLQID4U&controls=0&showinfo=0&rel=0',
//     bg: 'from-blue-900 via-cyan-950 to-black',
//   },
//   {
//     id: 's4',
//     title: 'City Lights at Night 🌃',
//     creator: '@urbanexplorer',
//     views: '3.1M views',
//     likes: '167K',
//     comments: '4.3K',
//     videoUrl: 'https://www.youtube.com/embed/1Ne1hqOXKKI?autoplay=1&mute=1&loop=1&playlist=1Ne1hqOXKKI&controls=0&showinfo=0&rel=0',
//     bg: 'from-purple-900 via-indigo-950 to-black',
//   },
//   {
//     id: 's5',
//     title: 'Cooking Quick Recipe 🍳',
//     creator: '@foodhacks',
//     views: '5.3M views',
//     likes: '312K',
//     comments: '12K',
//     videoUrl: 'https://www.youtube.com/embed/qBXJGKdO7KQ?autoplay=1&mute=1&loop=1&playlist=qBXJGKdO7KQ&controls=0&showinfo=0&rel=0',
//     bg: 'from-red-900 via-rose-950 to-black',
//   },
//   {
//     id: 's6',
//     title: 'Sunset Timelapse 🌅',
//     creator: '@skywatcher',
//     views: '2.9M views',
//     likes: '156K',
//     comments: '3.8K',
//     videoUrl: 'https://www.youtube.com/embed/ChOhcHD8fBA?autoplay=1&mute=1&loop=1&playlist=ChOhcHD8fBA&controls=0&showinfo=0&rel=0',
//     bg: 'from-pink-900 via-orange-950 to-black',
//   },
// ];

// export default function Shorts() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [liked, setLiked] = useState({});
//   const [muted, setMuted] = useState(true);
//   const containerRef = useRef(null);

//   const toggleLike = (id) => {
//     setLiked(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const toggleMute = () => {
//     setMuted(!muted);
//   };

//   return (
//     <div className="h-screen w-full bg-black overflow-hidden">
//       {/* Header */}
//       <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent pt-4 pb-8 px-6">
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-white">Shorts</h1>
//           <div className="flex items-center gap-4">
//             <button className="text-white text-2xl">🔍</button>
//             <button className="text-white text-2xl">⋮</button>
//           </div>
//         </div>
//       </div>

//       {/* Shorts Container */}
//       <div 
//         ref={containerRef}
//         className="h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
//       >
//         {shortsData.map((short, index) => (
//           <div
//             key={short.id}
//             className="relative h-screen w-full snap-start snap-always flex items-center justify-center"
//           >
//             {/* Video Background */}
//             <div className="absolute inset-0">
//               <iframe
//                 src={short.videoUrl}
//                 className="w-full h-full object-cover"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 style={{ pointerEvents: 'none' }}
//               />
//               <div className={`absolute inset-0 bg-gradient-to-b ${short.bg} opacity-20`} />
//             </div>

//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

//             {/* Content Container */}
//             <div className="absolute inset-0 flex flex-col justify-between p-6 pb-24">
//               {/* Top Section - Creator Info */}
//               <div className="flex items-start justify-between pt-12 z-10">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
//                     {short.creator.charAt(1).toUpperCase()}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white text-sm">{short.creator}</p>
//                     <button className="mt-1 px-4 py-1 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition">
//                       Follow
//                     </button>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={toggleMute}
//                   className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition"
//                 >
//                   {muted ? '🔇' : '🔊'}
//                 </button>
//               </div>

//               {/* Bottom Section - Title and Info */}
//               <div className="z-10">
//                 <h2 className="text-white text-xl font-bold mb-2 drop-shadow-2xl leading-tight">
//                   {short.title}
//                 </h2>
//                 <p className="text-white/90 text-sm mb-1">{short.views}</p>
//                 <p className="text-white/70 text-xs">🎵 Original audio • Trending</p>
//               </div>
//             </div>

//             {/* Right Side Action Buttons */}
//             <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5 z-20">
//               {/* Like Button */}
//               <button 
//                 onClick={() => toggleLike(short.id)}
//                 className="flex flex-col items-center gap-1 transition-transform active:scale-90"
//               >
//                 <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
//                   <span className={`text-3xl ${liked[short.id] ? 'text-red-500' : 'text-white'}`}>
//                     {liked[short.id] ? '❤️' : '🤍'}
//                   </span>
//                 </div>
//                 <span className="text-white text-xs font-semibold drop-shadow-lg">
//                   {liked[short.id] ? parseInt(short.likes) + 1 + 'K' : short.likes}
//                 </span>
//               </button>

//               {/* Comment Button */}
//               <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
//                 <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
//                   <span className="text-3xl">💬</span>
//                 </div>
//                 <span className="text-white text-xs font-semibold drop-shadow-lg">
//                   {short.comments}
//                 </span>
//               </button>

//               {/* Share Button */}
//               <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
//                 <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
//                   <span className="text-3xl">↗️</span>
//                 </div>
//                 <span className="text-white text-xs font-semibold drop-shadow-lg">Share</span>
//               </button>

//               {/* More Options */}
//               <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
//                 <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
//                   <span className="text-2xl text-white">⋯</span>
//                 </div>
//               </button>

//               {/* Creator Avatar (Rotating) */}
//               <div className="mt-2">
//                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden animate-spin-slow">
//                   <div className={`w-full h-full bg-gradient-to-br ${short.bg}`} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 4s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useRef } from 'react';
import { 
  Search, 
  MoreVertical, 
  Heart, 
  MessageCircle, 
  Share2, 
  Volume2, 
  VolumeX,
  MoreHorizontal,
  Music2
} from 'lucide-react';

const shortsData = [
  {
    id: 's1',
    title: 'Amazing Nature Moments',
    creator: '@naturelover',
    views: '2.6M views',
    likes: '145K',
    comments: '3.2K',
    videoUrl: 'https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&mute=1&loop=1&playlist=EngW7tLk6R8&controls=0&showinfo=0&rel=0',
    bg: 'from-green-900 via-emerald-950 to-black',
  },
  {
    id: 's2',
    title: 'Cute Cats Compilation',
    creator: '@catlovers',
    views: '4.2M views',
    likes: '220K',
    comments: '8.5K',
    videoUrl: 'https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&mute=1&loop=1&playlist=hY7m5jjJ9mM&controls=0&showinfo=0&rel=0',
    bg: 'from-orange-900 via-amber-950 to-black',
  },
  {
    id: 's3',
    title: 'Ocean Waves - Relaxing Sounds',
    creator: '@oceanvibes',
    views: '1.8M views',
    likes: '98K',
    comments: '2.1K',
    videoUrl: 'https://www.youtube.com/embed/WHPEKLQID4U?autoplay=1&mute=1&loop=1&playlist=WHPEKLQID4U&controls=0&showinfo=0&rel=0',
    bg: 'from-blue-900 via-cyan-950 to-black',
  },
  {
    id: 's4',
    title: 'City Lights at Night',
    creator: '@urbanexplorer',
    views: '3.1M views',
    likes: '167K',
    comments: '4.3K',
    videoUrl: 'https://www.youtube.com/embed/1Ne1hqOXKKI?autoplay=1&mute=1&loop=1&playlist=1Ne1hqOXKKI&controls=0&showinfo=0&rel=0',
    bg: 'from-purple-900 via-indigo-950 to-black',
  },
  {
    id: 's5',
    title: 'Cooking Quick Recipe',
    creator: '@foodhacks',
    views: '5.3M views',
    likes: '312K',
    comments: '12K',
    videoUrl: 'https://www.youtube.com/embed/qBXJGKdO7KQ?autoplay=1&mute=1&loop=1&playlist=qBXJGKdO7KQ&controls=0&showinfo=0&rel=0',
    bg: 'from-red-900 via-rose-950 to-black',
  },
  {
    id: 's6',
    title: 'Sunset Timelapse',
    creator: '@skywatcher',
    views: '2.9M views',
    likes: '156K',
    comments: '3.8K',
    videoUrl: 'https://www.youtube.com/embed/ChOhcHD8fBA?autoplay=1&mute=1&loop=1&playlist=ChOhcHD8fBA&controls=0&showinfo=0&rel=0',
    bg: 'from-pink-900 via-orange-950 to-black',
  },
];

export default function Shorts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});
  const [muted, setMuted] = useState(true);
  const containerRef = useRef(null);

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent pt-4 pb-8 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Shorts</h1>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-300 transition">
              <Search size={24} />
            </button>
            <button className="text-white hover:text-gray-300 transition">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Shorts Container */}
      <div 
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
      >
        {shortsData.map((short, index) => (
          <div
            key={short.id}
            className="relative h-screen w-full snap-start snap-always flex items-center justify-center"
          >
            {/* Video Background */}
            <div className="absolute inset-0">
              <iframe
                src={short.videoUrl}
                className="w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${short.bg} opacity-20`} />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 pb-24">
              {/* Top Section - Creator Info */}
              <div className="flex items-start justify-between pt-12 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {short.creator.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{short.creator}</p>
                    <button className="mt-1 px-4 py-1 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition">
                      Follow
                    </button>
                  </div>
                </div>
                <button 
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition"
                >
                  {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>

              {/* Bottom Section - Title and Info */}
              <div className="z-10">
                <h2 className="text-white text-xl font-bold mb-2 drop-shadow-2xl leading-tight">
                  {short.title}
                </h2>
                <p className="text-white/90 text-sm mb-1">{short.views}</p>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <Music2 size={14} />
                  Original audio • Trending
                </p>
              </div>
            </div>

            {/* Right Side Action Buttons */}
            <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5 z-20">
              {/* Like Button */}
              <button 
                onClick={() => toggleLike(short.id)}
                className="flex flex-col items-center gap-1 transition-transform active:scale-90"
              >
                <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
                  <Heart 
                    size={28} 
                    className={`${liked[short.id] ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`}
                  />
                </div>
                <span className="text-white text-xs font-semibold drop-shadow-lg">
                  {liked[short.id] ? parseInt(short.likes) + 1 + 'K' : short.likes}
                </span>
              </button>

              {/* Comment Button */}
              <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
                <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <span className="text-white text-xs font-semibold drop-shadow-lg">
                  {short.comments}
                </span>
              </button>

              {/* Share Button */}
              <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
                <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
                  <Share2 size={28} className="text-white" />
                </div>
                <span className="text-white text-xs font-semibold drop-shadow-lg">Share</span>
              </button>

              {/* More Options */}
              <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
                <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition">
                  <MoreHorizontal size={24} className="text-white" />
                </div>
              </button>

              {/* Creator Avatar (Rotating) */}
              <div className="mt-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden animate-spin-slow">
                  <div className={`w-full h-full bg-gradient-to-br ${short.bg}`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}