

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  MoreVertical,
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  VolumeX,
  MoreHorizontal,
  Music2,
} from "lucide-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const shortsData = [
  {
    id: "s1",
    title: "Amazing Nature Moments",
    creator: "@naturelover",
    views: "2.6M views",
    likes: "145K",
    comments: "3.2K",
    videoUrl:
      "https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&mute=1&loop=1&playlist=EngW7tLk6R8&controls=0&rel=0",
  },
  {
    id: "s2",
    title: "Cute Cats Compilation",
    creator: "@catlovers",
    views: "4.2M views",
    likes: "220K",
    comments: "8.5K",
    videoUrl:
      "https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&mute=1&loop=1&playlist=hY7m5jjJ9mM&controls=0&rel=0",
  },
];

export default function Shorts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});
  const [muted, setMuted] = useState(true);

  const containerRef = useRef(null);

  /* 🔔 TOAST AFTER VIDEO COMPLETE (BOTTOM) */
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info("👀 Watch more to satisfy notifications", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    }, 15000); // ⏱️ 15 sec = video completed

    return () => clearTimeout(timer);
  }, [currentIndex]);

  /* 📜 SCROLL DETECTION */
  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const height = window.innerHeight;
    const index = Math.round(scrollTop / height);
    setCurrentIndex(index);
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      {/* HEADER */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Shorts</h1>
          <div className="flex gap-4 text-white">
            <Search />
            <MoreVertical />
          </div>
        </div>
      </div>

      {/* SHORTS CONTAINER */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      >
        {shortsData.map((short) => (
          <div
            key={short.id}
            className="relative h-screen snap-start flex items-center justify-center"
          >
            {/* VIDEO */}
            <iframe
              src={short.videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              style={{ pointerEvents: "none" }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* VIDEO INFO */}
            <div className="absolute bottom-24 left-6 z-20">
              <h2 className="text-white text-xl font-bold">{short.title}</h2>
              <p className="text-white/80 text-sm">{short.views}</p>
              <p className="text-white/60 text-xs flex gap-1 items-center">
                <Music2 size={14} />
                Original Audio
              </p>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="absolute right-4 bottom-32 z-20 flex flex-col gap-6 items-center">
              <button onClick={() => toggleLike(short.id)}>
                <Heart
                  size={30}
                  className={
                    liked[short.id]
                      ? "text-red-500 fill-red-500"
                      : "text-white"
                  }
                />
                <p className="text-white text-xs">{short.likes}</p>
              </button>

              <button>
                <MessageCircle size={30} className="text-white" />
                <p className="text-white text-xs">{short.comments}</p>
              </button>

              <button>
                <Share2 size={30} className="text-white" />
                <p className="text-white text-xs">Share</p>
              </button>

              <button onClick={toggleMute}>
                {muted ? (
                  <VolumeX size={30} className="text-white" />
                ) : (
                  <Volume2 size={30} className="text-white" />
                )}
              </button>

              <MoreHorizontal size={26} className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* 🔔 TOAST CONTAINER (BOTTOM) */}
      <ToastContainer
        position="bottom-center"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      {/* CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
