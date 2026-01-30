import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Shorts from '../pages/Shorts'
import Trending from '../pages/Trending'
import WatchPage from '../components/common/WatchPage'
import NotFound from '../pages/NotFound'
import WithdrawPage from '../components/common/WithdrawPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="trending" element={<Trending />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/withdraw" element={<WithdrawPage/>} />
        {/* Add more routes like /watch/:id, /channel/:id later */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}