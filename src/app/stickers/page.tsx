"use client"

import Banner from "@/components/Banner";
import CenteredHeader from "@/components/CenteredHeader";
import ItemDisplay from "@/components/ItemDisplay";
import PurchaseSticker from "@/components/PurchaseSticker";
import Spacer from "@/components/Spacer";
import { allStickersList, stickerPageImages, stickerPageText } from "@/data/stickerpage";
import { nullSticker, removeSuffixFromAlt, Sticker } from "@/lib/stickers";

import Image from "next/image";
import { ReactElement, useState } from "react";

export default function Stickers() {
  const [displaySticker, setDisplaySticker] = useState(false);
  const [sticker, setSticker] = useState<Sticker>(nullSticker)

  const bannerImgProps = stickerPageImages.banner;
  const itemList: ReactElement[] = [];
  allStickersList.forEach((item) => {
    itemList.push(
      <div className="relative w-96 h-96">
        <button
          onClick={() => {
            if (sticker.src === item.src) {
              setDisplaySticker(false);
              setSticker(nullSticker);
            } else {
              setSticker({name: removeSuffixFromAlt(item.alt), src: item.src, alt: item.alt});
              setDisplaySticker(true);
            }
          }}
          className="relative w-full h-96"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
          />
        </button>
      </div>
    );
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <Banner
          img={bannerImgProps}
          title={stickerPageText.bannerTitle}
          subtitle={stickerPageText.bannerSubtitle}
        />

        <Spacer
          height={7}
        />

        <CenteredHeader
          text={stickerPageText.stickerHeader}
        />

        <Spacer
          height={3}
        />

        {
          displaySticker && (sticker != undefined) && (
            <PurchaseSticker
              sticker={sticker}
            />
          )
        }

        {/* List of sticker designs - see more button for all */}
        <ItemDisplay
          items={itemList}
        />

        <Spacer
          height={5}
        />
      </main>
    </div>
  );
}