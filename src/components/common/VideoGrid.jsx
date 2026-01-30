// // src/components/common/VideoGrid.jsx
// import React from 'react';

// // You can later move this data to a context / api / separate file
// const videos = [
//   {
//     id: '1',
//     title: 'This is what mobile web design excellence looks like in 2025',
//     channel: 'Flux Academy',
//     views: '212K',
//     uploaded: '2 hours ago',
//     duration: '15:41',
//     thumbnail: 'https://i.ytimg.com/vi/x3Gn5lksozE/maxresdefault.jpg',
//   },
//   {
//     id: '2',
//     title: 'Introducing Webflow Optimize – New Features 2026',
//     channel: 'Webflow',
//     views: '89K',
//     uploaded: '3 hours ago',
//     duration: '12:08',
//     thumbnail: 'https://i.ytimg.com/vi_webp/some-webflow-video/maxresdefault.webp',
//   },
//   {
//     id: '3',
//     title: 'Top 7 Figma Plugins Every Designer Needs in 2026',
//     channel: 'DesignCode',
//     views: '145K',
//     uploaded: '5 hours ago',
//     duration: '18:22',
//     thumbnail: 'https://i.ytimg.com/vi/jnZmIy1XSMc/sddefault.jpg',
//   },
//   {
//     id: '4',
//     title: '2026 UI/UX Design Trends You Must Know',
//     channel: 'Mizko',
//     views: '320K',
//     uploaded: '1 day ago',
//     duration: '14:55',
//     thumbnail: 'https://i.ytimg.com/vi/SmhLuxlUIkc/sddefault.jpg',
//   },
//   // Add 8–12 more items for realistic grid
//   // ...
// ];

// export default function VideoGrid() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 px-6 pb-10">
//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="group cursor-pointer flex flex-col"
//         >
//           {/* Thumbnail container */}
//           <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
//               loading="lazy"
//             />
//             <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
//               {video.duration}
//             </div>
//           </div>

//           {/* Info */}
//           <div className="flex gap-3 mt-3">
//             <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0" />
//             <div className="flex-1 min-w-0">
//               <h3 className="font-medium line-clamp-2 text-sm leading-tight group-hover:text-blue-400 transition-colors">
//                 {video.title}
//               </h3>
//               <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
//               <p className="text-sm text-gray-400">
//                 {video.views} views • {video.uploaded}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// src/components/common/VideoGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ← import this

const videos = [
  {
    id: 'x3Gn5lksozE', // real YouTube ID from your thumbnail example
    title: 'This is what mobile web design excellence looks like in 2025',
    channel: 'Flux Academy',
    views: '212K',
    uploaded: '2 hours ago',
    duration: '15:41',
    thumbnail: 'https://i.ytimg.com/vi/x3Gn5lksozE/maxresdefault.jpg',
  },
  {
    id: 'SmhLuxlUIkc',
    title: '2026 UI/UX Design Trends You Must Know',
    channel: 'Mizko',
    views: '320K',
    uploaded: '1 day ago',
    duration: '14:55',
    thumbnail: 'https://i.ytimg.com/vi/SmhLuxlUIkc/sddefault.jpg',
  },
  // Add more realistic IDs/thumbnails...
  // Tip: Use real YouTube video IDs so thumbnails load
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 px-6 pb-20 md:pb-10">
      {videos.map((video) => (
        <Link
          key={video.id}
          to={`/watch/${video.id}`}  // ← this navigates to watch page
          className="group cursor-pointer flex flex-col"
        >
          <div className="relative rounded-xl overflow-hidden aspect-video bg-black shadow-md">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
              {video.duration}
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium line-clamp-2 text-sm leading-tight group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
              <p className="text-sm text-gray-400">
                {video.views} views • {video.uploaded}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}