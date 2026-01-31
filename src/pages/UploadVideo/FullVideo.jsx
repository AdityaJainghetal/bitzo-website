import { useState } from "react";
import {
  ArrowLeft,
  ThumbsUp,
  MessageSquare,
  Share2,
  Play,
  ChevronRight,
  MoreHorizontal,
  Grid,
} from "lucide-react";

const suggestedVideos = [
  {
    id: 1,
    views: "9.00",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=260&fit=crop",
  },
  {
    id: 2,
    views: "1.00",
    thumbnail:
      "https://images.unsplash.com/photo-1494783160278-93b2a2027a02?w=400&h=260&fit=crop",
  },
  {
    id: 3,
    views: "9.00",
    thumbnail:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=260&fit=crop",
  },
  {
    id: 4,
    views: "4.20",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=260&fit=crop",
  },
  {
    id: 5,
    views: "12.5",
    thumbnail:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=260&fit=crop",
  },
  {
    id: 6,
    views: "3.10",
    thumbnail:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=260&fit=crop",
  },
];

export default function FullVideo() {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* ========================================================
           FIXED TOP NAVBAR
          ======================================================== */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
          padding: "18px 28px",
          height: "68px",
        }}
      >
        <button className="text-white hover:opacity-60 transition-opacity">
          <ArrowLeft size={24} strokeWidth={2} />
        </button>
        <button className="text-white hover:opacity-60 transition-opacity">
          <Grid size={22} strokeWidth={1.8} />
        </button>
      </header>

 
      <section
        className="relative w-full"
        style={{ height: "100vh", maxHeight: "720px" }}
      >
        {/* BG Image */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&h=900&fit=crop"
          alt="Amazing Hill Trekking"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bottom-heavy gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.08) 60%, transparent 80%)",
          }}
        />

        {/* Content wrapper */}
        <div
          className="relative z-10 flex flex-col justify-end w-full h-full"
          style={{ padding: "0 28px 36px" }}
        >
          {/* --- Title + meta row --- */}
          <div
            className="flex items-start justify-between"
            style={{ width: "100%" }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(22px, 5vw, 34px)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                Amazing Hill Trekking
              </h1>
              <div className="flex flex-wrap items-center gap-2" style={{ marginTop: "8px" }}>
                <span style={{ color: "#ccc", fontSize: "14px", fontWeight: 500 }}>
                  TravelGuru
                </span>
                <span style={{ color: "#555" }}>•</span>
                <span style={{ color: "#ccc", fontSize: "14px" }}>124k views</span>
                <span style={{ color: "#555" }}>•</span>
                <span style={{ color: "#ccc", fontSize: "14px" }}>2 days ago</span>
              </div>
            </div>

            <button
              className="text-white hover:opacity-60 transition-opacity"
              style={{ marginTop: "2px" }}
            >
              <MoreHorizontal size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      <section
        className="flex items-center justify-around flex-wrap gap-y-3"
        style={{ background: "#111111", padding: "20px 24px" }}
      >
        {/* Like */}
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-2 hover:opacity-75 transition-opacity"
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: "44px",
              height: "44px",
              background: liked ? "rgba(255,70,70,0.2)" : "rgba(255,255,255,0.08)",
              transition: "background 0.3s",
            }}
          >
            <ThumbsUp
              size={19}
              fill={liked ? "#ff5555" : "none"}
              color={liked ? "#ff5555" : "#ccc"}
              style={{ transition: "all 0.3s" }}
            />
          </div>
          <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 500 }}>Like</span>
        </button>

        {/* Comment */}
        <button className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.08)" }}
          >
            <MessageSquare size={19} color="#ccc" strokeWidth={1.8} fill="none" />
          </div>
          <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 500 }}>Comment</span>
        </button>

        {/* Share */}
        <button className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.08)" }}
          >
            <Share2 size={19} color="#ccc" strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: "14px", color: "#ccc", fontWeight: 500 }}>Share</span>
        </button>
      </section>

      {/* ========================================================
           WATCH NEXT & EARN MORE
          ======================================================== */}
      <section style={{ background: "#0a0a0a", padding: "28px 0 48px" }}>
        {/* Section header */}
        <div
          className="flex items-center justify-between"
          style={{ padding: "0 28px 18px" }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 700 }}>
            Watch Next & Earn More
          </h2>
          <ChevronRight size={20} color="#aaa" strokeWidth={2} />
        </div>

        {/* Card grid:
            • mobile  → horizontal scroll row
            • desktop → wrapping flex grid */}
        <div
          className="flex gap-4"
          style={{
            padding: "0 28px",
            overflowX: "auto",
            flexWrap: "wrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {suggestedVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ========================================================
     VIDEO CARD (reusable)
    ======================================================== */
function VideoCard({ video }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        /* clamp keeps cards fluid:
           mobile min → 30 vw   |  desktop max → 240 px */
        width: "clamp(140px, 28vw, 240px)",
        cursor: "pointer",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "12px",
          /* height scales with card width */
          aspectRatio: "16/10",
          background: "#1a1a1a",
        }}
      >
        {/* Thumbnail */}
        <img
          src={video.thumbnail}
          alt=""
          className="w-full h-full object-cover"
          style={{
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />

        {/* Dark wash */}
        <div
          className="absolute inset-0"
          style={{
            background: hovered ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.3)",
            transition: "background 0.3s",
          }}
        />

        {/* Play circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex items-center justify-center"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.18)",
              opacity: hovered ? 1 : 0.82,
              transition: "opacity 0.3s",
            }}
          >
            <Play size={15} fill="#fff" color="#fff" />
          </div>
        </div>

        {/* Views badge — bottom-left */}
        <div
          className="absolute flex items-center gap-1"
          style={{ bottom: "8px", left: "10px" }}
        >
          <Play size={9} fill="#fff" color="#fff" />
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#fff" }}>
            {video.views}
          </span>
        </div>
      </div>
    </div>
  );
}