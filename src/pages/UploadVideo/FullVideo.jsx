


// import { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ArrowLeft,
//   ThumbsUp,
//   MessageSquare,
//   Share2,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   MoreHorizontal,
//   Grid,
//   X,
//   Send,
// } from "lucide-react";

// /* ───────── VIDEO POOL ───────── */
// const VIDEO_POOL = [
//   {
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     poster:
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
//   },
//   {
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//     poster:
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
//   },
// ];

// /* ───────── RECOMMENDED VIDEOS ───────── */
// const RECOMMENDED_VIDEOS = [
//   { id: 2, title: "Sintel Short Film", creator: "@studio" },
//   { id: 3, title: "Nature Documentary", creator: "@nature" },
//   { id: 4, title: "Amazing Wildlife", creator: "@wildlife" },
// ];

// function getVideoEntry(id) {
//   const num =
//     typeof id === "number"
//       ? id
//       : String(id)
//           .split("")
//           .reduce((a, c) => a + c.charCodeAt(0), 0);
//   return VIDEO_POOL[num % VIDEO_POOL.length];
// }

// export default function FullVideo() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const videoData = location.state?.video || { id: 1 };

//   const [playing, setPlaying] = useState(true);
//   const [muted, setMuted] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [showControls, setShowControls] = useState(false);
//   const [showComments, setShowComments] = useState(false);

//   const [watchTime, setWatchTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const videoRef = useRef(null);
//   const hideTimer = useRef(null);

//   const entry = getVideoEntry(videoData.id);

//   /* ───────── PLAY / PAUSE ───────── */
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     v.load();
//     playing ? v.play().catch(() => {}) : v.pause();
//   }, [playing, entry.video]);

//   /* ───────── WATCH TRACK ───────── */
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     const onTime = () => setWatchTime(v.currentTime);
//     const onMeta = () => setDuration(v.duration || 0);

//     v.addEventListener("timeupdate", onTime);
//     v.addEventListener("loadedmetadata", onMeta);

//     return () => {
//       v.removeEventListener("timeupdate", onTime);
//       v.removeEventListener("loadedmetadata", onMeta);
//     };
//   }, [entry.video]);

//   const watchedPercent =
//     duration > 0 ? Math.min((watchTime / duration) * 100, 100) : 0;

//   const handleTap = () => {
//     setShowControls(true);
//     clearTimeout(hideTimer.current);
//     hideTimer.current = setTimeout(() => {
//       if (playing) setShowControls(false);
//     }, 2000);
//   };

//   const openRecommendedVideo = (video) => {
//     navigate("/full-video", {
//       state: { video },
//       replace: true,
//     });
//     setPlaying(true);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* HEADER */}
//       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-4 bg-gradient-to-b from-black/80 to-transparent">
//         <button onClick={() => navigate(-1)}>
//           <ArrowLeft size={22} />
//         </button>
//         <Grid size={20} />
//       </header>

