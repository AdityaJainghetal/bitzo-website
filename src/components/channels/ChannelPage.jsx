// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { MoreHorizontal, Search, Edit, Video as VideoIcon } from 'lucide-react';

// // Mock data (replace with real API fetch later)
// const mockChannel = {
//   name: "Aditiya Jain ghetal",
//   handle: "@adityajainghetal3503",
//   avatar: "https://example.com/avatar.jpg", // or use a placeholder
//   banner: "https://example.com/banner.jpg", // wide banner image
//   subscribers: 3,
//   videosCount: 1,
//   description: "More about this channel ...more", // expandable in real
//   isOwnChannel: false, // set true if viewing own profile
//   videos: [
//     {
//       id: 1,
//       title: "Task management",
//       thumbnail: "https://example.com/thumb.jpg",
//       duration: "3:32",
//       views: 4,
//       uploaded: "1 month ago",
//     },
//     // Add more...
//   ],
// };

// export default function ChannelPage() {
//   const { handle } = useParams(); // e.g. @adityajainghetal3503
//   const navigate = useNavigate();
//   const [channel, setChannel] = useState(null);
//   const [activeTab, setActiveTab] = useState('Videos');

//   useEffect(() => {
//     // In real app: fetch channel data by handle
//     // For now, use mock
//     setChannel(mockChannel);
//   }, [handle]);

//   if (!channel) return <div className="text-center py-20 text-gray-400">Loading channel...</div>;

//   const tabs = ['Videos', 'Playlists', 'Posts'];

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white">
//       {/* Banner + Profile Header */}
//       <div className="relative">
//         {/* Channel Banner (wide image) */}
//         <div className="h-32 md:h-48 lg:h-64 bg-gray-800 relative overflow-hidden">
//           {channel.banner ? (
//             <img
//               src={channel.banner}
//               alt="Channel banner"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900" />
//           )}
//         </div>

//         {/* Avatar + Info - overlapping banner */}
//         <div className="px-4 md:px-8 lg:px-16 -mt-16 md:-mt-24 relative z-10 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
//           <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-gray-700 flex items-center justify-center text-5xl font-bold">
//             {channel.avatar ? (
//               <img src={channel.avatar} alt="Avatar" className="w-full h-full object-cover" />
//             ) : (
//               channel.name.charAt(0).toUpperCase()
//             )}
//           </div>

//           <div className="flex-1">
//             <h1 className="text-3xl md:text-4xl font-bold">{channel.name}</h1>
//             <p className="text-gray-400 mt-1">
//               {channel.handle} • {channel.subscribers} subscribers • {channel.videosCount} video
//               {channel.videosCount !== 1 ? 's' : ''}
//             </p>
//             <p className="text-gray-400 mt-1 text-sm">
//               {channel.description}
//             </p>

//             <div className="flex flex-wrap gap-3 mt-4">
//               {!channel.isOwnChannel ? (
//                 <>
//                   <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
//                     Subscribe
//                   </button>
//                   <button className="px-4 py-2 bg-[#272727] rounded-full hover:bg-[#333] transition">
//                     Join
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => navigate('/studio/customize')} // or your customization route
//                     className="px-5 py-2 bg-[#272727] rounded-full hover:bg-[#333] transition flex items-center gap-2"
//                   >
//                     <Edit size={18} />
//                     Customise channel
//                   </button>
//                   <button
//                     onClick={() => navigate('/studio/videos')} // or manage videos page
//                     className="px-5 py-2 bg-[#272727] rounded-full hover:bg-[#333] transition flex items-center gap-2"
//                   >
//                     <VideoIcon size={18} />
//                     Manage videos
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="px-4 md:px-8 lg:px-16 mt-8 border-b border-gray-800">
//         <div className="flex gap-8 text-sm font-medium">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-3 px-2 transition-colors ${
//                 activeTab === tab
//                   ? 'text-white border-b-2 border-white'
//                   : 'text-gray-400 hover:text-gray-300'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//           <button className="pb-3 px-2 text-gray-400 hover:text-gray-300">
//             <Search size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Content Area - Videos tab example */}
//       <div className="px-4 md:px-8 lg:px-16 py-8">
//         {activeTab === 'Videos' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {channel.videos.map((video) => (
//               <div key={video.id} className="group cursor-pointer">
//                 <div className="relative rounded-xl overflow-hidden bg-gray-800 aspect-video">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform"
//                   />
//                   <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
//                     {video.duration}
//                   </div>
//                 </div>
//                 <div className="mt-3">
//                   <h3 className="font-medium line-clamp-2">{video.title}</h3>
//                   <p className="text-sm text-gray-400 mt-1">
//                     {video.views} views • {video.uploaded}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {channel.videos.length === 0 && (
//               <p className="text-gray-400 col-span-full text-center py-12">
//                 No videos yet
//               </p>
//             )}
//           </div>
//         )}

