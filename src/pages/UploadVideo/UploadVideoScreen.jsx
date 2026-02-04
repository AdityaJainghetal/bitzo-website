
// // // // // // import { useState } from "react";
// // // // // // import { ArrowLeft, ChevronDown } from "lucide-react";

// // // // // // export default function UploadVideo() {
// // // // // //   const [type, setType] = useState("short");
// // // // // //   const [title, setTitle] = useState("");
// // // // // //   const [category, setCategory] = useState("");
// // // // // //   const [language, setLanguage] = useState("");

// // // // // //   const isValid = title.trim() && category && language;

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
// // // // // //       {/* Main Card */}
// // // // // //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl shadow-black/60 border border-zinc-800 overflow-hidden">
// // // // // //         {/* Header inside card */}
// // // // // //         <div className="flex items-center px-5 py-4 border-b border-zinc-800 bg-zinc-950/70">
// // // // // //           <button className="p-2 -ml-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors">
// // // // // //             <ArrowLeft size={22} />
// // // // // //           </button>
// // // // // //           <h1 className="text-lg font-semibold ml-2">Upload Video</h1>
// // // // // //         </div>

// // // // // //         {/* Content */}
// // // // // //         <div className="p-5 pb-6 space-y-6">
// // // // // //           {/* Toggle buttons */}
// // // // // //           <div className="flex gap-2 bg-zinc-950/50 p-1.5 rounded-xl">
// // // // // //             <button
// // // // // //               onClick={() => setType("short")}
// // // // // //               className={`
// // // // // //                 flex-1 py-2.5 rounded-lg text-sm font-medium transition-all
// // // // // //                 ${
// // // // // //                   type === "short"
// // // // // //                     ? "bg-red-600 text-white shadow-md shadow-red-900/40"
// // // // // //                     : "text-zinc-300 hover:bg-zinc-800"
// // // // // //                 }
// // // // // //               `}
// // // // // //             >
// // // // // //               Short Video
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={() => setType("long")}
// // // // // //               className={`
// // // // // //                 flex-1 py-2.5 rounded-lg text-sm font-medium transition-all
// // // // // //                 ${
// // // // // //                   type === "long"
// // // // // //                     ? "bg-red-600 text-white shadow-md shadow-red-900/40"
// // // // // //                     : "text-zinc-300 hover:bg-zinc-800"
// // // // // //                 }
// // // // // //               `}
// // // // // //             >
// // // // // //               Long Video
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Form fields */}
// // // // // //           <div className="space-y-5">
// // // // // //             {/* Title */}
// // // // // //             <div>
// // // // // //               <label className="block text-sm text-zinc-400 mb-1.5">Title</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 value={title}
// // // // // //                 onChange={(e) => setTitle(e.target.value)}
// // // // // //                 placeholder="Enter title..."
// // // // // //                 maxLength={100}
// // // // // //                 className="
// // // // // //                   w-full bg-zinc-800 border border-zinc-700 rounded-lg
// // // // // //                   px-4 py-3 text-sm text-white placeholder-zinc-500
// // // // // //                   focus:border-red-600 focus:ring-1 focus:ring-red-600/30
// // // // // //                   outline-none transition-all
// // // // // //                 "
// // // // // //               />
// // // // // //               <div className="text-xs text-zinc-500 mt-1 text-right">
// // // // // //                 {title.length} / 100
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Category */}
// // // // // //             <div className="relative">
// // // // // //               <label className="block text-sm text-zinc-400 mb-1.5">Category</label>
// // // // // //               <select
// // // // // //                 value={category}
// // // // // //                 onChange={(e) => setCategory(e.target.value)}
// // // // // //                 className="
// // // // // //                   w-full bg-zinc-800 border border-zinc-700 rounded-lg
// // // // // //                   px-4 py-3 text-sm text-white appearance-none
// // // // // //                   focus:border-red-600 focus:ring-1 focus:ring-red-600/30
// // // // // //                   outline-none transition-all
// // // // // //                 "
// // // // // //               >
// // // // // //                 <option value="" disabled>Select category</option>
// // // // // //                 <option value="gaming">Gaming</option>
// // // // // //                 <option value="vlog">Vlog</option>
// // // // // //                 <option value="education">Education</option>
// // // // // //                 <option value="music">Music</option>
// // // // // //                 <option value="comedy">Comedy</option>
// // // // // //                 <option value="tech">Tech</option>
// // // // // //                 <option value="cooking">Cooking</option>
// // // // // //                 <option value="other">Other</option>
// // // // // //               </select>
// // // // // //               <ChevronDown
// // // // // //                 size={16}
// // // // // //                 className="absolute right-4 top-[42px] text-zinc-400 pointer-events-none"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Language */}
// // // // // //             <div className="relative">
// // // // // //               <label className="block text-sm text-zinc-400 mb-1.5">Language</label>
// // // // // //               <select
// // // // // //                 value={language}
// // // // // //                 onChange={(e) => setLanguage(e.target.value)}
// // // // // //                 className="
// // // // // //                   w-full bg-zinc-800 border border-zinc-700 rounded-lg
// // // // // //                   px-4 py-3 text-sm text-white appearance-none
// // // // // //                   focus:border-red-600 focus:ring-1 focus:ring-red-600/30
// // // // // //                   outline-none transition-all
// // // // // //                 "
// // // // // //               >
// // // // // //                 <option value="" disabled>Select language</option>
// // // // // //                 <option value="hindi">Hindi</option>
// // // // // //                 <option value="english">English</option>
// // // // // //                 <option value="tamil">Tamil</option>
// // // // // //                 <option value="telugu">Telugu</option>
// // // // // //                 <option value="bengali">Bengali</option>
// // // // // //                 <option value="marathi">Marathi</option>
// // // // // //                 <option value="punjabi">Punjabi</option>
// // // // // //                 <option value="other">Other</option>
// // // // // //               </select>
// // // // // //               <ChevronDown
// // // // // //                 size={16}
// // // // // //                 className="absolute right-4 top-[42px] text-zinc-400 pointer-events-none"
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Upload Button */}
// // // // // //           <button
// // // // // //             disabled={!isValid}
// // // // // //             className={`
// // // // // //               w-full mt-4 py-3.5 rounded-xl font-medium text-base transition-all
// // // // // //               ${
// // // // // //                 isValid
// // // // // //                   ? "bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-900/30"
// // // // // //                   : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
// // // // // //               }
// // // // // //             `}
// // // // // //           >
// // // // // //             Upload Video
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // import { ArrowLeft, ChevronDown } from "lucide-react";

