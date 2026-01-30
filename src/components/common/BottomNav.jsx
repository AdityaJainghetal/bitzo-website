// src/common/BottomNav.jsx
import { Home, Flame, Video } from 'lucide-react';

const bottomItems = [
  { icon: Home, label: 'Home', path: '/', active: true },
  { icon: Flame, label: 'Shorts', path: '/shorts' },
  { icon: Video, label: 'Subscriptions', path: '/subscriptions' },
  // add more: +, Library, You (profile), etc.
];

export default function BottomNav() {
  return (
    <nav
      className={`
        md:hidden fixed bottom-0 inset-x-0 z-50
        bg-[#0f0f0f]/95 backdrop-blur-md border-t border-gray-800
        flex items-center justify-around h-16 pb-safe
        shadow-[0_-3px_10px_rgba(0,0,0,0.35)]
      `}
    >
      {bottomItems.map(item => (
        <a
          key={item.path}
          href={item.path}
          className={`
            flex flex-col items-center flex-1 py-1.5
            text-gray-400 hover:text-white transition-colors
            active:scale-95
            ${item.active ? 'text-white' : ''}
          `}
        >
          <item.icon
            size={26}
            strokeWidth={item.active ? 2.8 : 2}
            className="mb-0.5"
          />
          <span className="text-[10px] font-medium tracking-tight">
            {item.label}
          </span>

          {item.active && (
            <span className="absolute -bottom-1 w-5 h-0.5 bg-white rounded-full" />
          )}
        </a>
      ))}
    </nav>
  );
}