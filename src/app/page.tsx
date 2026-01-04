import CenteredElement from "@/components/CenteredElement";
import CenteredHeader from "@/components/CenteredHeader";
import Contact from "@/components/Contact";
import ItemCarousel from "@/components/ItemCarousel";
import PhotoAndText from "@/components/PhotoAndText";
import PhotoCarousel from "@/components/PhotoCarousel";
import Spacer from "@/components/Spacer";
import { homeImages, homeItemList, homeText } from "@/data/home";
import { testImages } from "@/data/images";

import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const itemList: ReactElement[] = [];
  homeItemList.forEach((item) => {
    itemList.push(
      <div className="relative w-full h-full">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
        />
      </div>
    );
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <div className="flex flex-col items-center justify-center">
          {/* Banner photo carousel */}
          <PhotoCarousel
            slides={homeImages.photoCarousel}
            title={homeText.bannerTitle}
            subtitle={homeText.bannerSubtitle}
            titleSrc={homeImages.bannerImgSrc}
            titleAlt={homeImages.bannerImgAlt}
          />

          <Spacer height={5}/>

          {/* Welcome blurb */}
          <PhotoAndText
            src={testImages.img2.src}
            alt={testImages.img2.alt}
            header={homeText.introHeader}
            text={homeText.introText}
          />

          <Spacer height={7}/>

          {/* New designs */}

          {/* Sticker carousel */}
          <CenteredHeader
            text={homeText.itemsHeader}
            subtitle={homeText.itemsSubtitle}
          />
          <ItemCarousel
            items={itemList}
          />
          <CenteredElement
            element={
              <Link href="/stickers">
                <button className="standard-button">
                  {homeText.stickerPageBtn}
                </button>
              </Link>
            }
          />

          <Spacer height={5}/>

          {/* Contact us */}
          <Contact/>

          <Spacer height={5}/>
        </div>
      </main>
    </div>
  );
}
