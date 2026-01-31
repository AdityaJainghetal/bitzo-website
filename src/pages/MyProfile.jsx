import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Add this import

import {
  Eye,
  Clock,
  DollarSign,
  IndianRupee,
  History,
  Users,
  TrendingUp,
  Calendar,
  Edit,
  Mail,
  ArrowUpDown,
  X,
} from "lucide-react";

// Fake user + channel data
const initialUserData = {
  name: "Aditya Tech & Vlogs",
  handle: "@adityatechvlogs",
  email: "aditya.creator@gmail.com",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  joinDate: "March 15, 2024",
  level: 2,
  subscribers: 28740,
  totalVideos: 142,
  totalViews: 3849200,
  totalWatchHours: "18,420h",
  totalEarnings: 124850,
  earningsThisMonth: 14820,
  pendingWithdrawal: 0,
  avgRPM: 32.4,
};

// Earnings and Watch History (fake)
const earningsHistory = [
  {
    month: "January",
    earnings: initialUserData.earningsThisMonth,
    watchTime: "50h",
  },
  { month: "December", earnings: 12000, watchTime: "45h" },
  { month: "November", earnings: 15000, watchTime: "60h" },
];

// Same fake videos data as MyVideos page
const myVideos = [
  {
    id: "v1",
    title: "After 100th Attempt – Cute Cats Funny Moments",
    thumbnail:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
    views: 12496,
    avgWatchPercent: 68,
    earnings: 42.5,
    totalWatchTime: "18h 45m",
    status: "Public",
    uploadDate: "2025-12-15",
  },
  {
    id: "v2",
    title: "How I Made ₹50K in One Month – Side Hustle Tips",
    thumbnail:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400",
    views: 45800,
    avgWatchPercent: 42,
    earnings: 185.2,
    totalWatchTime: "3d 12h",
    status: "Limited",
    uploadDate: "2025-11-28",
  },
  {
    id: "v3",
    title: "Quick 5-Minute Breakfast Ideas for Busy People",
    thumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    views: 9200,
    avgWatchPercent: 55,
    earnings: 18.9,
    totalWatchTime: "6h 20m",
    status: "Public",
    uploadDate: "2026-01-10",
  },
];

const historyVideos = [
  // Could add watch history videos here
  {
    id: "v2",
    title: "How I Made ₹50K in One Month – Side Hustle Tips",
    thumbnail:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400",
    views: 45800,
    avgWatchPercent: 42,
    earnings: 185.2,
    totalWatchTime: "3d 12h",
    status: "Limited",
    uploadDate: "2025-11-28",
  },
  {
    id: "v3",
    title: "Quick 5-Minute Breakfast Ideas for Busy People",
    thumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    views: 9200,
    avgWatchPercent: 55,
    earnings: 18.9,
    totalWatchTime: "6h 20m",
    status: "Public",
    uploadDate: "2026-01-10",
  },
];

