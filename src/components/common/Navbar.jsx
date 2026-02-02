

// src/common/Navbar.jsx
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
} from 'lucide-react';
import { useRewards } from '../../context/RewardContext';

export default function Navbar({ toggleSidebar }) {
  const { points } = useRewards();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Auth state (read from localStorage token)
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null;
    } catch {
      return null;
    }
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Sync user state from localStorage and listen to auth changes
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

    // initial load
    loadUser();

    // listen to custom auth events and cross-window storage events
    window.addEventListener('auth-change', loadUser);
    window.addEventListener('storage', loadUser);

    return () => {
      window.removeEventListener('auth-change', loadUser);
      window.removeEventListener('storage', loadUser);
    };
  }, []);

  // Sign out handler → clear storage and redirect to /login
  const handleSignOut = () => {
    // Clear auth from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setUser(null);
    setIsLoggedIn(false);

    // notify other listeners
    window.dispatchEvent(new Event('auth-change'));

    setIsDropdownOpen(false);
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-gray-800 h-14 flex items-center">
      <div className="flex items-center justify-between w-full px-4">
        {/* Left: Hamburger + Logo + Points */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-[#272727] rounded-full transition-colors"
          >
            <Menu size={24} className="text-white" />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-red-600 text-3xl font-bold">Bitzo</span>

            {/* Points display */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#272727] px-3 py-1 rounded-full border border-yellow-600/30">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold text-sm">
                {points.toFixed(2)}
              </span>
              <span className="text-gray-400 text-xs">pts</span>
            </div>
          </div>
        </div>

        {/* Center: Search bar */}
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

        {/* Right: Icons + Profile */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
            <Mic size={22} className="text-white" />
          </button>

          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors">
            <Plus size={22} className="text-white" />
          </button>

          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden sm:block">
            <Bell size={22} className="text-white" />
          </button>

          {/* Profile / Dropdown */}
          <div className="relative" ref={dropdownRef}>
            {isLoggedIn ? (
              <button
                onClick={toggleDropdown}
                className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:ring-2 hover:ring-blue-400 transition-all"
              >
                <span className="text-white text-sm font-semibold">{user?.name ? user.name.charAt(0).toUpperCase() : 'A'}</span>
              </button>
            ) : (
              <button onClick={() => navigate('/login')} className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition">
                Sign in
              </button>
            )}

            {/* Dropdown Menu */}
            {isLoggedIn && isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-[#1f1f1f] border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50">
                {/* Profile header */}
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="font-medium text-white">{user?.name || 'Aditya'}</p>
                  <p className="text-sm text-gray-400">{user?.email || 'aditya@example.com'}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-400">Role: {user?.role || 'creator'}</p>
                    <p className="text-xs text-yellow-400">★ {points.toFixed(2)} pts</p>
                  </div>
                </div>

                {/* Menu items */}
                <div className="py-2">
                  <button className="w-full px-4 py-2.5 text-left hover:bg-[#272727] flex items-center gap-3 transition text-white">
                    <User size={18} />
                    <span>Your channel</span>
                  </button>

                  <button className="w-full px-4 py-2.5 text-left hover:bg-[#272727] flex items-center gap-3 transition text-white">
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>

                  <Link
                    to="/withdraw"
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full px-4 py-2.5 text-left hover:bg-[#272727] flex items-center gap-3 transition text-white"
                  >
                    <Wallet size={18} />
                    <span>Withdraw Rewards</span>
                  </Link>
                </div>

                {/* Sign out */}
                <div className="border-t border-gray-700">
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2.5 text-left hover:bg-[#272727] flex items-center gap-3 text-red-400 transition"
                  >
                    <LogOut size={18} />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}