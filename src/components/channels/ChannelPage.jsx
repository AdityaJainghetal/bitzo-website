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

// Initial mock channels data
const initialMockChannels = {
  adityajainghetal3503: {
    name: "Aditiya Jain ghetal",
    handle: "@adityajainghetal3503",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=400&fit=crop",
    subscribers: 3,
    videosCount: 4,
    description: "More about this channel ...more",
    isOwnChannel: true,
    videos: [
      {
        id: 1,
        title: "Task management system demo",
        thumbnail: "https://picsum.photos/seed/task1/640/360",
        duration: "3:32",
        views: 4,
        uploaded: "1 month ago",
      },
      {
        id: 2,
        title: "Morning routine in Bhopal",
        thumbnail: "https://picsum.photos/seed/morning2/640/360",
        duration: "8:14",
        views: 47,
        uploaded: "2 weeks ago",
      },
      {
        id: 3,
        title: "React project setup 2025",
        thumbnail: "https://picsum.photos/seed/react3/640/360",
        duration: "12:05",
        views: 128,
        uploaded: "3 days ago",
      },
      {
        id: 4,
        title: "Street food tour Madhya Pradesh",
        thumbnail: "https://picsum.photos/seed/food4/640/360",
        duration: "5:47",
        views: 312,
        uploaded: "2 months ago",
      },
    ],
  },
  techwithaditya: {
    name: "Tech With Aditya",
    handle: "@techwithaditya",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=400&fit=crop",
    subscribers: 1240,
    videosCount: 38,
    description: "Latest tech reviews & tutorials",
    isOwnChannel: false,
    videos: [
      {
        id: 1,
        title: "Best laptop under 60k in 2026",
        thumbnail: "https://picsum.photos/seed/laptop1/640/360",
        duration: "11:22",
        views: 8450,
        uploaded: "5 days ago",
      },
      {
        id: 2,
        title: "iPhone 17 Pro Max unboxing",
        thumbnail: "https://picsum.photos/seed/iphone2/640/360",
        duration: "9:58",
        views: 12400,
        uploaded: "1 week ago",
      },
    ],
  },
};