export default function Profile() {
  const navigate = useNavigate(); // ← Add this hook

  const [activeTab, setActiveTab] = useState("my-videos");
  const [sortBy, setSortBy] = useState("latest");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [user, setUser] = useState(initialUserData);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: initialUserData.name,
    email: initialUserData.email,
    avatar: initialUserData.avatar,
    handle: initialUserData.handle,
  });

  const openEdit = () => {
    setEditForm({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      handle: user.handle,
    });
    setIsEditOpen(true);
  };

  // Sorting logic (same as MyVideos)
  const sortedVideos = [...myVideos].sort((a, b) => {
    if (sortBy === "latest")
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    if (sortBy === "views") return b.views - a.views;
    if (sortBy === "earnings") return b.earnings - a.earnings;
    return 0;
  });

  const handleSortChange = (e) => setSortBy(e.target.value);
  const openDetail = (video) => setSelectedVideo(video);
  const closeDetail = () => setSelectedVideo(null);

  const getStatusBadge = (status) => {
    const isActive = status.toLowerCase() === "public";
    return (
      <span
        className={`
          inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
          ${isActive ? "bg-green-900/40 text-green-400 border border-green-800/50" : "bg-red-900/40 text-red-400 border border-red-800/50"}
        `}
      >
        {isActive ? "Active" : "Deactive"}
      </span>
    );
  };

  const tabs = [
    { id: "my-videos", label: "My Videos", icon: Eye },
    { id: "earnings", label: "Earnings", icon: IndianRupee },
    { id: "watch-history", label: "Watch History", icon: History },
  ];

  const getTabContent = () => {
    if (activeTab === "earnings") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Earnings</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-xs text-zinc-400">This Month</p>
              <p className="text-2xl font-bold">
                ₹{user.earningsThisMonth.toLocaleString()}
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-xs text-zinc-400">Total Earnings</p>
              <p className="text-2xl font-bold">
                ₹{user.totalEarnings.toLocaleString()}
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-xs text-zinc-400">Pending Withdrawal</p>
              <p className="text-2xl font-bold">
                ₹{user.pendingWithdrawal.toLocaleString()}
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-xs text-zinc-400">Avg. RPM</p>
              <p className="text-2xl font-bold">₹{user.avgRPM}</p>
            </div>
          </div>

          <div className="space-y-3 max-h-[40vh] overflow-y-auto scrollbar-hide">
            {earningsHistory.map((item) => (
              <div
                key={item.month}
                className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{item.month}</p>
                  <p className="text-sm text-zinc-400">
                    {item.watchTime} watch time
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    ₹{item.earnings.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "watch-history") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Watch History</h3>
          </div>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
            {historyVideos.length === 0 ? (
              <div className="text-center py-20 text-zinc-500">
                <p className="text-xl">No watch history</p>
                <p className="mt-3 text-sm">
                  Your watched videos will appear here
                </p>
              </div>
            ) : (
              historyVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => openDetail(video)}
                  className="
                    bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden
                    hover:border-zinc-700 transition-all duration-200 shadow-sm
                    cursor-pointer active:scale-[0.995]
                  "
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-36 h-52 sm:h-24 flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:opacity-0 sm:hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex-1 p-4 flex flex-col">
                      <h3 className="font-medium text-base leading-tight line-clamp-2 mb-3">
                        {video.title}
                      </h3>

                      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-400 mb-4">
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-1.5">
                            <Eye size={15} />
                            <span>{video.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={15} />
                            <span>{video.avgWatchPercent}%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium text-red-500">
                          <DollarSign size={15} />
                          <span>₹{video.earnings.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 mt-auto">
                        {getStatusBadge(video.status)}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openDetail(video);
                          }}
                          className="
                            px-5 py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800
                            text-white text-sm font-medium rounded-lg transition-colors
                            shadow-sm shadow-red-900/30
                          "
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      );
    }

    if (activeTab !== "my-videos") {
      return (
        <div className="text-center py-20 text-zinc-500">
          <p className="text-xl">Coming soon...</p>
          <p className="mt-3 text-sm">
            {activeTab.replace("-", " ")} section under development
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Videos</h3>
          <div className="flex items-center gap-2.5">
            <ArrowUpDown size={16} className="text-zinc-500" />
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="
                bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm
                text-zinc-200 focus:outline-none focus:border-red-600 focus:ring-1
                focus:ring-red-600/30 transition-all appearance-none
              "
            >
              <option value="latest">Latest</option>
              <option value="views">Highest Views</option>
              <option value="earnings">Highest Earnings</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
          {sortedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => openDetail(video)}
              className="
                bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden
                hover:border-zinc-700 transition-all duration-200 shadow-sm
                cursor-pointer active:scale-[0.995]
              "
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-36 h-52 sm:h-24 flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:opacity-0 sm:hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="font-medium text-base leading-tight line-clamp-2 mb-3">
                    {video.title}
                  </h3>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-400 mb-4">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <Eye size={15} />
                        <span>{video.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={15} />
                        <span>{video.avgWatchPercent}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-red-500">
                      <DollarSign size={15} />
                      <span>₹{video.earnings.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 mt-auto">
                    {getStatusBadge(video.status)}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDetail(video);
                      }}
                      className="
                        px-5 py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800
                        text-white text-sm font-medium rounded-lg transition-colors
                        shadow-sm shadow-red-900/30
                      "
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-20 scrollbar-hide">
      {/* Profile Header */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-zinc-700 shadow-lg"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
                <p className="text-zinc-400 mt-1">{user.handle}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Users size={16} />
                    <span>{user.subscribers.toLocaleString()} subscribers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>Joined {user.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Level {user.level} Creator</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 text-sm">
                  <Mail size={15} className="text-zinc-500" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-6 sm:mt-0">
              <button
                onClick={() => navigate("/withdraw")} // ← Navigation added here
                className="
                  flex items-center justify-center gap-2 px-6 py-2.5 bg-red-600 
                  hover:bg-red-700 active:bg-red-800 text-white font-medium 
                  rounded-lg transition-colors shadow-sm shadow-red-900/40 min-w-[180px]
                "
              >
                <IndianRupee size={18} />
                Withdraw ₹{user.totalEarnings.toLocaleString()}
              </button>

              <button
                onClick={openEdit}
                className="
                  flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-800 
                  hover:bg-zinc-700 active:bg-zinc-600 text-zinc-200 font-medium 
                  rounded-lg border border-zinc-700 transition-colors min-w-[140px]
                "
              >
                <Edit size={16} />
                My Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <Eye size={24} className="mx-auto mb-3 text-blue-500" />
            <p className="text-2xl font-bold">
              {user.totalViews.toLocaleString()}
            </p>
            <p className="text-xs text-zinc-500 mt-1">Total Views</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <Clock size={24} className="mx-auto mb-3 text-emerald-500" />
            <p className="text-2xl font-bold">{user.totalWatchHours}</p>
            <p className="text-xs text-zinc-500 mt-1">Watch Hours</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <DollarSign size={24} className="mx-auto mb-3 text-red-500" />
            <p className="text-2xl font-bold">
              ₹{user.totalEarnings.toLocaleString()}
            </p>
            <p className="text-xs text-zinc-500 mt-1">Total Earnings</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
            <TrendingUp size={24} className="mx-auto mb-3 text-purple-500" />
            <p className="text-2xl font-bold">₹{user.avgRPM}</p>
            <p className="text-xs text-zinc-500 mt-1">Avg. RPM</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-zinc-800">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 pb-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap
                    ${isActive ? "bg-zinc-800 text-red-400 border-b-2 border-red-600 shadow-sm" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"}
                  `}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 min-h-[500px]">
          {getTabContent()}
        </div>
      </div>

      {/* Video Detail Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 scrollbar-hide">
          <div className="bg-zinc-900 rounded-2xl max-w-lg w-full border border-zinc-800 shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-zinc-800">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <button
                onClick={() => setIsEditOpen(false)}
                className="p-2.5 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <label className="block text-sm">
                <span className="text-xs text-zinc-400">Name</span>
                <input
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
                />
              </label>

              <label className="block text-sm">
                <span className="text-xs text-zinc-400">Handle</span>
                <input
                  value={editForm.handle}
                  onChange={(e) =>
                    setEditForm({ ...editForm, handle: e.target.value })
                  }
                  className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
                />
              </label>

              <label className="block text-sm">
                <span className="text-xs text-zinc-400">Email</span>
                <input
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({ ...editForm, email: e.target.value })
                  }
                  className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
                />
              </label>

              <label className="block text-sm">
                <span className="text-xs text-zinc-400">Avatar URL</span>
                <input
                  value={editForm.avatar}
                  onChange={(e) =>
                    setEditForm({ ...editForm, avatar: e.target.value })
                  }
                  className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
                />
              </label>

              <div className="flex justify-end gap-3 mt-3">
                <button
                  onClick={() => setIsEditOpen(false)}
                  className="px-4 py-2 bg-zinc-800 rounded-lg text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setUser({ ...user, ...editForm });
                    setIsEditOpen(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 scrollbar-hide">
          <div
            className="
              bg-zinc-900 rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto
              border border-zinc-800 shadow-2xl shadow-black/60 scrollbar-hide
            "
          >
            <div className="sticky top-0 bg-zinc-950/90 backdrop-blur-md z-10 px-6 pt-5 pb-3 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Video Details</h2>
              <button
                onClick={closeDetail}
                className="p-2.5 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6 space-y-7">
              <div>
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-56 object-cover rounded-xl border border-zinc-800 shadow-md"
                />
                <h3 className="mt-5 text-2xl font-semibold leading-tight">
                  {selectedVideo.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Uploaded:{" "}
                  {new Date(selectedVideo.uploadDate).toLocaleDateString(
                    "en-IN",
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Eye,
                    color: "blue",
                    label: "Total Views",
                    value: selectedVideo.views.toLocaleString(),
                  },
                  {
                    icon: Clock,
                    color: "purple",
                    label: "Avg. Watch %",
                    value: `${selectedVideo.avgWatchPercent}%`,
                  },
                  {
                    icon: Clock,
                    color: "emerald",
                    label: "Total Watch Time",
                    value: selectedVideo.totalWatchTime,
                  },
                  {
                    icon: DollarSign,
                    color: "red",
                    label: "Total Earnings",
                    value: `₹${selectedVideo.earnings.toFixed(2)}`,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-950/60 p-5 rounded-xl text-center border border-zinc-800 shadow-sm shadow-black/30"
                  >
                    <item.icon
                      size={28}
                      className={`mx-auto mb-3 text-${item.color}-500`}
                    />
                    <p className={`text-2xl font-bold text-${item.color}-400`}>
                      {item.value}
                    </p>
                    <p className="text-sm text-zinc-500 mt-1.5">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400">
                    Status
                  </span>
                  {getStatusBadge(selectedVideo.status)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
