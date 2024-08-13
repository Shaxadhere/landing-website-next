import CardsSection from "@/components/globals/home/CardsSection";
import Hero from "@/components/globals/home/Hero";
import {
  Carousel,
  Card,
} from "@/components/globals/sections/apple-cards-carousel";
import { StickyScroll } from "@/components/globals/sections/sticky-scroll-reveal";
import {
  carouselContent,
  stickyScrollContent,
} from "@/constants/content/home.content";

export default function Home() {
  const cards = carouselContent.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <StickyScroll content={stickyScrollContent} />
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-gray-100 dark:text-neutral-200 font-sans">
          Get to know your iSad.
        </h2>
        <Carousel items={cards} />
      </div>
      <CardsSection/>
    </main>
  );
}