//         {activeTab === 'Playlists' && (
//           <p className="text-gray-400 text-center py-12">No playlists yet</p>
//         )}

//         {activeTab === 'Posts' && (
//           <p className="text-gray-400 text-center py-12">No community posts yet</p>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { MoreHorizontal, Search, Edit, Video as VideoIcon, ChevronDown } from 'lucide-react';

// // Mock multiple channels (your accounts + some random others)
// const mockChannels = {
//   'adityajainghetal3503': {
//     name: "Aditiya Jain ghetal",
//     handle: "@adityajainghetal3503",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     banner: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
//     subscribers: 3,
//     videosCount: 4,
//     description: "More about this channel ...more",
//     isOwnChannel: true,
//     videos: [
//       {
//         id: 1,
//         title: "Task management system demo",
//         thumbnail: "https://picsum.photos/seed/task1/640/360",
//         duration: "3:32",
//         views: 4,
//         uploaded: "1 month ago",
//       },
//       {
//         id: 2,
//         title: "Morning routine in Bhopal",
//         thumbnail: "https://picsum.photos/seed/morning2/640/360",
//         duration: "8:14",
//         views: 47,
//         uploaded: "2 weeks ago",
//       },
//       {
//         id: 3,
//         title: "React project setup 2025",
//         thumbnail: "https://picsum.photos/seed/react3/640/360",
//         duration: "12:05",
//         views: 128,
//         uploaded: "3 days ago",
//       },
//       {
//         id: 4,
//         title: "Street food tour Madhya Pradesh",
//         thumbnail: "https://picsum.photos/seed/food4/640/360",
//         duration: "5:47",
//         views: 312,
//         uploaded: "2 months ago",
//       },
//     ],
//   },
//   'techwithaditya': {
//     name: "Tech With Aditya",
//     handle: "@techwithaditya",
//     avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
//     banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=400&fit=crop",
//     subscribers: 1240,
//     videosCount: 38,
//     description: "Latest tech reviews & tutorials",
//     isOwnChannel: false,
//     videos: [
//       {
//         id: 1,
//         title: "Best laptop under 60k in 2026",
//         thumbnail: "https://picsum.photos/seed/laptop1/640/360",
//         duration: "11:22",
//         views: 8450,
//         uploaded: "5 days ago",
//       },
//       {
//         id: 2,
//         title: "iPhone 17 Pro Max unboxing",
//         thumbnail: "https://picsum.photos/seed/iphone2/640/360",
//         duration: "9:58",
//         views: 12400,
//         uploaded: "1 week ago",
//       },
//     ],
//   },
//   'gamingvibesmp': {
//     name: "Gaming Vibes MP",
//     handle: "@gamingvibesmp",
//     avatar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
//     banner: "https://images.unsplash.com/photo-1551103782-8b7b3a142d6f?w=1600&h=400&fit=crop",
//     subscribers: 567,
//     videosCount: 19,
//     description: "BGMI & Free Fire live + highlights",
//     isOwnChannel: false,
//     videos: [
//       {
//         id: 1,
//         title: "1 vs 4 clutch insane gameplay",
//         thumbnail: "https://picsum.photos/seed/gaming1/640/360",
//         duration: "4:19",
//         views: 3200,
//         uploaded: "10 hours ago",
//       },
//     ],
//   },
// };

// export default function ChannelPage() {
//   const { handle: urlHandle } = useParams(); // e.g. adityajainghetal3503
//   const navigate = useNavigate();

