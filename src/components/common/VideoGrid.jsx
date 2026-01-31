
import { useState, useEffect } from "react";
import { ChevronRight, Play } from "lucide-react";

const recentShorts = [
  { id: 1, dur: "1:40", thumb: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=500&fit=crop" },
  { id: 2, dur: "1:00", thumb: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=500&fit=crop" },
  { id: 3, dur: "2:40", thumb: "https://images.unsplash.com/photo-1571759560077-65296cc77dfd?w=300&h=500&fit=crop" },
  { id: 4, dur: "0:55", thumb: "https://images.unsplash.com/photo-1552250575-67576307f935?w=300&h=500&fit=crop" },
  { id: 5, dur: "1:22", thumb: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=500&fit=crop" },
  { id: 6, dur: "0:48", thumb: "https://images.unsplash.com/photo-1470146718580-010796192dd8?w=300&h=500&fit=crop" },
];

const topShorts = [
  { id:1, title:"High Earning Video", creator:"@Swaet",     earn:"₹500",    thumb:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=560&fit=crop" },
  { id:2, title:"High Earning Video", creator:"@Crimflow",  earn:"₹162.00", thumb:"https://images.unsplash.com/photo-1470146718580-010796192dd8?w=400&h=560&fit=crop" },
  { id:3, title:"High Earning Video", creator:"@ZarnMore",  earn:"₹81.00",  thumb:"https://images.unsplash.com/photo-1551244653-a5a5a1ace188?w=400&h=560&fit=crop" },
  { id:4, title:"Top Earning Short",  creator:"@NatureVib", earn:"₹240.00", thumb:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=560&fit=crop" },
  { id:5, title:"Viral Street Food",  creator:"@FoodieMP",  earn:"₹95.00",  thumb:"https://images.unsplash.com/photo-1470146718580-010796192dd8?w=400&h=560&fit=crop" },
  { id:6, title:"Sunset Timelapse",   creator:"@NatureVib", earn:"₹180.00", thumb:"https://images.unsplash.com/photo-1551244653-a5a5a1ace188?w=400&h=560&fit=crop" },
];

const earnMore = [
  { id:1, earn:"$1.30", thumb:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { id:2, earn:"₹9.40", thumb:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { id:3, earn:"₹3.00", thumb:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
  { id:4, earn:"₹5.70", thumb:"https://images.unsplash.com/photo-1544148921-1e6f2134d89d?w=300&h=300&fit=crop" },
  { id:5, earn:"₹7.20", thumb:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { id:6, earn:"₹4.10", thumb:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
];

const creators = [
  { id:1, vids:["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=220&h=290&fit=crop","https://images.unsplash.com/photo-1470146718580-010796192dd8?w=220&h=290&fit=crop"] },
  { id:2, vids:["https://images.unsplash.com/photo-1551244653-a5a5a1ace188?w=220&h=290&fit=crop","https://images.unsplash.com/photo-1544145945-f90425340c7e?w=220&h=290&fit=crop"] },
  { id:3, vids:["https://images.unsplash.com/photo-1571759560077-65296cc77dfd?w=220&h=290&fit=crop","https://images.unsplash.com/photo-1552250575-67576307f935?w=220&h=290&fit=crop"] },
  { id:4, vids:["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=220&h=290&fit=crop","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=220&h=290&fit=crop"] },
  { id:5, vids:["https://images.unsplash.com/photo-1470146718580-010796192dd8?w=220&h=290&fit=crop","https://images.unsplash.com/photo-1551244653-a5a5a1ace188?w=220&h=290&fit=crop"] },
];

function useWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function PlayOverlay({ size = 40 }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-black/55 backdrop-blur-sm border-2 border-white/25 pointer-events-none"
      style={{ width: size, height: size }}
    >
      <Play size={size * 0.42} fill="white" color="white" strokeWidth={0} className="ml-0.5" />
    </div>
  );
}

function BottomGradient({ opacity = 0.6 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{ background: `linear-gradient(to top, rgba(0,0,0,${opacity}) 0%, transparent 55%)` }}
    />
  );
}

function SectionHeader({ title }) {
  return (
    <div className="mb-3 flex items-center justify-between md:mb-4">
      <h2 className="text-[17px] font-bold tracking-tight text-white md:text-[19px]">
        {title}
      </h2>
      <div className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer">
        See All <ChevronRight size={15} />
      </div>
    </div>
  );
}

function RecentRow() {
  const isMobile = useWidth() < 768;
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide md:gap-3.5">
      {recentShorts.map((item) => (
        <div
          key={item.id}
          className={`flex-shrink-0 rounded-lg overflow-hidden relative bg-zinc-900 cursor-pointer transition-transform duration-200 hover:scale-[1.035] ${
            isMobile ? "w-[108px] h-[148px]" : "w-[148px] h-[200px]"
          }`}
        >
          <img src={item.thumb} alt="" className="h-full w-full object-cover" />
          <BottomGradient opacity={0.5} />
          <PlayOverlay size={isMobile ? 36 : 42} />
          <div className="absolute bottom-1.5 right-1.5 z-20 rounded bg-black/60 px-1.5 py-0.5 text-[10.5px] font-medium text-white backdrop-blur-md">
            {item.dur}
          </div>
        </div>
      ))}
    </div>
  );
}

function TopShortsSection() {
  const isMobile = useWidth() < 768;

  if (isMobile) {
    return (
      <div>
        <SectionHeader title="Top Shorts" />
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
          {topShorts.map((item) => (
            <div key={item.id} className="w-[153px] flex-shrink-0 cursor-pointer">
              <div className="relative h-[204px] w-full rounded-lg overflow-hidden bg-zinc-900 transition-transform duration-200 hover:scale-[1.025]">
                <img src={item.thumb} alt="" className="h-full w-full object-cover" />
                <BottomGradient opacity={0.7} />
                <PlayOverlay size={38} />
                <div className="absolute bottom-2 left-2 z-20 flex max-w-[calc(100%-16px)] items-center gap-1.5 rounded bg-black/60 px-2 py-1 text-xs backdrop-blur-md">
                  <span>🔥</span>
                  <span className="font-semibold text-white truncate">{item.title}</span>
                </div>
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-zinc-400">
                <span>💰</span>
                <span className="font-medium text-zinc-300">{item.earn}</span>
                <span className="text-zinc-700">•</span>
                <span className="text-zinc-500">{item.creator}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title="Top Shorts" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {topShorts.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[9/13] rounded-xl overflow-hidden bg-zinc-900 transition-all duration-250 group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-black/40">
              <img src={item.thumb} alt="" className="h-full w-full object-cover" />
              <BottomGradient opacity={0.7} />
              <PlayOverlay size={44} />
              <div className="absolute bottom-3 left-3 z-20 flex max-w-[calc(100%-24px)] items-center gap-2 rounded-lg bg-black/65 px-3 py-1.5 text-sm backdrop-blur-md">
                <span className="text-base">🔥</span>
                <span className="font-semibold text-white truncate">{item.title}</span>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-sm">
              <span>💰</span>
              <span className="font-medium text-zinc-200">{item.earn}</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-500">{item.creator}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EarnMoreSection() {
  const isMobile = useWidth() < 768;

  if (isMobile) {
    return (
      <div>
        <SectionHeader title="Earn More, Watch More" />
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
          {earnMore.map((item) => (
            <div
              key={item.id}
              className="relative h-[132px] w-[132px] flex-shrink-0 rounded-lg overflow-hidden bg-zinc-900 cursor-pointer transition-transform hover:scale-105 duration-200"
            >
              <img src={item.thumb} alt="" className="h-full w-full object-cover" />
              <BottomGradient opacity={0.55} />
              <PlayOverlay size={32} />
              <div className="absolute bottom-1.5 left-1.5 z-20 rounded bg-black/60 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                {item.earn}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title="Earn More, Watch More" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {earnMore.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:scale-[1.025] hover:shadow-xl hover:shadow-black/35"
          >
            <img src={item.thumb} alt="" className="h-full w-full object-cover" />
            <BottomGradient opacity={0.55} />
            <PlayOverlay size={38} />
            <div className="absolute bottom-3 left-3 z-20 rounded bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
              {item.earn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreatorSection() {
  const isMobile = useWidth() < 768;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between md:mb-4">
        <h2 className="text-[17px] font-bold tracking-tight text-white md:text-[19px]">
          Recommended
        </h2>
        <ChevronRight size={18} className="text-zinc-500 cursor-pointer" />
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 md:gap-6 animate-marquee whitespace-nowrap py-2"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {creators.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 md:gap-4 min-w-[240px] md:min-w-[320px]"
            >
              {item.vids.map((vid, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 rounded-lg overflow-hidden relative bg-zinc-900 transition-transform duration-200 hover:scale-[1.04] ${
                    isMobile ? "w-[110px] h-[150px]" : "w-[150px] h-[200px]"
                  }`}
                >
                  <img src={vid} alt="" className="h-full w-full object-cover" />
                  <BottomGradient opacity={0.5} />
                  <PlayOverlay size={isMobile ? 32 : 40} />
                </div>
              ))}
            </div>
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {creators.map((item) => (
            <div
              key={"dup-" + item.id}
              className="flex gap-3 md:gap-4 min-w-[240px] md:min-w-[320px]"
              aria-hidden="true"
            >
              {item.vids.map((vid, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 rounded-lg overflow-hidden relative bg-zinc-900 transition-transform duration-200 hover:scale-[1.04] ${
                    isMobile ? "w-[110px] h-[150px]" : "w-[150px] h-[200px]"
                  }`}
                >
                  <img src={vid} alt="" className="h-full w-full object-cover" />
                  <BottomGradient opacity={0.5} />
                  <PlayOverlay size={isMobile ? 32 : 40} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShortsExplorePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pb-10 md:pb-16">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 pt-5 md:gap-10 md:px-6 lg:px-8">
        <RecentRow />
        <TopShortsSection />
        <EarnMoreSection />
        <CreatorSection />
      </div>
    </div>
  );
}