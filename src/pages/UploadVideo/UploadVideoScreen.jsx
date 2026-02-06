import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, ChevronDown } from "lucide-react";

const API = "http://localhost:8000/api";

export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [videoType, setVideoType] = useState("short"); // short or long

  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValid = title.trim() && category && videoFile;

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API}/category`);
        setCategories(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Category fetch error", error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  // Fetch all subcategories (for subcategory → category sync)
  useEffect(() => {
    const fetchAllSubCategories = async () => {
      try {
        const res = await axios.get(`${API}/subcategory`); // adjust endpoint if needed
        const subs = Array.isArray(res.data) ? res.data : [];
        setAllSubCategories(subs);
      } catch (error) {
        console.error("All SubCategories fetch error", error);
        setAllSubCategories([]);
      }
    };
    fetchAllSubCategories();
  }, []);

  // Filter subcategories based on selected category
  useEffect(() => {
    if (!category) {
      setFilteredSubCategories(allSubCategories);
      return;
    }

    const filtered = allSubCategories.filter(
      (sub) => sub.category === category || sub.category?._id === category,
    );
    setFilteredSubCategories(filtered);

    // Clear subcategory if it no longer belongs to selected category
    if (subCategory && !filtered.some((sub) => sub._id === subCategory)) {
      setSubCategory("");
    }
  }, [category, allSubCategories, subCategory]);

  // When user selects subcategory → auto select its parent category
  const handleSubCategoryChange = (e) => {
    const subId = e.target.value;
    setSubCategory(subId);

    if (subId) {
      const selectedSub = allSubCategories.find((sub) => sub._id === subId);
      if (selectedSub?.category) {
        const parentId =
          typeof selectedSub.category === "object"
            ? selectedSub.category._id
            : selectedSub.category;
        setCategory(parentId);
      }
    }
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      if (subCategory) formData.append("subCategory", subCategory);
      formData.append("videoType", videoType); // short / long
      formData.append("video", videoFile);

      await axios.post(`${API}/adminvideo/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Video uploaded successfully ✅");

      setTitle("");
      setDescription("");
      setCategory("");
      setSubCategory("");
      setVideoType("short");
      setVideoFile(null);
    } catch (error) {
      alert(error.response?.data?.message || "Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center px-5 py-4 border-b border-zinc-800">
          <ArrowLeft size={22} className="text-zinc-400" />
          <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
        </div>

        <div className="p-5 space-y-5">
          {/* Title */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Short / Long Video Selection - FIRST after title */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setVideoType("short")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                videoType === "short"
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/50"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Short Video
            </button>
            <button
              type="button"
              onClick={() => setVideoType("long")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                videoType === "long"
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/50"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Long Video
            </button>
          </div>

          {/* Description (optional) */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add description (optional)"
            rows={3}
            className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600 resize-none"
          />

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
          </div>

          {/* SubCategory */}
          <div className="relative">
            <select
              value={subCategory}
              onChange={handleSubCategoryChange}
              className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none focus:ring-2 focus:ring-red-600"
              disabled={allSubCategories.length === 0}
            >
              <option value="">Select SubCategory (optional)</option>
              {filteredSubCategories.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.name}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
          </div>

          {/* Video Upload */}
          <div className="space-y-2">
            <label className="block text-sm text-zinc-400 font-medium">
              Upload Video File
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-zinc-400 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zinc-700 file:text-white hover:file:bg-zinc-600 transition file:cursor-pointer cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={!isValid || loading}
            onClick={handleUpload}
            className={`w-full py-4 rounded-xl font-medium text-lg transition-all transform ${
              isValid && !loading
                ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
                : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      </div>
    </div>
  );
}