// // // // // const API = "http://localhost:5000/api";

// // // // // export default function UploadVideo() {
// // // // //   const [type, setType] = useState("short");
// // // // //   const [title, setTitle] = useState("");

// // // // //   const [categories, setCategories] = useState([]);
// // // // //   const [subCategories, setSubCategories] = useState([]);

// // // // //   const [category, setCategory] = useState("");
// // // // //   const [subCategory, setSubCategory] = useState("");

// // // // //   const [videoFile, setVideoFile] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const isValid = title && category && videoFile;

// // // // //   /* =========================
// // // // //      FETCH CATEGORIES
// // // // //   ========================== */
// // // // //   useEffect(() => {
// // // // //     const fetchCategories = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(`${API}/category`);
// // // // //         setCategories(res.data.categories);
// // // // //       } catch (err) {
// // // // //         console.error("Category fetch error", err);
// // // // //       }
// // // // //     };
// // // // //     fetchCategories();
// // // // //   }, []);

// // // // //   /* =========================
// // // // //      FETCH SUBCATEGORIES
// // // // //   ========================== */
// // // // //   useEffect(() => {
// // // // //     if (!category) return;

// // // // //     const fetchSubCategories = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(
// // // // //           `${API}/subcategory/${category}`
// // // // //         );
// // // // //         setSubCategories(res.data.subCategories);
// // // // //       } catch (err) {
// // // // //         console.error("SubCategory fetch error", err);
// // // // //       }
// // // // //     };

// // // // //     fetchSubCategories();
// // // // //     setSubCategory(""); // reset when category changes
// // // // //   }, [category]);

// // // // //   /* =========================
// // // // //      UPLOAD VIDEO
// // // // //   ========================== */
// // // // //   const handleUpload = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const token = localStorage.getItem("token");

// // // // //       const formData = new FormData();
// // // // //       formData.append("title", title);
// // // // //       formData.append("type", type);
// // // // //       formData.append("category", category);
// // // // //       if (subCategory) formData.append("subCategory", subCategory);
// // // // //       formData.append("video", videoFile);

// // // // //       await axios.post(`${API}/video/upload`, formData, {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //           "Content-Type": "multipart/form-data",
// // // // //         },
// // // // //       });

// // // // //       alert("Video uploaded successfully ✅");

// // // // //       setTitle("");
// // // // //       setCategory("");
// // // // //       setSubCategory("");
// // // // //       setVideoFile(null);
// // // // //     } catch (err) {
// // // // //       alert(err.response?.data?.message || "Upload failed ❌");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
// // // // //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800">

// // // // //         {/* HEADER */}
// // // // //         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
// // // // //           <ArrowLeft size={22} className="text-zinc-400" />
// // // // //           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
// // // // //         </div>

// // // // //         <div className="p-5 space-y-4">

// // // // //           {/* TYPE */}
// // // // //           <div className="flex gap-2">
// // // // //             {["short", "long"].map((t) => (
// // // // //               <button
// // // // //                 key={t}
// // // // //                 onClick={() => setType(t)}
// // // // //                 className={`flex-1 py-2 rounded-lg ${
// // // // //                   type === t
// // // // //                     ? "bg-red-600"
// // // // //                     : "bg-zinc-800"
// // // // //                 }`}
// // // // //               >
// // // // //                 {t}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* TITLE */}
// // // // //           <input
// // // // //             value={title}
// // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // //             placeholder="Title"
// // // // //             className="w-full px-4 py-3 bg-zinc-800 rounded-lg"
// // // // //           />

// // // // //           {/* CATEGORY */}
// // // // //           <div className="relative">
// // // // //             <select
// // // // //               value={category}
// // // // //               onChange={(e) => setCategory(e.target.value)}
// // // // //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg appearance-none"
// // // // //             >
// // // // //               <option value="">Select Category</option>
// // // // //               {categories.map((cat) => (
// // // // //                 <option key={cat._id} value={cat._id}>
// // // // //                   {cat.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <ChevronDown className="absolute right-4 top-4 text-zinc-400" size={16} />
// // // // //           </div>

// // // // //           {/* SUB CATEGORY */}
// // // // //           {subCategories.length > 0 && (
// // // // //             <div className="relative">
// // // // //               <select
// // // // //                 value={subCategory}
// // // // //                 onChange={(e) => setSubCategory(e.target.value)}
// // // // //                 className="w-full px-4 py-3 bg-zinc-800 rounded-lg appearance-none"
// // // // //               >
// // // // //                 <option value="">Select SubCategory</option>
// // // // //                 {subCategories.map((sub) => (
// // // // //                   <option key={sub._id} value={sub._id}>
// // // // //                     {sub.name}
// // // // //                   </option>
// // // // //                 ))}
// // // // //               </select>
// // // // //               <ChevronDown className="absolute right-4 top-4 text-zinc-400" size={16} />
// // // // //             </div>
// // // // //           )}

