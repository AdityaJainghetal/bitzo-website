
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";
// import useRef from "react";
// import { ChevronRight, Search, Bell, Play, Info, Plus } from "lucide-react";

// // Romantic International TV Shows
// const romanticShows = [
//   { id: 1, title: "Love in the Clouds", thumb: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=225&fit=crop" },
//   { id: 2, title: "Hidden Love", thumb: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=225&fit=crop" },
//   { id: 3, title: "Queen of Tears", thumb: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=225&fit=crop" },
//   { id: 4, title: "Inheritors", thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop" },
//   { id: 5, title: "When I Fly Towards You", thumb: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=400&h=225&fit=crop" },
//   { id: 6, title: "Genie", thumb: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=225&fit=crop" },
// ];


// // Kids Films
// const kidsFilms = [
//   // { id: 101, title: "Chhota Bheem: Master of Shaolin", thumb: "https://images.unsplash.com/photo-1587049352846-4a222e784422?w=400&h=225&fit=crop" },
//   { id: 102, title: "Chhota Bheem: Krishna", thumb: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=225&fit=crop" },
//   { id: 103, title: "The Rise of Kirmada", thumb: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=225&fit=crop" },
//   { id: 104, title: "Journey to Petra", thumb: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop" },
//   { id: 105, title: "Mayanagari", thumb: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=225&fit=crop" },
//   { id: 106, title: "Imbarra", thumb: "https://images.unsplash.com/photo-1606164587034-81b84c4e11d0?w=400&h=225&fit=crop" },
// ];

// // Korean Movies & TV
// const koreanContent = [
//   { id: 201, title: "Vincenzo", thumb: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=225&fit=crop" },
//   { id: 202, title: "Start-Up", thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop" },
//   { id: 203, title: "Squid Game", thumb: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=225&fit=crop" },
//   { id: 204, title: "Weak Hero", thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop" },
//   { id: 205, title: "Cashero", thumb: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=225&fit=crop" },
//   { id: 206, title: "Beyond the Bar", thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=225&fit=crop" },
// ];



// function useWidth() {
//   const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return width;
// }



// function SectionHeader({ title }) {
//   return (
//     <div className="mb-3 flex items-center justify-between">
//       <h2 className="text-white text-xl font-semibold flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
//         {title}
//         <ChevronRight size={20} className="text-zinc-400" />
//       </h2>
//     </div>
//   );
// }

// function MovieCard({ item, onClick }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => onClick(item)}
//       className="flex-shrink-0 rounded-md overflow-hidden relative bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 hover:ring-2 hover:ring-white/30 w-[240px] h-[135px] md:w-[280px] md:h-[158px]"
//     >
//       <img 
//         src={item.thumb} 
//         alt={item.title} 
//         className="h-full w-full object-cover"
//       />
      
//       {/* Hover overlay */}
//       {isHovered && (
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
//           <div className="absolute bottom-0 left-0 right-0 p-3">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center space-x-2">
//                 <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/90">
//                   <Play size={16} fill="black" />
//                 </button>
//                 <button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:border-white">
//                   <Plus size={16} />
//                 </button>
//                 <button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:border-white">
//                   <Info size={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center text-xs text-gray-300 mb-1">
//                 <span className="mr-2">94% Match</span>
//                 <span className="mr-2">2023</span>
//                 <span className="border border-gray-500 px-1">TV-MA</span>
//               </div>
//               <h3 className="text-white text-sm font-semibold">{item.title}</h3>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Title always visible at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-transparent to-transparent">
//         <h3 className="text-white text-sm font-semibold truncate">{item.title}</h3>
//       </div>
//     </div>
//   );
// }





// export default function NetflixStylePage() {
//   const navigate = useNavigate();
//   const isMobile = useWidth() < 768;

