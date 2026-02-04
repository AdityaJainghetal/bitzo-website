import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  Mic,
  Plus,
  Bell,
  Star,
  User,
  Settings,
  LogOut,
  Wallet,
  History,
  Heart,
  Clock,
  Video,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  Crown,
  DollarSign,
  FileText,
  MessageCircle,
  PhoneCallIcon,
} from 'lucide-react';
import { useRewards } from '../../context/RewardContext';

export default function Navbar({ toggleSidebar }) {
  const { points } = useRewards();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null;
    } catch {
      return null;
    }
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsSettingsOpen(false);
  };

  // Sync auth state across tabs/windows
  useEffect(() => {
    const loadUser = () => {
      try {
        const u = JSON.parse(localStorage.getItem('user'));
        setUser(u);
        setIsLoggedIn(Boolean(localStorage.getItem('token')));
      } catch {
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    loadUser();
    window.addEventListener('auth-change', loadUser);
    window.addEventListener('storage', loadUser);

    return () => {
      window.removeEventListener('auth-change', loadUser);
      window.removeEventListener('storage', loadUser);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('auth-change'));
    setIsDropdownOpen(false);
    setIsSettingsOpen(false);
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-gray-800 h-14 flex items-center">
      <div className="flex items-center justify-between w-full px-4">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-[#272727] rounded-full transition-colors"
          >
            <Menu size={24} className="text-white" />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-red-600 text-3xl font-bold">Vidoo</span>

            <div className="hidden sm:flex items-center gap-1.5 bg-[#272727] px-3 py-1 rounded-full border border-yellow-600/30">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold text-sm">
                {points.toFixed(2)}
              </span>
              <span className="text-gray-400 text-xs">pts</span>
            </div>
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#121212] border border-gray-700 rounded-l-full py-2 px-5 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-[#222] px-6 rounded-r-full border border-gray-700 border-l-0 hover:bg-[#333] transition-colors">
              <Search size={20} className="text-gray-300" />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
            <Mic size={22} className="text-white" />
          </button>

       <Link
  to="/uploadvideo"
  className="p-2 hover:bg-[#272727] rounded-full transition-colors flex items-center justify-center"
>
  <Plus size={22} className="text-white" />
</Link>

          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
            <Bell size={22} className="text-white" />
          </button>

          {/* Profile dropdown – Enhanced */}
          <div className="relative" ref={dropdownRef}>
            {isLoggedIn ? (
              <button
                onClick={toggleDropdown}
                className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:ring-2 hover:ring-blue-400 transition-all"
              >
                <span className="text-white text-sm font-semibold">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                </span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition"
              >
                Sign in
              </button>
            )}

            {isLoggedIn && isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-[#0f0f0f] border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50 text-white">
                {/* Enhanced User Header */}
                <div className="px-5 py-5 border-b border-gray-800 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-2xl font-bold">
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold">{user?.name || 'Aditya Jain ghetal'}</p>
                      <p className="text-sm text-gray-400 mt-0.5">
                        @{user?.username || 'adityajainghetal3503'}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-yellow-400">
                        <Star size={14} className="fill-yellow-400" />
                        <span>{points.toFixed(0)} pts</span>
                      </div>
                      <button
                        onClick={() => {
                          navigate(`/channel/${user?.username || 'adityajainghetal3503'}`);
                          setIsDropdownOpen(false);
                        }}
                        className="mt-3 w-full py-2 bg-[#272727] hover:bg-[#3a3a3a] rounded text-sm font-medium transition-colors"
                      >
                        View your channel
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Navigation Items */}
                <div className="py-1">
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition"
                  >
                    <User size={20} className="text-gray-300" />
                    <span>Your channel</span>
                  </button>

                  <button
                    onClick={() => {
                      navigate('/studio'); // or '/creator-dashboard'
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition"
                  >
                    <Video size={20} className="text-gray-300" />
                    <span>Vidoo Studio</span>
                  </button>

                  {/* Settings Sub-menu – Original */}
                  <div className="relative">
                    <button
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                      className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center justify-between transition"
                    >
                      <div className="flex items-center gap-4">
                        <Settings size={20} className="text-gray-300" />
                        <span>Settings</span>
                      </div>
                      {isSettingsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>

                    {isSettingsOpen && (
                      <div className="bg-[#1a1a1a] border-t border-b border-gray-800 py-1">
                        <button
                          onClick={() => {
                            navigate('/history');
                            setIsDropdownOpen(false);
                            setIsSettingsOpen(false);
                          }}
                          className="w-full px-9 py-2.5 text-left hover:bg-[#272727] flex items-center gap-4 text-sm transition"
                        >
                          <History size={18} />
                          <span>History</span>
                        </button>
                        <button
                          onClick={() => {
                            navigate('/liked-videos');
                            setIsDropdownOpen(false);
                            setIsSettingsOpen(false);
                          }}
                          className="w-full px-9 py-2.5 text-left hover:bg-[#272727] flex items-center gap-4 text-sm transition"
                        >
                          <Heart size={18} />
                          <span>Liked Videos</span>
                        </button>
                        <button
                          onClick={() => {
                            navigate('/watch-later');
                            setIsDropdownOpen(false);
                            setIsSettingsOpen(false);
                          }}
                          className="w-full px-9 py-2.5 text-left hover:bg-[#272727] flex items-center gap-4 text-sm transition"
                        >
                          <Clock size={18} />
                          <span>Watch Later</span>
                        </button>
                        <button
                          onClick={() => {
                            navigate('/your-videos');
                            setIsDropdownOpen(false);
                            setIsSettingsOpen(false);
                          }}
                          className="w-full px-9 py-2.5 text-left hover:bg-[#272727] flex items-center gap-4 text-sm transition"
                        >
                          <Video size={18} />
                          <span>Your Videos</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/withdraw"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsSettingsOpen(false);
                    }}
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition border-t border-gray-800 mt-1"
                  >
                    <Wallet size={20} className="text-gray-300" />
                    <span>Withdraw Rewards</span>
                  </Link>
                </div>

                {/* Premium / Purchases Section */}
                   <button
                   
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition"
                  >
                    <HelpCircle size={20} className="text-gray-300" />
                    <span>FAQ</span>
                  </button>


                       <button
                   
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition"
                  >
                    <MessageCircle size={20} className="text-gray-300" />
                    <span>Feedback</span>
                  </button>


                    <button
                   
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition"
                  >
                    <PhoneCallIcon size={20} className="text-gray-300" />
                    <span>Customer Support</span>
                  </button>

                  

                  

                        <button
                    
                    className="w-full px-5 py-3 text-left hover:bg-[#272727] flex items-center gap-4 transition"
                  >
                    <FileText size={20} className="text-gray-300" />
                    <span>Terms and Conditions</span>
                  </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}