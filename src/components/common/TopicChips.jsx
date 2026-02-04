// // src/components/common/TopicChips.jsx
// import React from 'react';

// const topics = [
//   'For you',
//   'Trending',
//   'Earning Tips',
//   'Tech Reviews',
//   'Comedy',
//   'Music',
//   'Sports',
//   'Education',
//   'Gaming',
//   'News',
//   'Travel',
//   'Food',
//   'Lifestyle',
//   'Fashion',
//   'Health',
  
// ];

// export default function TopicChips() {
//   return (
//     <div className="sticky top-14 z-30 bg-[#0f0f0f] border-b border-gray-800">
//       <div className="flex items-center gap-3 px-6 py-3 overflow-x-auto scrollbar-hide">
//         {topics.map((topic, index) => (
//           <button
//             key={topic}
//             className={`
//               px-6 py-1.5  font-medium rounded-lg whitespace-nowrap flex-shrink-0 transition-colors
//               ${
//                 index === 0
//                   ? 'bg-white text-black hover:bg-gray-200'
//                   : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
//               }
//             `}
//           >
//             {topic}
//           </button>
//         ))}
//       </div>

      
//     </div>
//   );
// }

// src/components/common/TopicChips.jsx


// import React, { useState } from 'react';

// const mainTopics = [
//   'For you',
//   'Trending',
//   'Earning Tips',
//   'Tech Reviews',
//   'Comedy',
//   'Music',
//   'Sports',
//   'Education',
//   'Gaming',
//   'News',
//   'Travel',
//   'Food',
//   'Lifestyle',
//   'Fashion',
//   'Health',
// ];

// const forYouOptions = ['History', 'Liked', 'Watch later', 'Your videos'];

// export default function TopicChips() {
//   const [selectedTopic, setSelectedTopic] = useState('For you');
//   const [showForYouSubmenu, setShowForYouSubmenu] = useState(false);

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(topic);
    
//     // Only show submenu when "For you" is selected
//     if (topic === 'For you') {
//       setShowForYouSubmenu(true);
//     } else {
//       setShowForYouSubmenu(false);
//     }
//   };

//   return (
//     <div className="sticky top-14 z-30 bg-[#0f0f0f] border-b border-gray-800">
//       {/* Main topics row */}
//       <div className="flex items-center gap-3 px-6 py-3 overflow-x-auto scrollbar-hide">
//         {mainTopics.map((topic) => (
//           <button
//             key={topic}
//             onClick={() => handleTopicClick(topic)}
//             className={`
//               px-6 py-1.5 font-medium rounded-lg whitespace-nowrap flex-shrink-0 transition-colors
//               ${
//                 selectedTopic === topic
//                   ? 'bg-white text-black hover:bg-gray-200'
//                   : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
//               }
//             `}
//           >
//             {topic}
//           </button>
//         ))}
//       </div>

//       {/* Submenu - only visible when "For you" is selected */}
//       {showForYouSubmenu && (
//         <div className="flex items-center gap-3 px-6 py-2.5 bg-[#0f0f0f] border-t border-gray-800 overflow-x-auto scrollbar-hide">
//           {forYouOptions.map((option) => (
//             <button
//               key={option}
//               className="
//                 px-5 py-1 font-medium text-sm rounded-full 
//                 bg-[#272727] text-white hover:bg-[#3f3f3f]
//                 whitespace-nowrap flex-shrink-0 transition-colors
//               "
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// src/components/common/TopicChips.jsx
import React, { useState } from 'react';

const mainTopics = [
  'For you',
  'Trending',
  'Earning Tips',
  'Tech Reviews',
  'Comedy',
  'Music',
  'Sports',
  'Education',
  'Gaming',
  'News',
  'Travel',
  'Food',
  'Lifestyle',
  'Fashion',
  'Health',
];

const forYouOptions = ['History', 'Liked', 'Watch later', 'Your videos'];

export default function TopicChips() {
  const [selectedTopic, setSelectedTopic] = useState('For you');
  const [isForYouSubmenuOpen, setIsForYouSubmenuOpen] = useState(false);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);

    if (topic === 'For you') {
      // Toggle submenu when clicking "For you"
      setIsForYouSubmenuOpen((prev) => !prev);
    } else {
      // Close submenu when selecting any other main topic
      setIsForYouSubmenuOpen(false);
    }
  };

  return (
    <div className="sticky top-14 z-30 bg-[#0f0f0f] border-b border-gray-800">
      {/* Main topics row */}
      <div className="flex items-center gap-3 px-6 py-3 overflow-x-auto scrollbar-hide">
        {mainTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className={`
              px-6 py-1.5 font-medium rounded-lg whitespace-nowrap flex-shrink-0 transition-colors
              ${
                selectedTopic === topic
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
              }
            `}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Submenu - only visible when open */}
      {isForYouSubmenuOpen && (
        <div className="flex items-center gap-3 px-6 py-2.5 bg-[#0f0f0f] border-t border-gray-800 overflow-x-auto scrollbar-hide">
          {forYouOptions.map((option) => (
            <button
              key={option}
              className="
                px-5 py-1 font-medium text-sm rounded-full 
                bg-[#272727] text-white hover:bg-[#3f3f3f]
                whitespace-nowrap flex-shrink-0 transition-colors
              "
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}