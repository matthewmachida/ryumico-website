import PhotoCarousel from "@/components/PhotoCarousel";
import NavBar from "@/components/NavBar";
import PhotoAndText from "@/components/PhotoAndText";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ItemCarousel from "@/components/ItemCarousel";
import { ReactElement } from "react";
import CenteredHeader from "@/components/CenteredHeader";
import Image from "next/image";

export default function Home() {
  const list = [
    {
      src: "/images/test2.png",
      alt:"carousel 1"
    },
    {
      src: "/images/test3.png",
      alt: "carousel 2"
    },
    {
      src: "/images/test4.png",
      alt: "carousel 3",
    }
  ];

  const itemList: ReactElement[] = [
    <div className="relative w-full h-full">
      <Image
        src="/stickers/whalelogo-transparent.png"
        alt="Whale Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-full h-full">
      <Image
        src="/stickers/polarski-transparent.png"
        alt="Polar Ski Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-full h-full">
      <Image
        src="/stickers/bouldotter-transparent.png"
        alt="Bouldotter Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-full h-full">
      <Image
        src="/stickers/bigneedle-transparent.png"
        alt="Bigneedle Sticker"
        fill
        className="object-contain"
      />
    </div>
  ]

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <div className="flex flex-col items-center justify-center">
          {/* Header navigation bar */}
          <NavBar/>

          {/* Banner photo carousel */}
          <PhotoCarousel
            slides={list}
            height={85}
            title={"Ryumico Co."}
            subtitle={"Welcome to Ryumico Sticker Co.!"}
            titleSrc={"/logos/title-logo.png"}
            titleAlt={"Ryumico Logo"}
          />

          <Spacer height={5}/>

          {/* Welcome blurb */}
          <PhotoAndText
            src="/images/test2.png"
            alt="test photo"
            header="Ryumico Sticker Co."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />

          <Spacer height={7}/>

          {/* Sticker carousel */}
          <CenteredHeader
            text="Stickers"
            subtitle="Check out our sticker designs!"
          />
          <ItemCarousel
            items={itemList}
          />

          <Spacer height={5}/>

          {/* Contact us */}
          <Contact/>

          <Spacer height={5}/>

          {/* Footer */}
          <Footer/>
        </div>
      </main>
    </div>
  );
}