//crete api profoile fetch
const profileFetch = async () => {
  try {
    const response = await fetch(
      "https://bitzo-server-1.onrender.com/api/profile",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export default function ChannelPage() {
  const { handle: urlHandle } = useParams();
  const navigate = useNavigate();

  const [mockChannels, setMockChannels] = useState(initialMockChannels);
  const [selectedHandle, setSelectedHandle] = useState(urlHandle);
  const [channel, setChannel] = useState(null);
  const [activeTab, setActiveTab] = useState("Videos");

  // Create channel modal
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

  // Upload video modal
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedUploadChannel, setSelectedUploadChannel] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [enableComments, setEnableComments] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    const found = mockChannels[selectedHandle.replace("@", "")];
    setChannel(found || mockChannels["adityajainghetal3503"]);
  }, [selectedHandle, mockChannels]);

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

  const handleCreateChannel = (e) => {
    e.preventDefault();

    const cleanHandle = newChannel.name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9]/g, "");

    if (!newChannel.name.trim()) {
      setCreateError("Channel name is required");
      return;
    }
    if (!cleanHandle) {
      setCreateError("Valid handle could not be generated");
      return;
    }
    if (mockChannels[cleanHandle]) {
      setCreateError("This handle is already taken");
      return;
    }

    const newChannelData = {
      name: newChannel.name.trim(),
      handle: `@${cleanHandle}`,
      avatar:
        newChannel.channelImagePreview ||
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      banner:
        newChannel.channelBannerPreview ||
        "https://images.unsplash.com/photo-1557683311-973673baf926?w=1600&h=400&fit=crop",
      subscribers: 0,
      videosCount: 0,
      description:
        newChannel.channelDescription.trim() || "Welcome to my new channel!",
      category: newChannel.category.trim() || "General",
      contactEmail: newChannel.contactemail.trim() || "",
      allowContact: newChannel.allowContact,
      isOwnChannel: true,
      videos: [],
    };

    setMockChannels((prev) => ({ ...prev, [cleanHandle]: newChannelData }));

    setSelectedHandle(`@${cleanHandle}`);
    navigate(`/channel/${cleanHandle}`);

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
    setCreateError("");
    setShowCreateModal(false);
  };
  const handleUploadVideo = (e) => {
    e.preventDefault();

    const api =
      "https://bitzo-server-1.onrender.com/api/uservideo/createchannel";
    setShowUploadModal(false);
  };

  if (!channel)
    return (
      <div className="text-center py-20 text-gray-400">Loading channel...</div>
    );

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
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pb-4">
            <h1 className="text-3xl md:text-5xl font-bold">{channel.name}</h1>
            <p className="text-gray-400 mt-2 text-lg">
              {channel.handle} • {channel.subscribers.toLocaleString()}{" "}
              subscribers • {channel.videosCount} videos
            </p>
            <p className="text-gray-400 mt-2 max-w-2xl">
              {channel.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-5">
              {channel.isOwnChannel ? (
                <>
                  <button
                    onClick={() => navigate("/channel/customize")}
                    className="px-6 py-2.5 bg-[#272727] hover:bg-[#3a3a3a] rounded-full flex items-center gap-2 transition"
                  >
                    <Edit size={18} />
                    Customise channel
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

            {Object.keys(mockChannels).length > 0 && (
              <div className="mt-6">
                <label className="text-sm text-gray-400 block mb-1.5">
                  Switch channel
                </label>
                <div className="relative inline-block w-full max-w-xs">
                  <select
                    value={selectedHandle}
                    onChange={(e) => handleChannelChange(e.target.value)}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white appearance-none pr-10 focus:outline-none focus:border-blue-500 text-sm"
                  >
                    {Object.keys(mockChannels).map((key) => (
                      <option key={key} value={`@${key}`}>
                        {mockChannels[key].handle}
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
        </div>
      </div>

      {/* Tabs */}
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
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-24 py-10">
        {activeTab === "Videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
            {channel.videos.length > 0 ? (
              channel.videos.map((video) => (
                <div key={video.id} className="cursor-pointer group">
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-xs rounded font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1.5">
                      {video.views.toLocaleString()} views • {video.uploaded}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-10 col-span-full">
                No videos yet
              </p>
            )}
          </div>
        )}
        {activeTab === "Playlists" && (
          <p className="text-center text-gray-400 py-20 text-lg">
            No playlists created yet
          </p>
        )}
        {activeTab === "Posts" && (
          <p className="text-center text-gray-400 py-20 text-lg">
            No community posts yet
          </p>
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
                <label className="block text-sm text-gray-300 mb-1">
                  Channel name *
                </label>
                <input
                  type="text"
                  value={newChannel.name}
                  onChange={(e) =>
                    setNewChannel({ ...newChannel, name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="My Awesome Channel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Category
                </label>
                <select
                  value={newChannel.category}
                  onChange={(e) =>
                    setNewChannel({ ...newChannel, category: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">Select category</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Tech">Tech</option>
                  <option value="Education">Education</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Vlogs">Vlogs</option>
                  <option value="Music">Music</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Channel Image (avatar)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "channelImage")}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                {newChannel.channelImagePreview && (
                  <div className="mt-2">
                    <img
                      src={newChannel.channelImagePreview}
                      alt="Avatar preview"
                      className="w-20 h-20 rounded-full object-cover border border-gray-600"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Channel Banner
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "channelBanner")}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                {newChannel.channelBannerPreview && (
                  <div className="mt-2">
                    <img
                      src={newChannel.channelBannerPreview}
                      alt="Banner preview"
                      className="w-full h-24 object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Description (optional)
                </label>
                <textarea
                  value={newChannel.channelDescription}
                  onChange={(e) =>
                    setNewChannel({
                      ...newChannel,
                      channelDescription: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-20 text-sm resize-none"
                  placeholder="Tell people about your channel..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Contact email (optional)
                </label>
                <input
                  type="email"
                  value={newChannel.contactemail}
                  onChange={(e) =>
                    setNewChannel({
                      ...newChannel,
                      contactemail: e.target.value,
                    })
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
                      setNewChannel({
                        ...newChannel,
                        allowContact: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="allowContact"
                    className="text-xs text-gray-400"
                  >
                    By providing your email, others can contact you for
                    collaborations or business inquiries.
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
                  Create
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
                <label className="block text-sm text-gray-300 mb-1">
                  Upload to channel *
                </label>
                <select
                  value={selectedUploadChannel}
                  onChange={(e) => setSelectedUploadChannel(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  required
                >
                  <option value="">Select channel</option>
                  {Object.keys(mockChannels).map((key) => {
                    const ch = mockChannels[key];
                    return ch.isOwnChannel ? (
                      <option key={key} value={key}>
                        {ch.name} ({ch.handle})
                      </option>
                    ) : null;
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Video file *
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setVideoFile(e.target.files[0]);
                      setVideoPreview(URL.createObjectURL(e.target.files[0]));
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
                <label className="block text-sm text-gray-300 mb-1">
                  Thumbnail (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setThumbnailFile(e.target.files[0]);
                      setThumbnailPreview(
                        URL.createObjectURL(e.target.files[0]),
                      );
                    }
                  }}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                {thumbnailPreview && (
                  <div className="mt-2">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      className="w-full h-28 object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="Enter video title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Description
                </label>
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
                  <label
                    htmlFor="enableComments"
                    className="text-sm text-gray-300"
                  >
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
                    I agree to the{" "}
                    <span className="text-blue-400 cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and confirm that I own or have rights to upload this
                    content.
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