//   const handleItemClick = (item) => {
//     navigate(`/video/${item.id}`, { state: { item } });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-show:hover::-webkit-scrollbar {
//           display: block;
//           height: 8px;
//         }
//         .scrollbar-show:hover::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//         }
//         .scrollbar-show:hover::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.3);
//           border-radius: 4px;
//         }
//         .scrollbar-show:hover::-webkit-scrollbar-thumb:hover {
//           background: rgba(255, 255, 255, 0.5);
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>

//       {/* <Navbar /> */}
      
//       {/* <MainBanner /> */}

//       <div className="mx-auto max-w-screen-2xl px-4 pt-6 md:px-12 lg:px-16 -mt-32 relative z-10">
        
//         {/* Romantic International TV Shows Section */}
//         <div className="mb-10">
//           <SectionHeader title="Romantic International TV Shows" />
//           {/* <ScrollableRow items={romanticShows} onItemClick={handleItemClick} /> */}
//         </div>

//         {/* Kids Films Section */}
//         <div className="mb-10">
//           <SectionHeader title="Kids Films" />
//           {/* <ScrollableRow items={kidsFilms} onItemClick={handleItemClick} /> */}
//         </div>

//         {/* Korean Movies & TV Section */}
//         <div className="mb-10">
//           {/* <SectionHeader title="Korean Movies & TV Dubbed in Hindi" /> */}
//           {/* <ScrollableRow items={koreanContent} onItemClick={handleItemClick} /> */}
//         </div>