// // // // //           {/* VIDEO FILE */}
// // // // //           <input
// // // // //             type="file"
// // // // //             accept="video/*"
// // // // //             onChange={(e) => setVideoFile(e.target.files[0])}
// // // // //           />

// // // // //           {/* UPLOAD BUTTON */}
// // // // //           <button
// // // // //             disabled={!isValid || loading}
// // // // //             onClick={handleUpload}
// // // // //             className={`w-full py-3 rounded-xl ${
// // // // //               isValid ? "bg-red-600" : "bg-zinc-700"
// // // // //             }`}
// // // // //           >
// // // // //             {loading ? "Uploading..." : "Upload Video"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // import { useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // import { ArrowLeft, ChevronDown } from "lucide-react";

// // // // // const API = "http://localhost:8000/api";

// // // // // export default function UploadVideo() {
// // // // //   const [type, setType] = useState("short");
// // // // //   const [title, setTitle] = useState("");

// // // // //   const [categories, setCategories] = useState([]);
// // // // //   const [subCategories, setSubCategories] = useState([]);

// // // // //   const [category, setCategory] = useState("");
// // // // //   const [subCategory, setSubCategory] = useState("");

// // // // //   const [videoFile, setVideoFile] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const isValid = title && category && videoFile;

// // // // //   /* =======================
// // // // //      FETCH CATEGORIES
// // // // //   ======================= */
// // // // //   useEffect(() => {
// // // // //     const fetchCategories = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(`${API}/category`);
// // // // //         setCategories(res.data.categories);
// // // // //       } catch (err) {
// // // // //         console.error("Category fetch error", err);
// // // // //       }
// // // // //     };
// // // // //     fetchCategories();
// // // // //   }, []);

// // // // //   /* =======================
// // // // //      FETCH SUBCATEGORIES
// // // // //   ======================= */
// // // // //   useEffect(() => {
// // // // //     if (!category) return;

// // // // //     const fetchSubCategories = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(
// // // // //           `${API}/subcategory/${category}`
// // // // //         );
// // // // //         setSubCategories(res.data.subCategories);
// // // // //       } catch (err) {
// // // // //         console.error("SubCategory fetch error", err);
// // // // //       }
// // // // //     };

// // // // //     fetchSubCategories();
// // // // //     setSubCategory("");
// // // // //   }, [category]);

// // // // //   /* =======================
// // // // //      UPLOAD VIDEO
// // // // //   ======================= */
// // // // //   const handleUpload = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const token = localStorage.getItem("token");

// // // // //       const formData = new FormData();
// // // // //       formData.append("title", title);
// // // // //       formData.append("type", type);
// // // // //       formData.append("category", category);
// // // // //       if (subCategory) formData.append("subCategory", subCategory);
// // // // //       formData.append("video", videoFile);

// // // // //       await axios.post(`${API}/video/upload`, formData, {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //           "Content-Type": "multipart/form-data",
// // // // //         },
// // // // //       });

// // // // //       alert("Video uploaded successfully ✅");

// // // // //       setTitle("");
// // // // //       setCategory("");
// // // // //       setSubCategory("");
// // // // //       setVideoFile(null);
// // // // //     } catch (err) {
// // // // //       alert(err.response?.data?.message || "Upload failed ❌");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
// // // // //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800">

// // // // //         {/* Header */}
// // // // //         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
// // // // //           <ArrowLeft size={22} className="text-zinc-400" />
// // // // //           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
// // // // //         </div>

// // // // //         <div className="p-5 space-y-4">

// // // // //           {/* Type */}
// // // // //           <div className="flex gap-2">
// // // // //             {["short", "long"].map((t) => (
// // // // //               <button
// // // // //                 key={t}
// // // // //                 onClick={() => setType(t)}
// // // // //                 className={`flex-1 py-2 rounded-lg ${
// // // // //                   type === t ? "bg-red-600" : "bg-zinc-800"
// // // // //                 }`}
// // // // //               >
// // // // //                 {t}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Title */}
// // // // //           <input
// // // // //             value={title}
// // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // //             placeholder="Title"
// // // // //             className="w-full px-4 py-3 bg-zinc-800 rounded-lg"
// // // // //           />

// // // // //           {/* Category */}
// // // // //           <div className="relative">
// // // // //             <select
// // // // //               value={category}
// // // // //               onChange={(e) => setCategory(e.target.value)}
// // // // //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg appearance-none"
// // // // //             >
// // // // //               <option value="">Select Category</option>
// // // // //               {categories.map((cat) => (
// // // // //                 <option key={cat._id} value={cat._id}>
// // // // //                   {cat.name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //             <ChevronDown size={16} className="absolute right-4 top-4 text-zinc-400" />
// // // // //           </div>

// // // // //           {/* SubCategory */}
// // // // //           {subCategories.length > 0 && (
// // // // //             <div className="relative">
// // // // //               <select
// // // // //                 value={subCategory}
// // // // //                 onChange={(e) => setSubCategory(e.target.value)}
// // // // //                 className="w-full px-4 py-3 bg-zinc-800 rounded-lg appearance-none"
// // // // //               >
// // // // //                 <option value="">Select SubCategory</option>
// // // // //                 {subCategories.map((sub) => (
// // // // //                   <option key={sub._id} value={sub._id}>
// // // // //                     {sub.name}
// // // // //                   </option>
// // // // //                 ))}
// // // // //               </select>
// // // // //               <ChevronDown size={16} className="absolute right-4 top-4 text-zinc-400" />
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Video */}
// // // // //           <input
// // // // //             type="file"
// // // // //             accept="video/*"
// // // // //             onChange={(e) => setVideoFile(e.target.files[0])}
// // // // //           />