//   const [selectedHandle, setSelectedHandle] = useState(urlHandle || 'adityajainghetal3503');
//   const [channel, setChannel] = useState(null);
//   const [activeTab, setActiveTab] = useState('Videos');

//   useEffect(() => {
//     // Simulate fetching channel by handle
//     const found = mockChannels[selectedHandle.replace('@', '')];
//     setChannel(found || mockChannels['adityajainghetal3503']);
//   }, [selectedHandle]);

//   const handleChannelChange = (newHandle) => {
//     setSelectedHandle(newHandle);
//     navigate(`/channel/${newHandle}`);
//   };

//   if (!channel) return <div className="text-center py-20 text-gray-400">Loading channel...</div>;

//   const tabs = ['Videos', 'Playlists', 'Posts'];

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white pb-20">
//       {/* Channel Switch Dropdown - only show if multiple channels exist */}
//       <div className="px-4 md:px-8 lg:px-16 pt-4">
//         <div className="relative inline-block w-full max-w-xs">
//           <select
//             value={selectedHandle}
//             onChange={(e) => handleChannelChange(e.target.value)}
//             className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white appearance-none pr-10 focus:outline-none focus:border-blue-500"
//           >
//             {Object.keys(mockChannels).map((key) => (
//               <option key={key} value={key}>
//                 {mockChannels[key].handle}
//               </option>
//             ))}
//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
//         </div>
//       </div>

//       {/* Banner + Profile Header */}
//       <div className="relative">
//         <div className="h-40 md:h-56 lg:h-72 bg-gray-800 relative overflow-hidden">
//           <img
//             src={channel.banner}
//             alt="Channel banner"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="px-6 md:px-12 lg:px-24 -mt-20 md:-mt-28 relative z-10 flex flex-col md:flex-row items-start md:items-end gap-6">
//           <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-gray-800 shadow-2xl flex items-center justify-center text-6xl font-bold">
//             <img
//               src={channel.avatar}
//               alt="Avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="flex-1 pb-4">
//             <h1 className="text-3xl md:text-5xl font-bold">{channel.name}</h1>
//             <p className="text-gray-400 mt-2 text-lg">
//               {channel.handle} • {channel.subscribers.toLocaleString()} subscribers • {channel.videosCount} videos
//             </p>
//             <p className="text-gray-400 mt-2 max-w-2xl">{channel.description}</p>

//             <div className="flex flex-wrap gap-4 mt-5">
//               {channel.isOwnChannel ? (
//                 <>
//                   <button className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition">
//                     <Edit size={18} />
//                     Customise channel
//                   </button>
//                   <button className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition">
//                     <VideoIcon size={18} />
//                     Manage videos
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button className="px-8 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
//                     Subscribe
//                   </button>
//                   <button className="px-6 py-2.5 bg-[#272727] rounded-full hover:bg-[#333] transition">
//                     Join
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="px-6 md:px-12 lg:px-24 mt-10 border-b border-gray-700">
//         <div className="flex gap-10 overflow-x-auto pb-1">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 px-2 font-medium text-base whitespace-nowrap transition-colors ${
//                 activeTab === tab
//                   ? 'text-white border-b-2 border-white'
//                   : 'text-gray-400 hover:text-gray-200'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//           <button className="pb-4 px-2 text-gray-400 hover:text-gray-200">
//             <Search size={22} />
//           </button>
//         </div>
//       </div>

//       {/* Videos Grid */}
//       <div className="px-6 md:px-12 lg:px-24 py-10">
//         {activeTab === 'Videos' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
//             {channel.videos.map((video) => (
//               <div key={video.id} className="cursor-pointer group">
//                 <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
//                   />
//                   <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded font-medium">
//                     {video.duration}
//                   </div>
//                 </div>
//                 <div className="mt-3">
//                   <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
//                     {video.title}
//                   </h3>
//                   <p className="text-sm text-gray-400 mt-1.5">
//                     {video.views.toLocaleString()} views • {video.uploaded}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === 'Playlists' && (
//           <p className="text-center text-gray-400 py-20 text-lg">No playlists created yet</p>
//         )}

