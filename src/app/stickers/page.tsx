import Banner, { ImageProps } from "@/components/Banner";
import Footer from "@/components/Footer";
import ItemDisplay from "@/components/ItemDisplay";
import NavBar from "@/components/NavBar";
import Spacer from "@/components/Spacer";

import Image from "next/image";
import { ReactElement } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Stickers() {
  const bannerImgProps: ImageProps = {
    src: `${BASE_PATH}/images/test4.png`,
    alt: "test banner img"
  }

  const itemList: ReactElement[] = [
    <div className="relative w-96 h-96">
      <Image
        src={`${BASE_PATH}/stickers/whalelogo-transparent.png`}
        alt="Whale Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-96 h-96">
      <Image
        src={`${BASE_PATH}/stickers/polarski-transparent.png`}
        alt="Polar Ski Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-96 h-96">
      <Image
        src={`${BASE_PATH}/stickers/bouldotter-transparent.png`}
        alt="Bouldotter Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-96 h-96">
      <Image
        src={`${BASE_PATH}/stickers/bigneedle-transparent.png`}
        alt="Bigneedle Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-96 h-96">
      <Image
        src={`${BASE_PATH}/stickers/bouldotter-transparent.png`}
        alt="Bouldotter Sticker"
        fill
        className="object-contain"
      />
    </div>,
    <div className="relative w-96 h-96">
      <Image
        src={`${BASE_PATH}/stickers/bigneedle-transparent.png`}
        alt="Bigneedle Sticker"
        fill
        className="object-contain"
      />
    </div>
  ]

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <NavBar/>
        <Banner
          height={85}
          img={bannerImgProps}
          title={"Stickers"}
          subtitle={"Check out and purchase our stickers!"}
        />

        <Spacer
          height={5}
        />

        {/* New designs */}
        <ItemDisplay
          items={itemList}
        />

        <Spacer
          height={5}
        />

        {/* List of sticker designs - see more button for all */}
        <Footer/>
      </main>
    </div>
  );
}