// // // // //           {/* Upload */}
// // // // //           <button
// // // // //             disabled={!isValid || loading}
// // // // //             onClick={handleUpload}
// // // // //             className={`w-full py-3 rounded-xl ${
// // // // //               isValid ? "bg-red-600" : "bg-zinc-700"
// // // // //             }`}
// // // // //           >
// // // // //             {loading ? "Uploading..." : "Upload Video"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { ArrowLeft, ChevronDown } from "lucide-react";

// // // // const API = "http://localhost:8000/api";

// // // // export default function UploadVideo() {
// // // //   const [title, setTitle] = useState("");

// // // //   const [categories, setCategories] = useState([]);
// // // //   const [subCategories, setSubCategories] = useState([]);

// // // //   const [category, setCategory] = useState("");
// // // //   const [subCategory, setSubCategory] = useState("");

// // // //   const [videoFile, setVideoFile] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const isValid = title && category && videoFile;

// // // //   /* =======================
// // // //      FETCH CATEGORIES
// // // //   ======================= */
// // // //   useEffect(() => {
// // // //     const fetchCategories = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${API}/category`);

// // // //         // ✅ SAFETY CHECK
// // // //         setCategories(Array.isArray(res.data.categories) ? res.data.categories : []);
// // // //       } catch (err) {
// // // //         console.error("Category fetch error", err);
// // // //         setCategories([]);
// // // //       }
// // // //     };

// // // //     fetchCategories();
// // // //   }, []);

// // // //   /* =======================
// // // //      FETCH SUBCATEGORIES
// // // //   ======================= */
// // // //   useEffect(() => {
// // // //     if (!category) {
// // // //       setSubCategories([]);
// // // //       setSubCategory("");
// // // //       return;
// // // //     }

// // // //     const fetchSubCategories = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${API}/subcategory/${category}`);

// // // //         // ✅ SAFETY CHECK
// // // //         setSubCategories(
// // // //           Array.isArray(res.data.subCategories) ? res.data.subCategories : []
// // // //         );
// // // //       } catch (err) {
// // // //         console.error("SubCategory fetch error", err);
// // // //         setSubCategories([]);
// // // //       }
// // // //     };

// // // //     fetchSubCategories();
// // // //     setSubCategory("");
// // // //   }, [category]);

// // // //   /* =======================
// // // //      UPLOAD VIDEO
// // // //   ======================= */
// // // //   const handleUpload = async () => {
// // // //     try {
// // // //       setLoading(true);

// // // //       const token = localStorage.getItem("token");

// // // //       const formData = new FormData();
// // // //       formData.append("title", title);
// // // //       formData.append("category", category);
// // // //       if (subCategory) formData.append("subCategory", subCategory);
// // // //       formData.append("video", videoFile);

// // // //       await axios.post(`${API}/video/upload`, formData, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           "Content-Type": "multipart/form-data",
// // // //         },
// // // //       });

// // // //       alert("Video uploaded successfully ✅");

// // // //       // RESET
// // // //       setTitle("");
// // // //       setCategory("");
// // // //       setSubCategory("");
// // // //       setSubCategories([]);
// // // //       setVideoFile(null);
// // // //     } catch (err) {
// // // //       alert(err.response?.data?.message || "Upload failed ❌");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
// // // //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800">

// // // //         {/* Header */}
// // // //         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
// // // //           <ArrowLeft size={22} className="text-zinc-400" />
// // // //           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
// // // //         </div>

// // // //         <div className="p-5 space-y-4">

// // // //           {/* Title */}
// // // //           <input
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             placeholder="Enter title"
// // // //             className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white"
// // // //           />

// // // //           {/* Category */}
// // // //           <div className="relative">
// // // //             <select
// // // //               value={category}
// // // //               onChange={(e) => setCategory(e.target.value)}
// // // //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg appearance-none"
// // // //             >
// // // //               <option value="">Select Category</option>
// // // //               {Array.isArray(categories) &&
// // // //                 categories.map((cat) => (
// // // //                   <option key={cat._id} value={cat._id}>
// // // //                     {cat.name}
// // // //                   </option>
// // // //                 ))}
// // // //             </select>
// // // //             <ChevronDown size={16} className="absolute right-4 top-4 text-zinc-400" />
// // // //           </div>

// // // //           {/* SubCategory */}
// // // //           {subCategories.length > 0 && (
// // // //             <div className="relative">
// // // //               <select
// // // //                 value={subCategory}
// // // //                 onChange={(e) => setSubCategory(e.target.value)}
// // // //                 className="w-full px-4 py-3 bg-zinc-800 rounded-lg appearance-none"
// // // //               >
// // // //                 <option value="">Select SubCategory</option>
// // // //                 {subCategories.map((sub) => (
// // // //                   <option key={sub._id} value={sub._id}>
// // // //                     {sub.name}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
// // // //               <ChevronDown size={16} className="absolute right-4 top-4 text-zinc-400" />
// // // //             </div>
// // // //           )}

// // // //           {/* Video */}
// // // //           <input
// // // //             type="file"
// // // //             accept="video/*"
// // // //             onChange={(e) => setVideoFile(e.target.files[0])}
// // // //             className="text-white"
// // // //           />