//         {activeTab === 'Posts' && (
//           <p className="text-center text-gray-400 py-20 text-lg">No community posts yet</p>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { MoreHorizontal, Search, Edit, Video as VideoIcon, ChevronDown } from 'lucide-react';

// // Mock multiple channels (your accounts + some random others)
// const mockChannels = {
//   'adityajainghetal3503': {
//     name: "Aditiya Jain ghetal",
//     handle: "@adityajainghetal3503",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     banner: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
//     subscribers: 3,
//     videosCount: 4,
//     description: "More about this channel ...more",
//     isOwnChannel: true,
//     videos: [
//       {
//         id: 1,
//         title: "Task management system demo",
//         thumbnail: "https://picsum.photos/seed/task1/640/360",
//         duration: "3:32",
//         views: 4,
//         uploaded: "1 month ago",
//       },
//       {
//         id: 2,
//         title: "Morning routine in Bhopal",
//         thumbnail: "https://picsum.photos/seed/morning2/640/360",
//         duration: "8:14",
//         views: 47,
//         uploaded: "2 weeks ago",
//       },
//       {
//         id: 3,
//         title: "React project setup 2025",
//         thumbnail: "https://picsum.photos/seed/react3/640/360",
//         duration: "12:05",
//         views: 128,
//         uploaded: "3 days ago",
//       },
//       {
//         id: 4,
//         title: "Street food tour Madhya Pradesh",
//         thumbnail: "https://picsum.photos/seed/food4/640/360",
//         duration: "5:47",
//         views: 312,
//         uploaded: "2 months ago",
//       },
//     ],
//   },
//   'techwithaditya': {
//     name: "Tech With Aditya",
//     handle: "@techwithaditya",
//     avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
//     banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=400&fit=crop",
//     subscribers: 1240,
//     videosCount: 38,
//     description: "Latest tech reviews & tutorials",
//     isOwnChannel: false,
//     videos: [
//       {
//         id: 1,
//         title: "Best laptop under 60k in 2026",
//         thumbnail: "https://picsum.photos/seed/laptop1/640/360",
//         duration: "11:22",
//         views: 8450,
//         uploaded: "5 days ago",
//       },
//       {
//         id: 2,
//         title: "iPhone 17 Pro Max unboxing",
//         thumbnail: "https://picsum.photos/seed/iphone2/640/360",
//         duration: "9:58",
//         views: 12400,
//         uploaded: "1 week ago",
//       },
//     ],
//   },
//   'gamingvibesmp': {
//     name: "Gaming Vibes MP",
//     handle: "@gamingvibesmp",
//     avatar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
//     banner: "https://images.unsplash.com/photo-1551103782-8b7b3a142d6f?w=1600&h=400&fit=crop",
//     subscribers: 567,
//     videosCount: 19,
//     description: "BGMI & Free Fire live + highlights",
//     isOwnChannel: false,
//     videos: [
//       {
//         id: 1,
//         title: "1 vs 4 clutch insane gameplay",
//         thumbnail: "https://picsum.photos/seed/gaming1/640/360",
//         duration: "4:19",
//         views: 3200,
//         uploaded: "10 hours ago",
//       },
//     ],
//   },
// };

// export default function ChannelPage() {
//   const { handle: urlHandle } = useParams(); // e.g. adityajainghetal3503
//   const navigate = useNavigate();

//   const [selectedHandle, setSelectedHandle] = useState(urlHandle || 'adityajainghetal3503');
//   const [channel, setChannel] = useState(null);
//   const [activeTab, setActiveTab] = useState('Videos');

//   useEffect(() => {
//     // Simulate fetching channel by handle
//     const found = mockChannels[selectedHandle.replace('@', '')];
//     setChannel(found || mockChannels['adityajainghetal3503']);
//   }, [selectedHandle]);

//   const handleChannelChange = (newHandle) => {
//     setSelectedHandle(newHandle);
//     navigate(`/channel/${newHandle.replace('@', '')}`);
//   };

//   if (!channel) return <div className="text-center py-20 text-gray-400">Loading channel...</div>;

//   const tabs = ['Videos', 'Playlists', 'Posts'];

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white pb-20">

