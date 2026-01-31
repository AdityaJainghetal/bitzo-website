
import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";

export default function UploadVideo() {
  const [type, setType] = useState("short");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");

  const isValid = title.trim() && category && language;

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl shadow-black/60 border border-zinc-800 overflow-hidden">
        {/* Header inside card */}
        <div className="flex items-center px-5 py-4 border-b border-zinc-800 bg-zinc-950/70">
          <button className="p-2 -ml-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors">
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-semibold ml-2">Upload Video</h1>
        </div>

        {/* Content */}
        <div className="p-5 pb-6 space-y-6">
          {/* Toggle buttons */}
          <div className="flex gap-2 bg-zinc-950/50 p-1.5 rounded-xl">
            <button
              onClick={() => setType("short")}
              className={`
                flex-1 py-2.5 rounded-lg text-sm font-medium transition-all
                ${
                  type === "short"
                    ? "bg-red-600 text-white shadow-md shadow-red-900/40"
                    : "text-zinc-300 hover:bg-zinc-800"
                }
              `}
            >
              Short Video
            </button>

            <button
              onClick={() => setType("long")}
              className={`
                flex-1 py-2.5 rounded-lg text-sm font-medium transition-all
                ${
                  type === "long"
                    ? "bg-red-600 text-white shadow-md shadow-red-900/40"
                    : "text-zinc-300 hover:bg-zinc-800"
                }
              `}
            >
              Long Video
            </button>
          </div>

          {/* Form fields */}
          <div className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
                maxLength={100}
                className="
                  w-full bg-zinc-800 border border-zinc-700 rounded-lg
                  px-4 py-3 text-sm text-white placeholder-zinc-500
                  focus:border-red-600 focus:ring-1 focus:ring-red-600/30
                  outline-none transition-all
                "
              />
              <div className="text-xs text-zinc-500 mt-1 text-right">
                {title.length} / 100
              </div>
            </div>

            {/* Category */}
            <div className="relative">
              <label className="block text-sm text-zinc-400 mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full bg-zinc-800 border border-zinc-700 rounded-lg
                  px-4 py-3 text-sm text-white appearance-none
                  focus:border-red-600 focus:ring-1 focus:ring-red-600/30
                  outline-none transition-all
                "
              >
                <option value="" disabled>Select category</option>
                <option value="gaming">Gaming</option>
                <option value="vlog">Vlog</option>
                <option value="education">Education</option>
                <option value="music">Music</option>
                <option value="comedy">Comedy</option>
                <option value="tech">Tech</option>
                <option value="cooking">Cooking</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-[42px] text-zinc-400 pointer-events-none"
              />
            </div>

            {/* Language */}
            <div className="relative">
              <label className="block text-sm text-zinc-400 mb-1.5">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="
                  w-full bg-zinc-800 border border-zinc-700 rounded-lg
                  px-4 py-3 text-sm text-white appearance-none
                  focus:border-red-600 focus:ring-1 focus:ring-red-600/30
                  outline-none transition-all
                "
              >
                <option value="" disabled>Select language</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="bengali">Bengali</option>
                <option value="marathi">Marathi</option>
                <option value="punjabi">Punjabi</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-[42px] text-zinc-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Upload Button */}
          <button
            disabled={!isValid}
            className={`
              w-full mt-4 py-3.5 rounded-xl font-medium text-base transition-all
              ${
                isValid
                  ? "bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-900/30"
                  : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
              }
            `}
          >
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
}