// // // //           {/* Upload */}
// // // //           <button
// // // //             disabled={!isValid || loading}
// // // //             onClick={handleUpload}
// // // //             className={`w-full py-3 rounded-xl ${
// // // //               isValid ? "bg-red-600" : "bg-zinc-700"
// // // //             }`}
// // // //           >
// // // //             {loading ? "Uploading..." : "Upload Video"}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { ArrowLeft, ChevronDown } from "lucide-react";

// // // // const API = "http://localhost:8000/api";

// // // // export default function UploadVideo() {
// // // //   const [title, setTitle] = useState("");

// // // //   const [categories, setCategories] = useState([]);
// // // //   const [subCategories, setSubCategories] = useState([]);

// // // //   const [category, setCategory] = useState("");
// // // //   const [subCategory, setSubCategory] = useState("");

// // // //   const [videoFile, setVideoFile] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const isValid = title.trim() && category && videoFile;

// // // //   /* =======================
// // // //      FETCH CATEGORIES
// // // //   ======================= */
// // // //   useEffect(() => {
// // // //     const fetchCategories = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${API}/category`);
// // // //         console.log(res.data,"aaaaaaaaaaaaaaaaaaaaaaa")
// // // //         // ✅ SAFE CHECK
// // // //         setCategories(
// // // //           Array.isArray(res.data) ? res.data : []
// // // //         );
// // // //       } catch (error) {
// // // //         console.error("Category fetch error", error);
// // // //         setCategories([]);
// // // //       }
// // // //     };

// // // //     fetchCategories();
// // // //   }, []);

// // // //   /* =======================
// // // //      FETCH SUBCATEGORIES
// // // //   ======================= */
// // // //   useEffect(() => {
// // // //     if (!category) {
// // // //       setSubCategories([]);
// // // //       setSubCategory("");
// // // //       return;
// // // //     }

// // // //     const fetchSubCategories = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${API}/subcategory/${category}`);

// // // //         // ✅ SAFE CHECK
// // // //         setSubCategories(
// // // //           Array.isArray(res.data) ? res.data : []
// // // //         );
// // // //       } catch (error) {
// // // //         console.error("SubCategory fetch error", error);
// // // //         setSubCategories([]);
// // // //       }
// // // //     };

// // // //     fetchSubCategories();
// // // //   }, [category]);

// // // //   /* =======================
// // // //      UPLOAD VIDEO
// // // //   ======================= */
// // // //   const handleUpload = async () => {
// // // //     try {
// // // //       setLoading(true);

// // // //       const token = localStorage.getItem("token");

// // // //       const formData = new FormData();
// // // //       formData.append("title", title);
// // // //       formData.append("category", category);
// // // //       if (subCategory) formData.append("subCategory", subCategory);
// // // //       formData.append("video", videoFile);

// // // //       await axios.post(`${API}/video/upload`, formData, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           "Content-Type": "multipart/form-data",
// // // //         },
// // // //       });

// // // //       alert("Video uploaded successfully ✅");

// // // //       // RESET FORM
// // // //       setTitle("");
// // // //       setCategory("");
// // // //       setSubCategory("");
// // // //       setSubCategories([]);
// // // //       setVideoFile(null);
// // // //     } catch (error) {
// // // //       alert(error.response?.data?.message || "Upload failed ❌");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
// // // //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800">

// // // //         {/* Header */}
// // // //         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
// // // //           <ArrowLeft size={22} className="text-zinc-400" />
// // // //           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
// // // //         </div>

// // // //         <div className="p-5 space-y-4">

// // // //           {/* Title */}
// // // //           <input
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             placeholder="Enter title"
// // // //             className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none"
// // // //           />

// // // //           {/* Category */}
// // // //           <div className="relative">
// // // //             <select
// // // //               value={category}
// // // //               onChange={(e) => setCategory(e.target.value)}
// // // //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none"
// // // //             >
// // // //               <option value="">Select Category</option>
// // // //               {categories.map((cat) => (
// // // //                 <option key={cat._id} value={cat._id}>
// // // //                   {cat.name}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //             <ChevronDown
// // // //               size={16}
// // // //               className="absolute right-4 top-4 text-zinc-400"
// // // //             />
// // // //           </div>

// // // //           {/* SubCategory */}
// // // //           {subCategories.length > 0 && (
// // // //             <div className="relative">
// // // //               <select
// // // //                 value={subCategory}
// // // //                 onChange={(e) => setSubCategory(e.target.value)}
// // // //                 className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none"
// // // //               >
// // // //                 <option value="">Select SubCategory</option>
// // // //                 {subCategories.map((sub) => (
// // // //                   <option key={sub._id} value={sub._id}>
// // // //                     {sub.name}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
// // // //               <ChevronDown
// // // //                 size={16}
// // // //                 className="absolute right-4 top-4 text-zinc-400"
// // // //               />
// // // //             </div>
// // // //           )}

// // // //           {/* Video File */}
// // // //           <input
// // // //             type="file"
// // // //             accept="video/*"
// // // //             onChange={(e) => setVideoFile(e.target.files[0])}
// // // //             className="text-white"
// // // //           />

// // // //           {/* Upload Button */}
// // // //           <button
// // // //             disabled={!isValid || loading}
// // // //             onClick={handleUpload}
// // // //             className={`w-full py-3 rounded-xl font-medium ${
// // // //               isValid
// // // //                 ? "bg-red-600 hover:bg-red-700"
// // // //                 : "bg-zinc-700 cursor-not-allowed"
// // // //             }`}
// // // //           >
// // // //             {loading ? "Uploading..." : "Upload Video"}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { ArrowLeft, ChevronDown } from "lucide-react";