//       {/* VIDEO */}
//       <section className="relative h-screen" onClick={handleTap}>
//         <video
//           ref={videoRef}
//           src={entry.video}
//           poster={entry.poster}
//           muted={muted}
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {showControls && (
//           <button
//             onClick={() => setPlaying(!playing)}
//             className="absolute inset-0 flex items-center justify-center z-20"
//           >
//             <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
//               {playing ? <Pause size={30} /> : <Play size={30} />}
//             </div>
//           </button>
//         )}

//         {showControls && (
//           <button
//             onClick={() => setMuted(!muted)}
//             className="absolute top-24 right-6 z-30 bg-black/60 p-2 rounded-full"
//           >
//             {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
//           </button>
//         )}

//         <div className="absolute bottom-28 left-6 z-20">
//           <h1 className="text-2xl font-bold">
//             {videoData.title || "Amazing Video"}
//           </h1>
//           <p className="text-sm text-gray-300">
//             {videoData.creator || "@creator"}
//           </p>
//         </div>
//       </section>

//       {/* ACTION BAR */}
//       <section className="bg-[#111] px-6 py-5 flex justify-around">
//         <div className="flex flex-col items-center">
//           <button
//             onClick={() => setLiked(!liked)}
//             className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10"
//           >
//             <ThumbsUp
//               size={20}
//               color={liked ? "#ff4d4d" : "#ccc"}
//               fill={liked ? "#ff4d4d" : "none"}
//             />
//           </button>
//           <span className="text-sm mt-1">Like</span>
//           <span className="text-xs text-gray-400">
//             {watchedPercent.toFixed(0)}% watched
//           </span>
//         </div>

//         <div
//           className="flex flex-col items-center cursor-pointer"
//           onClick={() => setShowComments(true)}
//         >
//           <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
//             <MessageSquare size={20} />
//           </div>
//           <span className="text-sm mt-1">Comment</span>
//         </div>

//         <div className="flex flex-col items-center cursor-pointer">
//           <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
//             <Share2 size={20} />
//           </div>
//           <span className="text-sm mt-1">Share</span>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
//             <MoreHorizontal size={20} />
//           </div>
//           <span className="text-sm mt-1">More</span>
//         </div>
//       </section>

//       {/* RECOMMENDED VIDEOS */}
//       <section className="bg-black px-5 py-6">
//         <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>

//         <div className="space-y-4">
//           {RECOMMENDED_VIDEOS.map((vid) => {
//             const rec = getVideoEntry(vid.id);
//             return (
//               <div
//                 key={vid.id}
//                 onClick={() => openRecommendedVideo(vid)}
//                 className="flex gap-4 cursor-pointer"
//               >
//                 <img
//                   src={rec.poster}
//                   className="w-32 h-20 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-sm font-semibold">{vid.title}</h3>
//                   <p className="text-xs text-gray-400">{vid.creator}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* COMMENTS */}
//       {showComments && (
//         <div className="fixed inset-0 z-50 bg-black/70 flex items-end">
//           <div className="bg-[#111] rounded-t-2xl p-4 h-[60%] w-full">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold">Comments</h3>
//               <button onClick={() => setShowComments(false)}>
//                 <X />
//               </button>
//             </div>

//             <div className="flex-1 text-gray-400 text-sm">
//               No comments yet
//             </div>

//             <div className="flex gap-2 mt-3">
//               <input
//                 placeholder="Add a comment..."
//                 className="flex-1 bg-black/40 rounded-full px-4 py-2 text-sm outline-none"
//               />
//               <button className="p-2 rounded-full bg-blue-500">
//                 <Send size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ArrowLeft,
//   ThumbsUp,
//   MessageSquare,
//   Share2,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   MoreHorizontal,
//   Grid,
//   X,
//   Send,
// } from "lucide-react";

// /* ───────── VIDEO POOL ───────── */
// const VIDEO_POOL = [
//   {
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     poster:
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
//   },
//   {
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//     poster:
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
//   },
// ];

// /* ───────── RECOMMENDED VIDEOS ───────── */
// const RECOMMENDED_VIDEOS = [
//   { id: 2, title: "Sintel Short Film", creator: "@studio" },
//   { id: 3, title: "Nature Documentary", creator: "@nature" },
//   { id: 4, title: "Amazing Wildlife", creator: "@wildlife" },
// ];

// function getVideoEntry(id) {
//   const num =
//     typeof id === "number"
//       ? id
//       : String(id)
//           .split("")
//           .reduce((a, c) => a + c.charCodeAt(0), 0);
//   return VIDEO_POOL[num % VIDEO_POOL.length];
// }

// export default function FullVideo() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const videoData = location.state?.video || { id: 1 };

//   const [playing, setPlaying] = useState(true);
//   const [muted, setMuted] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [showControls, setShowControls] = useState(false);
//   const [showComments, setShowComments] = useState(false);

//   const [watchTime, setWatchTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const videoRef = useRef(null);
//   const hideTimer = useRef(null);

//   const entry = getVideoEntry(videoData.id);

//   /* ───────── PLAY / PAUSE ───────── */
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     v.load();
//     playing ? v.play().catch(() => {}) : v.pause();
//   }, [playing, entry.video]);

//   /* ───────── WATCH TRACK ───────── */
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     const onTime = () => setWatchTime(v.currentTime);
//     const onMeta = () => setDuration(v.duration || 0);

//     v.addEventListener("timeupdate", onTime);
//     v.addEventListener("loadedmetadata", onMeta);

//     return () => {
//       v.removeEventListener("timeupdate", onTime);
//       v.removeEventListener("loadedmetadata", onMeta);
//     };
//   }, [entry.video]);

//   const watchedPercent =
//     duration > 0 ? Math.min((watchTime / duration) * 100, 100) : 0;

//   const handleTap = () => {
//     setShowControls(true);
//     clearTimeout(hideTimer.current);
//     hideTimer.current = setTimeout(() => {
//       if (playing) setShowControls(false);
//     }, 2000);
//   };

//   const openRecommendedVideo = (video) => {
//     navigate("/fullvideo", {
//       state: { video },
//       replace: true,
//     });
//     setPlaying(true);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* HEADER */}
//       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-4 bg-gradient-to-b from-black/80 to-transparent">
//         <button onClick={() => navigate(-1)}>
//           <ArrowLeft size={22} />
//         </button>
//         <Grid size={20} />
//       </header>

//       {/* VIDEO */}
//       <section className="relative h-screen" onClick={handleTap}>
//         <video
//           key={entry.video}                 // ⭐ FIX HERE
//           ref={videoRef}
//           src={entry.video}
//           poster={entry.poster}
//           muted={muted}
//           loop
//           autoPlay
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {showControls && (
//           <button
//             onClick={() => setPlaying(!playing)}
//             className="absolute inset-0 flex items-center justify-center z-20"
//           >
//             <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
//               {playing ? <Pause size={30} /> : <Play size={30} />}
//             </div>
//           </button>
//         )}

//         {showControls && (
//           <button
//             onClick={() => setMuted(!muted)}
//             className="absolute top-24 right-6 z-30 bg-black/60 p-2 rounded-full"
//           >
//             {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
//           </button>
//         )}

//         <div className="absolute bottom-28 left-6 z-20">
//           <h1 className="text-2xl font-bold">
//             {videoData.title || "Amazing Video"}
//           </h1>
//           <p className="text-sm text-gray-300">
//             {videoData.creator || "@creator"}
//           </p>
//         </div>
//       </section>

//       {/* ACTION BAR */}
//       <section className="bg-[#111] px-6 py-5 flex justify-around">
//         <div className="flex flex-col items-center">
//           <button
//             onClick={() => setLiked(!liked)}
//             className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10"
//           >
//             <ThumbsUp
//               size={20}
//               color={liked ? "#ff4d4d" : "#ccc"}
//               fill={liked ? "#ff4d4d" : "none"}
//             />
//           </button>
//           <span className="text-sm mt-1">Like</span>
//           <span className="text-xs text-gray-400">
//             {watchedPercent.toFixed(0)}% watched
//           </span>
//         </div>

//         <div
//           className="flex flex-col items-center cursor-pointer"
//           onClick={() => setShowComments(true)}
//         >
//           <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
//             <MessageSquare size={20} />
//           </div>
//           <span className="text-sm mt-1">Comment</span>
//         </div>

//         <div className="flex flex-col items-center cursor-pointer">
//           <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
//             <Share2 size={20} />
//           </div>
//           <span className="text-sm mt-1">Share</span>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
//             <MoreHorizontal size={20} />
//           </div>
//           <span className="text-sm mt-1">More</span>
//         </div>
//       </section>

//       {/* RECOMMENDED VIDEOS */}
//       <section className="bg-black px-5 py-6">
//         <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>

//         <div className="space-y-4">
//           {RECOMMENDED_VIDEOS.map((vid) => {
//             const rec = getVideoEntry(vid.id);
//             return (
//               <div
//                 key={vid.id}
//                 onClick={() => openRecommendedVideo(vid)}
//                 className="flex gap-4 cursor-pointer"
//               >
//                 <img
//                   src={rec.poster}
//                   className="w-32 h-20 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-sm font-semibold">{vid.title}</h3>
//                   <p className="text-xs text-gray-400">{vid.creator}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* COMMENTS */}
//       {showComments && (
//         <div className="fixed inset-0 z-50 bg-black/70 flex items-end">
//           <div className="bg-[#111] rounded-t-2xl p-4 h-[60%] w-full">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="font-semibold">Comments</h3>
//               <button onClick={() => setShowComments(false)}>
//                 <X />
//               </button>
//             </div>

//             <div className="flex-1 text-gray-400 text-sm">
//               No comments yet
//             </div>

//             <div className="flex gap-2 mt-3">
//               <input
//                 placeholder="Add a comment..."
//                 className="flex-1 bg-black/40 rounded-full px-4 py-2 text-sm outline-none"
//               />
//               <button className="p-2 rounded-full bg-blue-500">
//                 <Send size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ThumbsUp,
  MessageSquare,
  Share2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MoreHorizontal,
  Grid,
  X,
  Send,
} from "lucide-react";

/* ───────── VIDEO POOL ───────── */
const VIDEO_POOL = [
  {
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  },
  {
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    poster:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
  },
];

/* ───────── RECOMMENDED VIDEOS ───────── */
const RECOMMENDED_VIDEOS = [
  { id: 2, title: "Sintel Short Film", creator: "@studio" },
  { id: 3, title: "Nature Documentary", creator: "@nature" },
  { id: 4, title: "Amazing Wildlife", creator: "@wildlife" },
];

function getVideoEntry(id) {
  const num =
    typeof id === "number"
      ? id
      : String(id)
          .split("")
          .reduce((a, c) => a + c.charCodeAt(0), 0);
  return VIDEO_POOL[num % VIDEO_POOL.length];
}

export default function FullVideo() {
  const navigate = useNavigate();
  const location = useLocation();
  const videoData = location.state?.video || { id: 1 };

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const [watchTime, setWatchTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef(null);
  const hideTimer = useRef(null);

  const entry = getVideoEntry(videoData.id);

  /* ───────── PLAY / PAUSE ───────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.load();
    playing ? v.play().catch(() => {}) : v.pause();
  }, [playing, entry.video]);

  /* ───────── WATCH TRACK ───────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTime = () => setWatchTime(v.currentTime);
    const onMeta = () => setDuration(v.duration || 0);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
    };
  }, [entry.video]);

  const watchedPercent =
    duration > 0 ? Math.min((watchTime / duration) * 100, 100) : 0;

  const handleTap = () => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 2000);
  };

  /* ───────── OPEN RECOMMENDED VIDEO ───────── */
  const openRecommendedVideo = (video) => {
    // Update state for clicked video
    navigate(`/fullvideo/${video.id}`, { state: { video }, replace: true });
    setPlaying(true);
    setWatchTime(0);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={22} />
        </button>
        <Grid size={20} />
      </header>

      {/* VIDEO */}
      <section className="relative h-screen" onClick={handleTap}>
        <video
          key={videoData.id} // ⭐ important: force re-mount on video change
          ref={videoRef}
          src={entry.video}
          poster={entry.poster}
          muted={muted}
          loop
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {showControls && (
          <button
            onClick={() => setPlaying(!playing)}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
              {playing ? <Pause size={30} /> : <Play size={30} />}
            </div>
          </button>
        )}

        {showControls && (
          <button
            onClick={() => setMuted(!muted)}
            className="absolute top-24 right-6 z-30 bg-black/60 p-2 rounded-full"
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        )}

        <div className="absolute bottom-28 left-6 z-20">
          <h1 className="text-2xl font-bold">
            {videoData.title || "Amazing Video"}
          </h1>
          <p className="text-sm text-gray-300">
            {videoData.creator || "@creator"}
          </p>
        </div>
      </section>

      {/* ACTION BAR */}
      <section className="bg-[#111] px-6 py-5 flex justify-around">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setLiked(!liked)}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10"
          >
            <ThumbsUp
              size={20}
              color={liked ? "#ff4d4d" : "#ccc"}
              fill={liked ? "#ff4d4d" : "none"}
            />
          </button>
          <span className="text-sm mt-1">Like</span>
          <span className="text-xs text-gray-400">
            {watchedPercent.toFixed(0)}% watched
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setShowComments(true)}
        >
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
            <MessageSquare size={20} />
          </div>
          <span className="text-sm mt-1">Comment</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
            <Share2 size={20} />
          </div>
          <span className="text-sm mt-1">Share</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
            <MoreHorizontal size={20} />
          </div>
          <span className="text-sm mt-1">More</span>
        </div>
      </section>

      {/* RECOMMENDED VIDEOS */}
      <section className="bg-black px-5 py-6">
        <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>

        <div className="space-y-4">
          {RECOMMENDED_VIDEOS.map((vid) => {
            const rec = getVideoEntry(vid.id);
            return (
              <div
                key={vid.id}
                onClick={() => openRecommendedVideo(vid)}
                className="flex gap-4 cursor-pointer"
              >
                <img
                  src={rec.poster}
                  className="w-32 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">{vid.title}</h3>
                  <p className="text-xs text-gray-400">{vid.creator}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMMENTS */}
      {showComments && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-end">
          <div className="bg-[#111] rounded-t-2xl p-4 h-[60%] w-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Comments</h3>
              <button onClick={() => setShowComments(false)}>
                <X />
              </button>
            </div>

            <div className="flex-1 text-gray-400 text-sm">
              No comments yet
            </div>

            <div className="flex gap-2 mt-3">
              <input
                placeholder="Add a comment..."
                className="flex-1 bg-black/40 rounded-full px-4 py-2 text-sm outline-none"
              />
              <button className="p-2 rounded-full bg-blue-500">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