//       {/* Banner + Profile Header */}
//       <div className="relative">
//         <div className="h-40 md:h-56 lg:h-72 bg-gray-800 relative overflow-hidden">
//           <img
//             src={channel.banner}
//             alt="Channel banner"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="px-6 md:px-12 lg:px-24 -mt-20 md:-mt-28 relative z-10 flex flex-col md:flex-row items-start md:items-end gap-6">
//           <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-gray-800 shadow-2xl flex items-center justify-center text-6xl font-bold">
//             <img
//               src={channel.avatar}
//               alt="Avatar"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="flex-1 pb-4">
//             <h1 className="text-3xl md:text-5xl font-bold">{channel.name}</h1>
//             <p className="text-gray-400 mt-2 text-lg">
//               {channel.handle} • {channel.subscribers.toLocaleString()} subscribers • {channel.videosCount} videos
//             </p>
//             <p className="text-gray-400 mt-2 max-w-2xl">{channel.description}</p>

//             <div className="flex flex-wrap gap-4 mt-5">
//               {channel.isOwnChannel ? (
//                 <>
//                   {/* <button className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition">
//                     <Edit size={18} />
//                     Customise channel
//                   </button> */}

                 
// <button
//   onClick={() => navigate('/channel/customize')} // or pass channel handle
//   className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition"
// >
//   <Edit size={18} />
//   Customise channel
// </button>
//                   <button className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition">
//                     <VideoIcon size={18} />
//                     Manage videos
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button className="px-8 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
//                     Subscribe
//                   </button>
//                   <button className="px-6 py-2.5 bg-[#272727] rounded-full hover:bg-[#333] transition">
//                     Join
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Channel switch dropdown – placed below the buttons */}
//             {Object.keys(mockChannels).length > 1 && (
//               <div className="mt-6">
//                 <label className="text-sm text-gray-400 block mb-1.5">Switch channel</label>
//                 <div className="relative inline-block w-full max-w-xs">
//                   <select
//                     value={selectedHandle}
//                     onChange={(e) => handleChannelChange(e.target.value)}
//                     className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white appearance-none pr-10 focus:outline-none focus:border-blue-500"
//                   >
//                     {Object.keys(mockChannels).map((key) => (
//                       <option key={key} value={key}>
//                         {mockChannels[key].handle}
//                       </option>
//                     ))}
//                   </select>
//                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="px-6 md:px-12 lg:px-24 mt-10 border-b border-gray-700">
//         <div className="flex gap-10 overflow-x-auto pb-1">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 px-2 font-medium text-base whitespace-nowrap transition-colors ${
//                 activeTab === tab
//                   ? 'text-white border-b-2 border-white'
//                   : 'text-gray-400 hover:text-gray-200'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//           <button className="pb-4 px-2 text-gray-400 hover:text-gray-200">
//             <Search size={22} />
//           </button>
//         </div>
//       </div>

//       {/* Content - Videos / Playlists / Posts */}
//       <div className="px-6 md:px-12 lg:px-24 py-10">
//         {activeTab === 'Videos' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
//             {channel.videos.map((video) => (
//               <div key={video.id} className="cursor-pointer group">
//                 <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
//                   />
//                   <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded font-medium">
//                     {video.duration}
//                   </div>
//                 </div>
//                 <div className="mt-3">
//                   <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
//                     {video.title}
//                   </h3>
//                   <p className="text-sm text-gray-400 mt-1.5">
//                     {video.views.toLocaleString()} views • {video.uploaded}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === 'Playlists' && (
//           <p className="text-center text-gray-400 py-20 text-lg">No playlists created yet</p>
//         )}

//         {activeTab === 'Posts' && (
//           <p className="text-center text-gray-400 py-20 text-lg">No community posts yet</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MoreHorizontal, Search, Edit, Video as VideoIcon, ChevronDown, Plus } from 'lucide-react';

