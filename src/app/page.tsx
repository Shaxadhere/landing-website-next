import Hero from "@/components/globals/home/Hero";
import { StickyScroll } from "@/components/globals/sections/sticky-scroll-reveal";
import { stickyScrollContent } from "@/constants/content/home.content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <StickyScroll content={stickyScrollContent} />
    </main>
  );
}
