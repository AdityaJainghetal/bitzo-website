import TopicChips from '../components/common/TopicChips'
import VideoGrid from '../components/common/VideoGrid' // you can make this or keep inline
// import ShortsSection from '../components/common/ShortsSection'

export default function Home() {
  return (
    <div>
      <TopicChips />
      <VideoGrid />
      {/* <ShortsSection /> */}
    </div>
  )
}