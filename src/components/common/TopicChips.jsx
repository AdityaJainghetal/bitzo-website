// src/components/common/TopicChips.jsx
import React from 'react';

const topics = [
  'For you',
  'Trending',
  'Earning Tips'
  
];

export default function TopicChips() {
  return (
    <div className="sticky top-14 z-30 bg-[#0f0f0f] border-b border-gray-800">
      <div className="flex items-center gap-3 px-6 py-3 overflow-x-auto scrollbar-hide">
        {topics.map((topic, index) => (
          <button
            key={topic}
            className={`
              px-4 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap flex-shrink-0 transition-colors
              ${
                index === 0
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
              }
            `}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}