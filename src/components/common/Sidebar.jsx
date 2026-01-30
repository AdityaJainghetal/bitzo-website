
// // import React from 'react';
// // import { 
// //   Home, 
// //   Flame, 
// //   Video, 
 
// // } from 'lucide-react';

// // const navItems = [
// //   { icon: Home,      label: 'Home',         path: '/',            active: true },
// //   { icon: Flame,     label: 'shorts',     path: '/shorts' },
// //   { icon: Video,     label: 'Subscriptions', path: '/subscriptions' },

// // ];

// // export default function Sidebar({ isOpen }) {
// //   return (
// //     <aside
// //       className={`
// //         fixed top-14 left-0 z-40
// //         h-[calc(100vh-3.5rem)] 
// //         bg-[#0f0f0f] border-r border-gray-800
// //         transition-all duration-300
// //         overflow-y-auto
// //         scrollbar-none          /* ← new */
// //         -ms-overflow-style-none /* IE + Edge */
// //         [scrollbar-width:none]  /* Firefox */
// //         ${isOpen ? 'w-60' : 'w-16 hover:w-60 group'}
// //       `}
// //     >
// //       {/* Webkit browsers (Chrome, Safari, new Edge) */}
// //       <style jsx>{`
// //         aside::-webkit-scrollbar {
// //           display: none;
// //         }
// //       `}</style>

// //       <div className="py-2">
// //         {navItems.map((item, index) => {
// //           if (item.type === 'separator') {
// //             return (
// //               <div 
// //                 key={`sep-${index}`} 
// //                 className="h-px bg-gray-800 my-3 mx-4" 
// //               />
// //             );
// //           }

// //           const Icon = item.icon;
// //           const isActive = item.active === true;

// //           return (
// //             <a
// //               key={index}
// //               href={item.path || '#'}
// //               className={`
// //                 flex items-center gap-6 
// //                 px-4 py-2.5 
// //                 hover:bg-[#272727] 
// //                 transition-colors
// //                 ${isActive ? 'bg-[#272727]' : ''}
// //               `}
// //             >
// //               <Icon
// //                 size={20}
// //                 className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-300'}`}
// //               />
// //               <span
// //                 className={`
// //                   text-sm font-medium truncate
// //                   transition-opacity duration-150
// //                   ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
// //                   ${isActive ? 'text-white' : 'text-gray-300'}
// //                 `}
// //               >
// //                 {item.label}
// //               </span>
// //             </a>
// //           );
// //         })}
// //       </div>
// //     </aside>
// //   );
// // }

// import React from 'react';
// import { 
//   Home, 
//   Flame, 
//   Video 
// } from 'lucide-react';

// const navItems = [
//   { icon: Home,  label: 'Home',         path: '/',            active: true },
//   { icon: Flame, label: 'Shorts',       path: '/shorts' },
//   { icon: Video, label: 'Subscriptions', path: '/subscriptions' },
// ];

// export default function Navigation({ isOpen, setIsOpen }) {
//   // Note: If you're controlling isOpen from parent (e.g. hamburger menu),
//   // keep it. For pure mobile → bottom nav, we don't really need isOpen.

//   return (
//     <>
//       {/* DESKTOP / TABLET SIDEBAR */}
//       <aside
//         className={`
//           hidden md:block
//           fixed top-14 left-0 z-40
//           h-[calc(100vh-3.5rem)]
//           bg-[#0f0f0f] border-r border-gray-800
//           transition-all duration-300
//           overflow-y-auto
//           scrollbar-none
//           -ms-overflow-style-none
//           [scrollbar-width:none]
//           ${isOpen ? 'w-60' : 'w-16 hover:w-60 group'}
//         `}
//       >
//         <style jsx>{`
//           aside::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>

//         <div className="py-2">
//           {navItems.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = item.active === true;