//         {/* Continue Watching Section */}
//         <div className="mb-10">
//           <SectionHeader title="Continue Watching" />
//           <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide hover:scrollbar-show">
//             {[...romanticShows.slice(0, 3), ...kidsFilms.slice(0, 2), ...koreanContent.slice(0, 2)].map((item) => (
//               <div key={item.id} className="flex-shrink-0 w-[240px] md:w-[280px]">
//                 <div className="relative">
//                   <MovieCard item={item} onClick={handleItemClick} />
//                   <div className="mt-2">
//                     <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
//                       <div className="h-full bg-red-600 w-3/4"></div>
//                     </div>
//                     <p className="text-xs text-gray-400 mt-1">74% watched</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Popular on Netflix Section */}
//         <div className="mb-10">
//           <SectionHeader title="Popular on Netflix" />
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {koreanContent.map((item) => (
//               <div 
//                 key={item.id} 
//                 onClick={() => handleItemClick(item)}
//                 className="cursor-pointer group"
//               >
//                 <div className="relative aspect-video rounded-md overflow-hidden mb-2">
//                   <img 
//                     src={item.thumb} 
//                     alt={item.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-2 right-2 bg-black/70 rounded px-2 py-1 text-xs">
//                     #1
//                   </div>
//                 </div>
//                 <h3 className="text-white text-sm font-medium truncate">{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

     
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import useRef from "react";
import { ChevronRight, Search, Bell, Play, Info, Plus } from "lucide-react";

// Romantic International TV Shows
const romanticShows = [
  { id: 1, title: "Love in the Clouds", thumb: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=225&fit=crop" },
  { id: 2, title: "Hidden Love", thumb: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=225&fit=crop" },
  { id: 3, title: "Queen of Tears", thumb: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=225&fit=crop" },
  { id: 4, title: "Inheritors", thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop" },
  { id: 5, title: "When I Fly Towards You", thumb: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=400&h=225&fit=crop" },
  { id: 6, title: "Genie", thumb: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=225&fit=crop" },
];


// Kids Films
const kidsFilms = [
  // { id: 101, title: "Chhota Bheem: Master of Shaolin", thumb: "https://images.unsplash.com/photo-1587049352846-4a222e784422?w=400&h=225&fit=crop" },
  { id: 102, title: "Chhota Bheem: Krishna", thumb: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=225&fit=crop" },
  { id: 103, title: "The Rise of Kirmada", thumb: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=225&fit=crop" },
  { id: 104, title: "Journey to Petra", thumb: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop" },
  { id: 105, title: "Mayanagari", thumb: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=225&fit=crop" },
  { id: 106, title: "Imbarra", thumb: "https://images.unsplash.com/photo-1606164587034-81b84c4e11d0?w=400&h=225&fit=crop" },
];

// Korean Movies & TV
const koreanContent = [
  { id: 201, title: "Vincenzo", thumb: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=225&fit=crop" },
  { id: 202, title: "Start-Up", thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop" },
  { id: 203, title: "Squid Game", thumb: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=225&fit=crop" },
  { id: 204, title: "Weak Hero", thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop" },
  { id: 205, title: "Cashero", thumb: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=225&fit=crop" },
  { id: 206, title: "Beyond the Bar", thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=225&fit=crop" },
];



function useWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}



function SectionHeader({ title }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-white text-xl font-semibold flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
        {title}
        <ChevronRight size={20} className="text-zinc-400" />
      </h2>
    </div>
  );
}

function MovieCard({ item, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(item)}
      className="flex-shrink-0 rounded-md overflow-hidden relative bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 hover:ring-2 hover:ring-white/30 w-[240px] h-[135px] md:w-[280px] md:h-[158px]"
    >
      <img 
        src={item.thumb} 
        alt={item.title} 
        className="h-full w-full object-cover"
      />
      
      {/* Hover overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/90">
                  <Play size={16} fill="black" />
                </button>
                <button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:border-white">
                  <Plus size={16} />
                </button>
                <button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:border-white">
                  <Info size={16} />
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center text-xs text-gray-300 mb-1">
                <span className="mr-2">94% Match</span>
                <span className="mr-2">2023</span>
                <span className="border border-gray-500 px-1">TV-MA</span>
              </div>
              <h3 className="text-white text-sm font-semibold">{item.title}</h3>
            </div>
          </div>
        </div>
      )}
      
      {/* Title always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <h3 className="text-white text-sm font-semibold truncate">{item.title}</h3>
      </div>
    </div>
  );
}





export default function NetflixStylePage() {
  const navigate = useNavigate();
  const isMobile = useWidth() < 768;

  const handleItemClick = (item) => {
    navigate(`/video/${item.id}`, { state: { item } });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-show:hover::-webkit-scrollbar {
          display: block;
          height: 8px;
        }
        .scrollbar-show:hover::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .scrollbar-show:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .scrollbar-show:hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* <Navbar /> */}
      
      {/* <MainBanner /> */}

      <div className="mx-auto max-w-screen-2xl px-4 pt-6 md:px-12 lg:px-16 -mt-32 relative z-10">
        
        {/* Romantic International TV Shows Section */}
        <div className="mb-10">
          <SectionHeader title="Romantic International TV Shows" />
          {/* <ScrollableRow items={romanticShows} onItemClick={handleItemClick} /> */}
        </div>

        {/* Kids Films Section */}
        <div className="mb-10">
          <SectionHeader title="Kids Films" />
          {/* <ScrollableRow items={kidsFilms} onItemClick={handleItemClick} /> */}
        </div>

        {/* Korean Movies & TV Section */}
        <div className="mb-10">
          {/* <SectionHeader title="Korean Movies & TV Dubbed in Hindi" /> */}
          {/* <ScrollableRow items={koreanContent} onItemClick={handleItemClick} /> */}
        </div>

        {/* Continue Watching Section */}
        <div className="mb-10">
          <SectionHeader title="Continue Watching" />
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide hover:scrollbar-show">
            {[...romanticShows.slice(0, 3), ...kidsFilms.slice(0, 2), ...koreanContent.slice(0, 2)].map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[240px] md:w-[280px]">
                <div className="relative">
                  <MovieCard item={item} onClick={handleItemClick} />
                  <div className="mt-2">
                    <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-3/4"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">74% watched</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular on Netflix Section - Now Changed to Videos */}
        <div className="mb-10">
          <SectionHeader title="Videos" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {koreanContent.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleItemClick(item)}
                className="cursor-pointer group"
              >
                <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                  <img 
                    src={item.thumb} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 rounded px-2 py-1 text-xs">
                    #1
                  </div>
                </div>
                <h3 className="text-white text-sm font-medium truncate">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>

     
    </div>
  );
}