// // // const API = "http://localhost:8000/api";

// // // export default function UploadVideo() {
// // //   const [title, setTitle] = useState("");

// // //   const [categories, setCategories] = useState([]);
// // //   const [subCategories, setSubCategories] = useState([]);

// // //   const [category, setCategory] = useState("");
// // //   const [subCategory, setSubCategory] = useState("");

// // //   const [videoFile, setVideoFile] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const isValid = title.trim() && category && videoFile;

// // //   // Fetch all categories
// // //   useEffect(() => {
// // //     const fetchCategories = async () => {
// // //       try {
// // //         const res = await axios.get(`${API}/category`);
// // //         setCategories(Array.isArray(res.data) ? res.data : []);
// // //       } catch (error) {
// // //         console.error("Category fetch error", error);
// // //         setCategories([]);
// // //       }
// // //     };

// // //     fetchCategories();
// // //   }, []);

// // //   // Fetch subcategories when category changes
// // //   useEffect(() => {
// // //     if (!category) {
// // //       setSubCategories([]);
// // //       setSubCategory("");
// // //       return;
// // //     }

// // //     const fetchSubCategories = async () => {
// // //       try {
// // //         const res = await axios.get(`${API}/subcategory/${category}`);
// // //         setSubCategories(Array.isArray(res.data) ? res.data : []);
// // //       } catch (error) {
// // //         console.error("SubCategory fetch error", error);
// // //         setSubCategories([]);
// // //       }
// // //     };

// // //     fetchSubCategories();
// // //   }, [category]);

// // //   // NEW: When user selects a subcategory, make sure the correct category is selected
// // //   const handleSubCategoryChange = (e) => {
// // //     const selectedSubId = e.target.value;
// // //     setSubCategory(selectedSubId);

// // //     // If subcategory is selected, find its parent category and set it
// // //     if (selectedSubId) {
// // //       let foundCategory = null;

// // //       // Search through all categories to find which one owns this subcategory
// // //       for (const cat of categories) {
// // //         // You may need to fetch or have parent info — assuming backend can help
// // //         // Alternative: Make API call to get parent category of this subCategory
// // //         // For now — simplest way if you have subcategory data with parent reference
// // //         // If your subcategory object has "category" field (parent id):
// // //         // const sub = subCategories.find(s => s._id === selectedSubId);
// // //         // if (sub?.category) setCategory(sub.category);

// // //         // If not — you can add a small API call or pre-load all subcategories with parent
// // //       }

// // //       // Most common & clean solution: assume subcategory has "category" field (parent id)
// // //       const selectedSub = subCategories.find((sub) => sub._id === selectedSubId);
// // //       if (selectedSub?.category) {
// // //         setCategory(selectedSub.category); // auto-set parent category
// // //       }
// // //     }
// // //   };

// // //   const handleUpload = async () => {
// // //     try {
// // //       setLoading(true);

// // //       const token = localStorage.getItem("token");

// // //       const formData = new FormData();
// // //       formData.append("title", title);
// // //       formData.append("category", category);
// // //       if (subCategory) formData.append("subCategory", subCategory);
// // //       formData.append("video", videoFile);

// // //       await axios.post(`${API}/video/upload`, formData, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //           "Content-Type": "multipart/form-data",
// // //         },
// // //       });

// // //       alert("Video uploaded successfully ✅");

// // //       // Reset form
// // //       setTitle("");
// // //       setCategory("");
// // //       setSubCategory("");
// // //       setSubCategories([]);
// // //       setVideoFile(null);
// // //     } catch (error) {
// // //       alert(error.response?.data?.message || "Upload failed ❌");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
// // //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800">
// // //         {/* Header */}
// // //         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
// // //           <ArrowLeft size={22} className="text-zinc-400" />
// // //           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
// // //         </div>

// // //         <div className="p-5 space-y-4">
// // //           {/* Title */}
// // //           <input
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             placeholder="Enter title"
// // //             className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none"
// // //           />

// // //           {/* Category */}
// // //           <div className="relative">
// // //             <select
// // //               value={category}
// // //               onChange={(e) => setCategory(e.target.value)}
// // //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none"
// // //             >
// // //               <option value="">Select Category</option>
// // //               {categories.map((cat) => (
// // //                 <option key={cat._id} value={cat._id}>
// // //                   {cat.name}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <ChevronDown
// // //               size={16}
// // //               className="absolute right-4 top-4 text-zinc-400 pointer-events-none"
// // //             />
// // //           </div>

// // //           {/* SubCategory - only show if there are options */}
// // //           {subCategories.length > 0 && (
// // //             <div className="relative">
// // //               <select
// // //                 value={subCategory}
// // //                 onChange={handleSubCategoryChange}  
// // //                 className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none"
// // //               >
// // //                 <option value="">Select SubCategory (optional)</option>
// // //                 {subCategories.map((sub) => (
// // //                   <option key={sub._id} value={sub._id}>
// // //                     {sub.name}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //               <ChevronDown
// // //                 size={16}
// // //                 className="absolute right-4 top-4 text-zinc-400 pointer-events-none"
// // //               />
// // //             </div>
// // //           )}

// // //           {/* Video File */}
// // //           <div className="text-white">
// // //             <input
// // //               type="file"
// // //               accept="video/*"
// // //               onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
// // //               className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zinc-700 file:text-white hover:file:bg-zinc-600"
// // //             />
// // //           </div>

