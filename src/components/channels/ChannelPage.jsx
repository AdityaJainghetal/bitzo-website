

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MoreHorizontal,
  Search,
  Edit,
  Video as VideoIcon,
  ChevronDown,
  Plus,
} from "lucide-react";

// API base URLs
const API_BASE = "http://localhost:8000/api";
const API_CATEGORY = "http://localhost:8000/api/category";

// Helper to get userId from localStorage
const getUserId = () => localStorage.getItem("userId") || null;

export default function ChannelPage() {
  const { handle: urlHandle } = useParams();
  const navigate = useNavigate();

  const [channels, setChannels] = useState({});
  const [selectedHandle, setSelectedHandle] = useState(urlHandle || "");
  const [channel, setChannel] = useState(null);
  const [activeTab, setActiveTab] = useState("Videos");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newChannel, setNewChannel] = useState({
    name: "",
    channelDescription: "",
    category: "",
    channelImageFile: null,
    channelImagePreview: "",
    channelBannerFile: null,
    channelBannerPreview: "",
    contactemail: "",
    allowContact: false,
  });
  const [createError, setCreateError] = useState("");

  // Upload video modal states
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedUploadChannel, setSelectedUploadChannel] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [videoname, setVideoname] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [enableComments, setEnableComments] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [uploadError, setUploadError] = useState("");

  // Fetch categories once on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(API_CATEGORY);
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch user's channels
  useEffect(() => {
    const fetchUserChannels = async () => {
      const userId = getUserId();
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/uservideo/channel`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch channels");

        const data = await res.json();
        const channelsList = data.channels || [];

        const channelsMap = {};
        channelsList.forEach((ch) => {
          const handleClean = ch.name?.replace(/\s+/g, "") || ch._id;
          channelsMap[handleClean] = {
            ...ch,
            handle: `@${handleClean}`,
            isOwnChannel: true,
            avatar:
              ch.channelImage ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
            banner:
              ch.channelBanner ||
              "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
            name: ch.name || "Unnamed Channel",
            subscribers: 0,
            videosCount: 0,
            videos: [],
            description: ch.channeldescription || "More about this channel...",
            categoryId: ch.category,
          };
        });

        setChannels(channelsMap);

        let initialHandle = urlHandle;
        if (!initialHandle && Object.keys(channelsMap).length > 0) {
          initialHandle = Object.keys(channelsMap)[0];
        }

        if (initialHandle) {
          setSelectedHandle(initialHandle);
        }
      } catch (err) {
        console.error("Error fetching channels:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserChannels();
  }, [urlHandle]);

  // Fetch selected channel details
  useEffect(() => {
    if (!selectedHandle) return;

    const fetchSingleChannel = async () => {
      const cleanHandle = selectedHandle.replace("@", "");

      if (channels[cleanHandle]) {
        setChannel(channels[cleanHandle]);
        navigate(`/channel/${cleanHandle}`, { replace: true });
        return;
      }

      // If not in local state, fetch again (fallback)
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE}/uservideo/channel`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Channel not found");

        const data = await res.json();
        const formatted = {
          ...data,
          handle: `@${cleanHandle}`,
          isOwnChannel: true,
          avatar:
            data.channelImage ||
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
          banner:
            data.channelBanner ||
            "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
          name: data.name || "Channel Name",
          subscribers: data.subscribers || 0,
          videosCount: data.videos?.length || 0,
          videos: data.videos || [],
          description: data.channeldescription || "More about this channel...",
          categoryId: data.category,
        };

        setChannel(formatted);
        setChannels((prev) => ({ ...prev, [cleanHandle]: formatted }));
      } catch (err) {
        console.error("Error fetching single channel:", err);
        const firstKey = Object.keys(channels)[0];
        if (firstKey) {
          setSelectedHandle(firstKey);
        }
      }
    };

    fetchSingleChannel();
  }, [selectedHandle, channels, navigate]);

  const handleChannelChange = (newHandle) => {
    setSelectedHandle(newHandle);
    navigate(`/channel/${newHandle.replace("@", "")}`);
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setNewChannel((prev) => ({
        ...prev,
        [`${field}File`]: file,
        [`${field}Preview`]: previewUrl,
      }));
    }
  };

  const handleCreateChannel = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setCreateError("Please login first.");
      return;
    }

    if (!newChannel.name.trim()) {
      setCreateError("Channel name is required");
      return;
    }

    if (!newChannel.category) {
      setCreateError("Please select a category");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newChannel.name.trim());
      formData.append("channeldescription", newChannel.channelDescription || "");
      formData.append("category", newChannel.category);
      formData.append("contactemail", newChannel.contactemail || "");

      if (newChannel.channelImageFile) {
        formData.append("channelImage", newChannel.channelImageFile);
      }
      if (newChannel.channelBannerFile) {
        formData.append("channelBanner", newChannel.channelBannerFile);
      }

      const response = await fetch(`${API_BASE}/uservideo/createchannel`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create channel");
      }

      const createdChannel = result.channel;
      const handleClean = createdChannel.name?.replace(/\s+/g, "") || createdChannel._id;

      setChannels((prev) => ({
        ...prev,
        [handleClean]: {
          ...createdChannel,
          handle: `@${handleClean}`,
          isOwnChannel: true,
          avatar: createdChannel.channelImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
          banner: createdChannel.channelBanner || "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
          name: createdChannel.name,
          description: createdChannel.channeldescription || "",
          categoryId: createdChannel.category?._id || createdChannel.category,
        },
      }));

      setSelectedHandle(handleClean);
      setShowCreateModal(false);
      setNewChannel({
        name: "",
        channelDescription: "",
        category: "",
        channelImageFile: null,
        channelImagePreview: "",
        channelBannerFile: null,
        channelBannerPreview: "",
        contactemail: "",
        allowContact: false,
      });

      alert("Channel created successfully!");
    } catch (error) {
      console.error("Channel creation error:", error);
      setCreateError(error.message || "Failed to create channel.");
    }
  };

  const handleUploadVideo = (e) => {
    e.preventDefault();
    // Here you would implement actual video upload logic to backend
    console.log("Uploading video to channel:", selectedUploadChannel);
    console.log("name:", videoname);
    console.log("File:", videoFile?.name);

    // Reset form
    setShowUploadModal(false);
    setVideoFile(null);
    setVideoPreview("");
    setThumbnailFile(null);
    setThumbnailPreview("");
    setVideoname("");
    setVideoDescription("");
    setEnableComments(true);
    setAgreeTerms(false);
  };

  if (loading) {
    return <div className="text-center py-20 text-gray-400">Loading channels...</div>;
  }

  if (!channel && Object.keys(channels).length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        No channels found. Create one to get started.
      </div>
    );
  }

  if (!channel) {
    return <div className="text-center py-20 text-gray-400">Channel not found</div>;
  }

  const tabs = ["Videos", "Playlists", "Posts"];

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
            <img
              src={channel.avatar}
              alt="Channel avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 pb-4">
            <div className="flex flex-wrap gap-4 mt-5">
              {channel.isOwnChannel ? (
                <>
                  <button
                    onClick={() => navigate("/channel/customize")}
                    className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition"
                  >
                    <Edit size={18} />
                    Customize channel
                  </button>
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="px-6 py-2.5 bg-green-600 hover:bg-green-700 rounded-full flex items-center gap-2 transition"
                  >
                    <VideoIcon size={18} />
                    Upload video
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
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-24 mt-6">
          <h1 className="text-3xl md:text-5xl font-bold">{channel.name}</h1>
          <p className="text-gray-400 mt-2 text-lg">
            {channel.handle} • {channel.subscribers} subscribers •{" "}
            {channel.category?.name || "Uncategorized"}
          </p>
          <p className="text-gray-400 mt-2 max-w-2xl">{channel.description}</p>
        </div>
      </div>

      {/* Tabs + Channel Switcher */}
      <div className="px-6 md:px-12 lg:px-24 mt-10 border-b border-gray-700">
        <div className="flex gap-10 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-medium text-base whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="pb-4 px-2 text-gray-400 hover:text-gray-200">
            <Search size={22} />
          </button>
        </div>

        {Object.keys(channels).length > 0 && (
          <div className="mt-6">
            <label className="text-sm text-gray-400 block mb-1.5">Switch channel</label>
            <div className="relative inline-block w-full max-w-xs">
              <select
                value={selectedHandle}
                onChange={(e) => handleChannelChange(e.target.value)}
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white appearance-none pr-10 focus:outline-none focus:border-blue-500 text-sm"
              >
                {Object.keys(channels).map((key) => (
                  <option key={key} value={channels[key].handle}>
                    {channels[key].name} ({channels[key].handle})
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="px-6 md:px-12 lg:px-24 py-10">
        {activeTab === "Videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
            {channel.videos?.length > 0 ? (
              channel.videos.map((video) => (
                <div key={video._id || video.id} className="cursor-pointer group">
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded font-medium">
                      {video.duration || "??:??"}
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {video.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1.5">
                      {video.views?.toLocaleString() || 0} views • {video.uploaded || "recent"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-10 col-span-full">No videos yet</p>
            )}
          </div>
        )}

        {activeTab === "Playlists" && (
          <p className="text-center text-gray-400 py-20 text-lg">No playlists created yet</p>
        )}

        {activeTab === "Posts" && (
          <p className="text-center text-gray-400 py-20 text-lg">No community posts yet</p>
        )}
      </div>

      {/* Create Channel Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] rounded-xl w-full max-w-md p-5 relative">
            <h2 className="text-xl font-bold mb-4">Create a new channel</h2>

            {createError && (
              <div className="bg-red-500/20 text-red-400 p-2.5 rounded mb-4 text-sm">
                {createError}
              </div>
            )}

            <form onSubmit={handleCreateChannel} className="space-y-3.5">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Channel name *</label>
                <input
                  type="text"
                  value={newChannel.name}
                  onChange={(e) => setNewChannel({ ...newChannel, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="My Awesome Channel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Category *</label>
                <select
                  value={newChannel.category}
                  onChange={(e) => setNewChannel({ ...newChannel, category: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Channel Image (avatar)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "channelImage")}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                {newChannel.channelImagePreview && (
                  <img
                    src={newChannel.channelImagePreview}
                    alt="Avatar preview"
                    className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-600"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Channel Banner</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "channelBanner")}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                {newChannel.channelBannerPreview && (
                  <img
                    src={newChannel.channelBannerPreview}
                    alt="Banner preview"
                    className="mt-2 w-full h-24 object-cover rounded-lg border border-gray-600"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Description (optional)</label>
                <textarea
                  value={newChannel.channelDescription}
                  onChange={(e) =>
                    setNewChannel({ ...newChannel, channelDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-20 text-sm resize-none"
                  placeholder="Tell people about your channel..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Contact email (optional)</label>
                <input
                  type="email"
                  value={newChannel.contactemail}
                  onChange={(e) =>
                    setNewChannel({ ...newChannel, contactemail: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="example@email.com"
                />
                <div className="mt-2 flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="allowContact"
                    checked={newChannel.allowContact}
                    onChange={(e) =>
                      setNewChannel({ ...newChannel, allowContact: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="allowContact" className="text-xs text-gray-400">
                    Allow others to contact you for collaborations/business
                  </label>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm transition"
                >
                  Create channel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload Video Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] rounded-xl w-full max-w-md p-5 relative">
            <h2 className="text-xl font-bold mb-4">Upload Video</h2>

            {uploadError && (
              <div className="bg-red-500/20 text-red-400 p-2.5 rounded mb-4 text-sm">
                {uploadError}
              </div>
            )}

            <form onSubmit={handleUploadVideo} className="space-y-3.5">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Upload to channel *</label>
                <select
                  value={selectedUploadChannel}
                  onChange={(e) => setSelectedUploadChannel(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  required
                >
                  <option value="">Select channel</option>
                  {Object.keys(channels).map((key) => (
                    <option key={key} value={key}>
                      {channels[key].name} ({channels[key].handle})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Video file *</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setVideoFile(file);
                      setVideoPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                  required
                />
                {videoPreview && (
                  <div className="mt-2 text-xs text-gray-400">
                    Selected: {videoFile?.name}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Thumbnail (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setThumbnailFile(file);
                      setThumbnailPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="mt-2 w-full h-28 object-cover rounded-lg border border-gray-600"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">name *</label>
                <input
                  type="text"
                  value={videoname}
                  onChange={(e) => setVideoname(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="Enter video name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Description</label>
                <textarea
                  value={videoDescription}
                  onChange={(e) => setVideoDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-20 text-sm resize-none"
                  placeholder="Describe your video..."
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="enableComments"
                    checked={enableComments}
                    onChange={(e) => setEnableComments(e.target.checked)}
                    className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="enableComments" className="text-sm text-gray-300">
                    Enable comments
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-xs text-gray-400">
                    I agree to the Terms of Service and confirm I own/have rights to this content.
                  </label>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-full text-sm transition"
                  disabled={!agreeTerms}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}