// Initial mock channels data
const initialMockChannels = {
  'adityajainghetal3503': {
    name: "Aditiya Jain ghetal",
    handle: "@adityajainghetal3503",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    banner: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
    subscribers: 3,
    videosCount: 4,
    description: "More about this channel ...more",
    isOwnChannel: true,
    videos: [
      {
        id: 1,
        title: "Task management system demo",
        thumbnail: "https://picsum.photos/seed/task1/640/360",
        duration: "3:32",
        views: 4,
        uploaded: "1 month ago",
      },
      {
        id: 2,
        title: "Morning routine in Bhopal",
        thumbnail: "https://picsum.photos/seed/morning2/640/360",
        duration: "8:14",
        views: 47,
        uploaded: "2 weeks ago",
      },
      {
        id: 3,
        title: "React project setup 2025",
        thumbnail: "https://picsum.photos/seed/react3/640/360",
        duration: "12:05",
        views: 128,
        uploaded: "3 days ago",
      },
      {
        id: 4,
        title: "Street food tour Madhya Pradesh",
        thumbnail: "https://picsum.photos/seed/food4/640/360",
        duration: "5:47",
        views: 312,
        uploaded: "2 months ago",
      },
    ],
  },
  'techwithaditya': {
    name: "Tech With Aditya",
    handle: "@techwithaditya",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=400&fit=crop",
    subscribers: 1240,
    videosCount: 38,
    description: "Latest tech reviews & tutorials",
    isOwnChannel: false,
    videos: [
      { id: 1, title: "Best laptop under 60k in 2026", thumbnail: "https://picsum.photos/seed/laptop1/640/360", duration: "11:22", views: 8450, uploaded: "5 days ago" },
      { id: 2, title: "iPhone 17 Pro Max unboxing", thumbnail: "https://picsum.photos/seed/iphone2/640/360", duration: "9:58", views: 12400, uploaded: "1 week ago" },
    ],
  },
};