// // //           {/* Upload Button */}
// // //           <button
// // //             disabled={!isValid || loading}
// // //             onClick={handleUpload}
// // //             className={`w-full py-3 rounded-xl font-medium transition-colors ${
// // //               isValid && !loading
// // //                 ? "bg-red-600 hover:bg-red-700"
// // //                 : "bg-zinc-700 cursor-not-allowed opacity-60"
// // //             }`}
// // //           >
// // //             {loading ? "Uploading..." : "Upload Video"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { ArrowLeft, ChevronDown } from "lucide-react";

// // const API = "http://localhost:8000/api";

// // export default function UploadVideo() {
// //   const [title, setTitle] = useState("");
// //   const [categories, setCategories] = useState([]);
// //   const [allSubCategories, setAllSubCategories] = useState([]); // we'll load all for reverse lookup
// //   const [filteredSubCategories, setFilteredSubCategories] = useState([]);

// //   const [category, setCategory] = useState("");
// //   const [subCategory, setSubCategory] = useState("");

// //   const [videoFile, setVideoFile] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const isValid = title.trim() && category && videoFile;

// //   // Fetch all categories
// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const res = await axios.get(`${API}/category`);
// //         setCategories(Array.isArray(res.data) ? res.data : []);
// //       } catch (error) {
// //         console.error("Category fetch error", error);
// //         setCategories([]);
// //       }
// //     };
// //     fetchCategories();
// //   }, []);

// //   // Fetch ALL subcategories once (so we can do reverse lookup: sub → category)
// //   useEffect(() => {
// //     const fetchAllSubCategories = async () => {
// //       try {
// //         // Assuming you have an endpoint that returns ALL subcategories
// //         // If not, change to your actual endpoint or fetch per category and merge
// //         const res = await axios.get(`${API}/subcategory`); // ← adjust endpoint if needed
// //         const subs = Array.isArray(res.data) ? res.data : [];
// //         setAllSubCategories(subs);
// //       } catch (error) {
// //         console.error("All SubCategories fetch error", error);
// //         setAllSubCategories([]);
// //       }
// //     };
// //     fetchAllSubCategories();
// //   }, []);

// //   // When category is selected → filter subcategories
// //   useEffect(() => {
// //     if (!category) {
// //       setFilteredSubCategories(allSubCategories);
// //       return;
// //     }

// //     const filtered = allSubCategories.filter(
// //       (sub) => sub.category === category || sub.category?._id === category
// //     );
// //     setFilteredSubCategories(filtered);

// //     // If current subcategory doesn't belong to this category → clear it
// //     if (
// //       subCategory &&
// //       !filtered.some((sub) => sub._id === subCategory)
// //     ) {
// //       setSubCategory("");
// //     }
// //   }, [category, allSubCategories, subCategory]);

// //   // When subcategory is selected → auto select its parent category
// //   const handleSubCategoryChange = (e) => {
// //     const subId = e.target.value;
// //     setSubCategory(subId);

// //     if (subId) {
// //       const selectedSub = allSubCategories.find((sub) => sub._id === subId);
// //       if (selectedSub?.category) {
// //         // assuming subcategory has "category" field with the parent _id
// //         const parentId =
// //           typeof selectedSub.category === "object"
// //             ? selectedSub.category._id
// //             : selectedSub.category;

// //         setCategory(parentId);
// //       }
// //     }
// //   };

// //   const handleUpload = async () => {
// //     try {
// //       setLoading(true);
// //       const token = localStorage.getItem("token");

// //       const formData = new FormData();
// //       formData.append("title", title);
// //       formData.append("category", category);
// //       if (subCategory) formData.append("subCategory", subCategory);
// //       formData.append("video", videoFile);

// //       await axios.post(`${API}/video/upload`, formData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });

// //       alert("Video uploaded successfully ✅");

// //       setTitle("");
// //       setCategory("");
// //       setSubCategory("");
// //       setFilteredSubCategories([]);
// //       setVideoFile(null);
// //     } catch (error) {
// //       alert(error.response?.data?.message || "Upload failed ❌");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
// //       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800">
// //         {/* Header */}
// //         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
// //           <ArrowLeft size={22} className="text-zinc-400" />
// //           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
// //         </div>

// //         <div className="p-5 space-y-4">
// //           {/* Title */}
// //           <input
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             placeholder="Enter title"
// //             className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none"
// //           />

// //           {/* Category - always visible */}
// //           <div className="relative">
// //             <select
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none"
// //             >
// //               <option value="">Select Category</option>
// //               {categories.map((cat) => (
// //                 <option key={cat._id} value={cat._id}>
// //                   {cat.name}
// //                 </option>
// //               ))}
// //             </select>
// //             <ChevronDown
// //               size={16}
// //               className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
// //             />
// //           </div>

// //           {/* SubCategory - always visible */}
// //           <div className="relative">
// //             <select
// //               value={subCategory}
// //               onChange={handleSubCategoryChange}
// //               className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none"
// //               disabled={allSubCategories.length === 0}
// //             >
// //               <option value="">Select SubCategory (optional)</option>
// //               {filteredSubCategories.map((sub) => (
// //                 <option key={sub._id} value={sub._id}>
// //                   {sub.name}
// //                 </option>
// //               ))}
// //             </select>
// //             <ChevronDown
// //               size={16}
// //               className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
// //             />
// //           </div>

// //           {/* Video */}
// //           <div>
// //             <input
// //               type="file"
// //               accept="video/*"
// //               onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
// //               className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zinc-700 file:text-white hover:file:bg-zinc-600"
// //             />
// //           </div>

