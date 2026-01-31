

// src/layouts/MainLayout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';      // ← your desktop sidebar
import BottomNav from '../common/BottomNav'; // ← create this next (see below)

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // default open on desktop

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white font-sans">
      {/* Fixed Navbar / Header */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Desktop/Tablet Sidebar – hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar isOpen={sidebarOpen} />
      </div>

      {/* Main content area – responsive left margin */}
      <main
        className={`
          pt-14 transition-all duration-300 ease-in-out
          md:pl-16 lg:pl-[15rem]          /* collapsed sidebar → 4rem (16), open → 15rem (60*0.25rem) */
          ${sidebarOpen ? 'md:pl-[15rem]' : 'md:pl-16'}
        `}
      >
        <Outlet />
      </main>

      {/* Mobile-only Bottom Navigation */}
      <BottomNav />  {/* ← we'll define this component */}
    </div>
  );
}