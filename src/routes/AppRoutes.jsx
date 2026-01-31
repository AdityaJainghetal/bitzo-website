import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Shorts from '../pages/Shorts'
import Trending from '../pages/Trending'
import WatchPage from '../components/common/WatchPage'
import NotFound from '../pages/NotFound'
import WithdrawPage from '../components/common/WithdrawPage'
import UploadVideo from '../pages/UploadVideo/UploadVideoScreen'
import Profile from '../pages/MyProfile'
import ReelPlayerPage from '../components/common/ReelPlayerPage'
import FullVideo from '../pages/UploadVideo/FullVideo'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="trending" element={<Trending />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/withdraw" element={<WithdrawPage/>} />
        <Route path="/uploadvideo" element={<UploadVideo/>} />
        <Route path="/reel" element={<ReelPlayerPage />} />
        <Route path="/fullvideo/:id" element={<FullVideo />} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="Playvideo" element={<PlayOverlay/>} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}