// //           {/* Upload Button */}
// //           <button
// //             disabled={!isValid || loading}
// //             onClick={handleUpload}
// //             className={`w-full py-3 rounded-xl font-medium transition ${
// //               isValid && !loading
// //                 ? "bg-red-600 hover:bg-red-700 text-white"
// //                 : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
// //             }`}
// //           >
// //             {loading ? "Uploading..." : "Upload Video"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { ArrowLeft, ChevronDown } from "lucide-react";

// const API = "http://localhost:8000/api";

// export default function UploadVideo() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState(""); // Optional: added description field
//   const [categories, setCategories] = useState([]);
//   const [allSubCategories, setAllSubCategories] = useState([]);
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);

//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [videoType, setVideoType] = useState("short"); // NEW: short or long video

//   const [videoFile, setVideoFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const isValid = title.trim() && category && videoFile;

//   // Fetch all categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(`${API}/category`);
//         setCategories(Array.isArray(res.data) ? res.data : []);
//       } catch (error) {
//         console.error("Category fetch error", error);
//         setCategories([]);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Fetch ALL subcategories once (for reverse lookup)
//   useEffect(() => {
//     const fetchAllSubCategories = async () => {
//       try {
//         const res = await axios.get(`${API}/subcategory`); // adjust if no all-subcategory endpoint
//         const subs = Array.isArray(res.data) ? res.data : [];
//         setAllSubCategories(subs);
//       } catch (error) {
//         console.error("All SubCategories fetch error", error);
//         setAllSubCategories([]);
//       }
//     };
//     fetchAllSubCategories();
//   }, []);

//   // Filter subcategories when category changes
//   useEffect(() => {
//     if (!category) {
//       setFilteredSubCategories(allSubCategories);
//       return;
//     }

//     const filtered = allSubCategories.filter(
//       (sub) => sub.category === category || sub.category?._id === category
//     );
//     setFilteredSubCategories(filtered);

//     // Clear subcategory if it doesn't match current category
//     if (subCategory && !filtered.some((sub) => sub._id === subCategory)) {
//       setSubCategory("");
//     }
//   }, [category, allSubCategories, subCategory]);

//   // When subcategory selected → auto-set its parent category
//   const handleSubCategoryChange = (e) => {
//     const subId = e.target.value;
//     setSubCategory(subId);

//     if (subId) {
//       const selectedSub = allSubCategories.find((sub) => sub._id === subId);
//       if (selectedSub?.category) {
//         const parentId =
//           typeof selectedSub.category === "object"
//             ? selectedSub.category._id
//             : selectedSub.category;
//         setCategory(parentId);
//       }
//     }
//   };

//   const handleUpload = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description); // Optional
//       formData.append("category", category);
//       if (subCategory) formData.append("subCategory", subCategory);
//       formData.append("videoType", videoType); // NEW: short or long
//       formData.append("video", videoFile);

//       await axios.post(`${API}/video/upload`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Video uploaded successfully ✅");

//       // Reset form
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setSubCategory("");
//       setVideoType("short");
//       setVideoFile(null);
//     } catch (error) {
//       alert(error.response?.data?.message || "Upload failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-4">
//       <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center px-5 py-4 border-b border-zinc-800">
//           <ArrowLeft size={22} className="text-zinc-400" />
//           <h1 className="ml-3 text-lg font-semibold">Upload Video</h1>
//         </div>

//         <div className="p-5 space-y-5">
//           {/* Title */}
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter video title"
//             className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600"
//           />

//           {/* Description (optional) */}
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter description (optional)"
//             rows={3}
//             className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600 resize-none"
//           />

//           {/* Video Type (Short / Long) */}
//           <div className="flex gap-3">
//             <button
//               type="button"
//               onClick={() => setVideoType("short")}
//               className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
//                 videoType === "short"
//                   ? "bg-red-600 text-white"
//                   : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
//               }`}
//             >
//               Short Video
//             </button>
//             <button
//               type="button"
//               onClick={() => setVideoType("long")}
//               className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
//                 videoType === "long"
//                   ? "bg-red-600 text-white"
//                   : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
//               }`}
//             >
//               Long Video
//             </button>
//           </div>

//           {/* Category */}
//           <div className="relative">
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none focus:ring-2 focus:ring-red-600"
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               size={16}
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
//             />
//           </div>

//           {/* SubCategory */}
//           <div className="relative">
//             <select
//               value={subCategory}
//               onChange={handleSubCategoryChange}
//               className="w-full px-4 py-3 bg-zinc-800 rounded-lg text-white appearance-none focus:ring-2 focus:ring-red-600"
//               disabled={allSubCategories.length === 0}
//             >
//               <option value="">Select SubCategory (optional)</option>
//               {filteredSubCategories.map((sub) => (
//                 <option key={sub._id} value={sub._id}>
//                   {sub.name}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               size={16}
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
//             />
//           </div>

//           {/* Video File */}
//           <div className="space-y-2">
//             <label className="block text-sm text-zinc-400">Upload Video</label>
//             <input
//               type="file"
//               accept="video/*"
//               onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
//               className="block w-full text-sm text-zinc-400 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zinc-700 file:text-white hover:file:bg-zinc-600 transition"
//             />
//           </div>

//           {/* Upload Button */}
//           <button
//             disabled={!isValid || loading}
//             onClick={handleUpload}
//             className={`w-full py-4 rounded-xl font-medium text-lg transition-all transform hover:scale-105 ${
//               isValid && !loading
//                 ? "bg-red-600 hover:bg-red-700 text-white"
//                 : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Uploading..." : "Upload Video"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
      (sub) => sub.category === category || sub.category?._id === category
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
