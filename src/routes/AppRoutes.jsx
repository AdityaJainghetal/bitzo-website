
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedLayout from "../pages/Login.jsx/ProtectiveRoute/ProtectedRoute";
import Home from "../pages/Home";
import Shorts from "../pages/Shorts";
import Trending from "../pages/Trending";
import NotFound from "../pages/NotFound";
import WatchPage from "../components/common/WatchPage";
import WithdrawPage from "../components/common/WithdrawPage";
import UploadVideo from "../pages/UploadVideo/UploadVideoScreen";
import Profile from "../pages/MyProfile";
import ReelPlayerPage from "../components/common/ReelPlayerPage";
import FullVideo from "../pages/UploadVideo/FullVideo";

import AuthPage from "../pages/Login.jsx/AuthPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      {/* <Route path="/register" element={<AuthPage />} /> */}

      {/* 🔐 Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="trending" element={<Trending />} />
          <Route path="watch/:id" element={<WatchPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="uploadvideo" element={<UploadVideo />} />
          <Route path="reel" element={<ReelPlayerPage />} />
          <Route path="video/:id" element={<FullVideo />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
