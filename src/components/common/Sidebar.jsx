

// import React from 'react';
// import { 
//   Home, 
//   Flame, 
//   PlusCircle,     // better for create/upload
//   ListVideo,      // for subscriptions
//   Library,        // or Bookmark, List for Library
//   User,           // for You/profile
//   Clock,          // optional History
// } from 'lucide-react';

// const bottomNavItems = [
//   { icon: Home,      label: 'Home',         path: '/',            active: true },
//   { icon: Flame,     label: 'Shorts',       path: '/shorts' },
//   { icon: PlusCircle, label: 'Upload',            path: '/uploadvideo',      isCenter: true }, // special raised +
//   { icon: User,      label: 'You',          path: '/profile' },
// ];

// const sidebarItems = [
//   { icon: Home,      label: 'Home',         path: '/',            active: true },
//   { icon: Flame,     label: 'Shorts',       path: '/shorts' },
//    { icon: PlusCircle, label: 'Upload',            path: '/uploadvideo'},
//   { icon: Library,   label: 'You',      path: '/profile' },
//   // You can add more like:
//   // { icon: Clock, label: 'History', path: '/history' },
//   // { icon: ThumbsUp, label: 'Liked videos', path: '/liked' },
// ];

// export default function Navigation({ isOpen, setIsOpen }) {
//   // isOpen & setIsOpen → used on desktop/tablet for collapse/expand

//   return (
//     <>
//       {/* DESKTOP / TABLET SIDEBAR (hidden on mobile) */}
//       <aside
//         className={`
//           hidden md:block fixed top-14 left-0 z-40
//           h-[calc(100vh-3.5rem)] 
//           bg-[#0f0f0f] border-r border-gray-800
//           transition-all duration-300 ease-in-out
//           overflow-y-auto scrollbar-none
//           -ms-overflow-style:none [scrollbar-width:none]
//           ${isOpen ? 'w-64' : 'w-16 hover:w-64 group/sidebar'}
//         `}
//       >
//         <style jsx>{`
//           aside::-webkit-scrollbar { display: none; }
//         `}</style>

//         <div className="py-2 flex flex-col">
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = item.active;

//             return (
//               <a
//                 key={item.path}
//                 href={item.path || '#'}
//                 className={`
//                   group/item relative flex items-center gap-6
//                   px-5 py-3 text-sm font-medium
//                   transition-all duration-200
//                   hover:bg-[#272727] active:bg-[#3a3a3a]
//                   ${isActive ? 'bg-[#272727] text-white' : 'text-gray-300'}
//                 `}
//               >
//                 <Icon
//                   size={24}
//                   strokeWidth={isActive ? 2.5 : 1.8}
//                   className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-300 group-hover/item:text-white'}`}
//                 />
//                 <span
//                   className={`
//                     whitespace-nowrap transition-opacity duration-200
//                     ${isOpen ? 'opacity-100' : 'opacity-0 group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0'}
//                   `}
//                 >
//                   {item.label}
//                 </span>

//                 {/* Vertical active indicator */}
//                 {isActive && (
//                   <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-r-full" />
//                 )}
//               </a>
//             );
//           })}
//         </div>
//       </aside>

//       {/* MOBILE BOTTOM NAV (visible on mobile) */}
//       <nav
//         className={`
//           md:hidden fixed bottom-0 inset-x-0 z-50
//           bg-[#0f0f0f]/92 backdrop-blur-xl border-t border-gray-800/70
//           flex items-center justify-around h-[4.5rem]
//           safe-area-inset-bottom pb-safe
//           shadow-[0_-5px_15px_rgba(0,0,0,0.45)]
//         `}
//       >
//         {bottomNavItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = item.active && !item.isCenter;
//           const isCenter = item.isCenter;

//           if (isCenter) {
//             return (
//               <a
//                 key={item.path}
//                 href={item.path}
//                 className={`
//                   relative -top-6 flex items-center justify-center
//                   w-16 h-16 rounded-full bg-red-600 text-white
//                   shadow-[0_8px_25px_rgba(220,38,38,0.45)]
//                   active:scale-95 transition-all duration-200
//                   hover:bg-red-700
//                 `}
//               >
//                 <Icon size={32} strokeWidth={2.2} />
//               </a>
//             );
//           }

//           return (
//             <a
//               key={item.path}
//               href={item.path || '#'}
//               className={`
//                 flex flex-col items-center justify-center
//                 flex-1 py-1.5 px-2 touch-manipulation
//                 transition-all duration-200 active:scale-95
//                 ${isActive ? 'text-white' : 'text-gray-400'}
//               `}
//             >
//               <div className="relative mb-0.5">
//                 <Icon size={28} strokeWidth={isActive ? 2.8 : 2} />
//                 {isActive && (
//                   <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-full" />
//                 )}
//               </div>
//               <span className="text-[10px] font-medium tracking-tight">
//                 {item.label}
//               </span>
//             </a>
//           );
//         })}
//       </nav>
//     </>
//   );
// }

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Flame,
  PlusCircle,
  Library,
  User,
} from "lucide-react";

const bottomNavItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Flame, label: "Shorts", path: "/shorts" },
  {
    icon: PlusCircle,
    label: "Upload",
    path: "/uploadvideo",
    isCenter: true,
  },
  { icon: User, label: "You", path: "/profile" },
];

const sidebarItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Flame, label: "Shorts", path: "/shorts" },
  { icon: PlusCircle, label: "Upload", path: "/uploadvideo" },
  { icon: Library, label: "You", path: "/profile" },
];

export default function Navigation({ isOpen }) {
  const location = useLocation();

  return (
    <>
      {/* ===== DESKTOP / TABLET SIDEBAR ===== */}
      <aside
        className={`
          hidden md:block fixed top-14 left-0 z-40
          h-[calc(100vh-3.5rem)]
          bg-[#0f0f0f] border-r border-gray-800
          transition-all duration-300
          ${isOpen ? "w-64" : "w-16 hover:w-64 group/sidebar"}
        `}
      >
        <div className="py-2 flex flex-col">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`
                  group/item relative flex items-center gap-6
                  px-5 py-3 text-sm font-medium
                  transition-all
                  hover:bg-[#272727]
                  ${isActive ? "bg-[#272727] text-white" : "text-gray-300"}
                `}
              >
                <Icon
                  size={24}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  className={isActive ? "text-white" : "text-gray-300"}
                />

                <span
                  className={`
                    whitespace-nowrap transition-opacity
                    ${isOpen ? "opacity-100" : "opacity-0 group-hover/sidebar:opacity-100"}
                  `}
                >
                  {item.label}
                </span>

                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-r-full" />
                )}
              </NavLink>
            );
          })}
        </div>
      </aside>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav
        className="
          md:hidden fixed bottom-0 inset-x-0 z-50
          bg-[#0f0f0f]/90 backdrop-blur-xl
          border-t border-gray-800
          flex items-center justify-around h-[4.5rem]
        "
      >
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const isCenter = item.isCenter;

          if (isCenter) {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="
                  relative -top-6 w-16 h-16
                  flex items-center justify-center
                  rounded-full bg-red-600 text-white
                  shadow-lg active:scale-95
                "
              >
                <Icon size={32} />
              </NavLink>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`
                flex flex-col items-center justify-center flex-1
                transition-all
                ${isActive ? "text-white" : "text-gray-400"}
              `}
            >
              <Icon size={26} strokeWidth={isActive ? 2.6 : 2} />
              <span className="text-[10px] mt-1">{item.label}</span>

              {isActive && (
                <span className="mt-1 w-6 h-1 bg-white rounded-full" />
              )}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
