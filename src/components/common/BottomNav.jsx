// src/common/BottomNav.jsx
import { Home, Flame, Plus, ListVideo, User, MonitorSpeakerIcon } from 'lucide-react';

const bottomItems = [
  { icon: Home, label: 'Home', path: '/', active: true },
  { icon: Flame, label: 'Shorts', path: '/shorts' },
  { icon: Plus, label: '', path: '/uploadvideo', isCenter: true }, // special center button
  { icon: MonitorSpeakerIcon, label: 'Earn More', path: '/' },
  { icon: User, label: 'You', path: '/profile' },
];

export default function BottomNav() {
  return (
    <nav
      className={`
        md:hidden fixed bottom-0 inset-x-0 z-50
        bg-[#0f0f0f]/90 backdrop-blur-xl border-t border-gray-800/80
        flex items-center justify-around h-16 pb-safe
        shadow-[0_-4px_12px_rgba(0,0,0,0.4)]
      `}
    >
      {bottomItems.map((item, index) => {
        const isCenter = item.isCenter;
        const isActive = item.active && !isCenter;

        if (isCenter) {
          return (
            <a
              key={item.path}
              href={item.path}
              className={`
                relative -top-5 flex items-center justify-center
                w-14 h-14 rounded-full bg-red-600 text-white
                shadow-[0_6px_20px_rgba(220,38,38,0.4)]
                active:scale-95 transition-all
              `}
            >
              <item.icon size={28} strokeWidth={2.5} />
              {/* optional small ripple or shine effect */}
            </a>
          );
        }

        return (
          <a
            key={item.path}
            href={item.path}
            className={`
              relative flex flex-col items-center flex-1 py-1.5
              text-gray-400 hover:text-white transition-colors duration-150
              active:scale-95
              ${isActive ? 'text-white' : ''}
            `}
          >
            <item.icon
              size={26}
              strokeWidth={isActive ? 2.8 : 1.8}
              className="mb-0.5"
            />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">
              {item.label}
            </span>

            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-white rounded-full" />
            )}
          </a>
        );
      })}
    </nav>
  );
}