export default function ChannelPage() {
  const { handle: urlHandle } = useParams();
  const navigate = useNavigate();

  const [mockChannels, setMockChannels] = useState(initialMockChannels);
  const [selectedHandle, setSelectedHandle] = useState(urlHandle || 'adityajainghetal3503');
  const [channel, setChannel] = useState(null);
  const [activeTab, setActiveTab] = useState('Videos');

  // Create channel modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newChannel, setNewChannel] = useState({ name: '', handle: '', description: '' });
  const [createError, setCreateError] = useState('');

  useEffect(() => {
    const found = mockChannels[selectedHandle.replace('@', '')];
    setChannel(found || mockChannels['adityajainghetal3503']);
  }, [selectedHandle, mockChannels]);

  const handleChannelChange = (newHandle) => {
    setSelectedHandle(newHandle);
    navigate(`/channel/${newHandle.replace('@', '')}`);
  };

  // Create new channel
  const handleCreateChannel = (e) => {
    e.preventDefault();
    const cleanHandle = newChannel.handle.trim().toLowerCase().replace(/\s+/g, '');

    if (!newChannel.name.trim()) {
      setCreateError('Channel name is required');
      return;
    }
    if (!cleanHandle) {
      setCreateError('Handle is required');
      return;
    }
    if (mockChannels[cleanHandle]) {
      setCreateError('This handle is already taken');
      return;
    }

    const newChannelData = {
      name: newChannel.name.trim(),
      handle: `@${cleanHandle}`,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", // default avatar
      banner: "https://images.unsplash.com/photo-1557683311-973673baf926?w=1600&h=400&fit=crop",
      subscribers: 0,
      videosCount: 0,
      description: newChannel.description.trim() || "This is my new channel!",
      isOwnChannel: true,
      videos: [],
    };

    setMockChannels((prev) => ({
      ...prev,
      [cleanHandle]: newChannelData,
    }));

    // Auto switch to new channel
    setSelectedHandle(`@${cleanHandle}`);
    navigate(`/channel/${cleanHandle}`);

    // Reset & close modal
    setNewChannel({ name: '', handle: '', description: '' });
    setCreateError('');
    setShowCreateModal(false);
  };

  if (!channel) return <div className="text-center py-20 text-gray-400">Loading channel...</div>;

  const tabs = ['Videos', 'Playlists', 'Posts'];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pb-20">

      {/* Banner + Profile Header */}
      <div className="relative">
        <div className="h-40 md:h-56 lg:h-72 bg-gray-800 relative overflow-hidden">
          <img
            src={channel.banner}
            alt="Channel banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 md:px-12 lg:px-24 -mt-20 md:-mt-28 relative z-10 flex flex-col md:flex-row items-start md:items-end gap-6">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-gray-800 shadow-2xl">
            <img src={channel.avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 pb-4">
            <h1 className="text-3xl md:text-5xl font-bold">{channel.name}</h1>
            <p className="text-gray-400 mt-2 text-lg">
              {channel.handle} • {channel.subscribers.toLocaleString()} subscribers • {channel.videosCount} videos
            </p>
            <p className="text-gray-400 mt-2 max-w-2xl">{channel.description}</p>

            <div className="flex flex-wrap gap-4 mt-5">
              {channel.isOwnChannel ? (
                <>
                  <button
                    onClick={() => navigate('/channel/customize')}
                    className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition"
                  >
                    <Edit size={18} />
                    Customise channel
                  </button>
                  <button className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition">
                    <VideoIcon size={18} />
                    Manage videos
                  </button>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center gap-2 transition"
                  >
                    <Plus size={18} />
                    Create channel
                  </button>
                </>
              ) : (
                <>
                  <button className="px-8 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
                    Subscribe
                  </button>
                  <button className="px-6 py-2.5 bg-[#272727] rounded-full hover:bg-[#333] transition">
                    Join
                  </button>
                </>
              )}
            </div>

            {/* Channel switcher */}
            {Object.keys(mockChannels).length > 0 && (
              <div className="mt-6">
                <label className="text-sm text-gray-400 block mb-1.5">Switch channel</label>
                <div className="relative inline-block w-full max-w-xs">
                  <select
                    value={selectedHandle}
                    onChange={(e) => handleChannelChange(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white appearance-none pr-10 focus:outline-none focus:border-blue-500"
                  >
                    {Object.keys(mockChannels).map((key) => (
                      <option key={key} value={`@${key}`}>
                        {mockChannels[key].handle}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 md:px-12 lg:px-24 mt-10 border-b border-gray-700">
        <div className="flex gap-10 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-medium text-base whitespace-nowrap transition-colors ${
                activeTab === tab ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="pb-4 px-2 text-gray-400 hover:text-gray-200">
            <Search size={22} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-24 py-10">
        {activeTab === 'Videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
            {channel.videos.length > 0 ? (
              channel.videos.map((video) => (
                <div key={video.id} className="cursor-pointer group">
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1.5">
                      {video.views.toLocaleString()} views • {video.uploaded}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-10 col-span-full">No videos yet</p>
            )}
          </div>
        )}

        {activeTab === 'Playlists' && (
          <p className="text-center text-gray-400 py-20 text-lg">No playlists created yet</p>
        )}

        {activeTab === 'Posts' && (
          <p className="text-center text-gray-400 py-20 text-lg">No community posts yet</p>
        )}
      </div>

      {/* Create Channel Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] rounded-xl w-full max-w-md p-6 relative">
            <h2 className="text-2xl font-bold mb-6">Create a new channel</h2>

            {createError && (
              <div className="bg-red-500/20 text-red-400 p-3 rounded mb-4">
                {createError}
              </div>
            )}

            <form onSubmit={handleCreateChannel}>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-1.5">Channel name</label>
                <input
                  type="text"
                  value={newChannel.name}
                  onChange={(e) => setNewChannel({ ...newChannel, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="My Awesome Channel"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-1.5">Handle</label>
                <div className="flex items-center bg-[#0f0f0f] border border-gray-700 rounded-lg overflow-hidden">
                  <span className="px-4 text-gray-400">@</span>
                  <input
                    type="text"
                    value={newChannel.handle}
                    onChange={(e) => setNewChannel({ ...newChannel, handle: e.target.value })}
                    className="flex-1 py-2.5 bg-transparent text-white focus:outline-none"
                    placeholder="mynewhandle"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Only letters, numbers, no spaces</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-1.5">Description (optional)</label>
                <textarea
                  value={newChannel.description}
                  onChange={(e) => setNewChannel({ ...newChannel, description: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-24 resize-none"
                  placeholder="Tell people about your channel..."
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-full transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full transition"
                >
                  Create channel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}