//             return (
//               <a
//                 key={index}
//                 href={item.path || '#'}
//                 className={`
//                   flex items-center gap-6
//                   px-4 py-2.5
//                   hover:bg-[#272727]
//                   transition-colors
//                   ${isActive ? 'bg-[#272727]' : ''}
//                 `}
//               >
//                 <Icon
//                   size={20}
//                   className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-300'}`}
//                 />
//                 <span
//                   className={`
//                     text-sm font-medium truncate
//                     transition-opacity duration-150
//                     ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
//                     ${isActive ? 'text-white' : 'text-gray-300'}
//                   `}
//                 >
//                   {item.label}
//                 </span>
//               </a>
//             );
//           })}
//         </div>
//       </aside>

//       {/* MOBILE BOTTOM NAVIGATION */}
//       <nav
//         className={`
//           md:hidden
//           fixed bottom-0 left-0 right-0 z-50
//           bg-[#0f0f0f] border-t border-gray-800
//           flex items-center justify-around
//           h-14
//           shadow-lg
//         `}
//       >
//         {navItems.map((item, index) => {
//           const Icon = item.icon;
//           const isActive = item.active === true;

//           return (
//             <a
//               key={index}
//               href={item.path || '#'}
//               className={`
//                 flex flex-col items-center justify-center
//                 flex-1 py-1.5
//                 text-gray-300 hover:text-white
//                 transition-colors
//                 ${isActive ? 'text-white' : ''}
//               `}
//             >
//               <Icon size={24} className={isActive ? 'text-white' : ''} />
//               <span className="text-[10px] mt-0.5 font-medium">
//                 {item.label}
//               </span>
//             </a>
//           );
//         })}
//       </nav>
//     </>
//   );
// }

import React from 'react';
import { 
  Home, 
  Flame, 
  Video 
} from 'lucide-react';

const navItems = [
  { icon: Home,  label: 'Home',         path: '/',            active: true },
  { icon: Flame, label: 'Shorts',       path: '/shorts' },
  { icon: Video, label: 'Subscriptions', path: '/subscriptions' },
];

export default function Navigation({ isOpen, setIsOpen }) {
  // isOpen & setIsOpen → only used on desktop/tablet (optional hamburger toggle)

  return (
    <>
      {/* DESKTOP / TABLET SIDEBAR (hidden below md) */}
      <aside
        className={`
          hidden md:block fixed top-14 left-0 z-40
          h-[calc(100vh-3.5rem)] 
          bg-[#0f0f0f] border-r border-gray-800
          transition-all duration-300 ease-in-out
          overflow-y-auto scrollbar-none
          -ms-overflow-style-none [scrollbar-width:none]
          ${isOpen ? 'w-60' : 'w-16 hover:w-60 group'}
        `}
      >
        <style jsx>{`
          aside::-webkit-scrollbar { display: none; }
        `}</style>

        <div className="py-3 flex flex-col">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active;

            return (
              <a
                key={item.path}
                href={item.path || '#'}
                className={`
                  group/item relative flex items-center gap-5
                  px-5 py-3.5 text-sm font-medium
                  transition-all duration-200
                  hover:bg-[#272727] active:bg-[#3a3a3a]
                  ${isActive ? 'bg-[#272727] text-white' : 'text-gray-300'}
                `}
              >
                <Icon
                  size={22}
                  className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-300 group-hover/item:text-white'}`}
                />
                <span
                  className={`
                    transition-opacity duration-200
                    ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                >
                  {item.label}
                </span>

                {/* Active indicator line */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                )}
              </a>
            );
          })}
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV (visible below md) */}
      <nav
        className={`
          md:hidden fixed bottom-0 left-0 right-0 z-50
          bg-[#0f0f0f]/95 backdrop-blur-md border-t border-gray-800
          flex items-center justify-around
          h-16 safe-area-inset-bottom pb-safe
          shadow-[0_-4px_10px_rgba(0,0,0,0.4)]
        `}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.active;

          return (
            <a
              key={item.path}
              href={item.path || '#'}
              className={`
                flex flex-col items-center justify-center
                flex-1 py-2 px-3 touch-manipulation
                transition-all duration-200 active:scale-95
                ${isActive ? 'text-white' : 'text-gray-400'}
              `}
            >
              <div className="relative">
                <Icon size={26} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-white rounded-full" />
                )}
              </div>
              <span className="text-[10px] mt-1 font-medium tracking-tight">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}