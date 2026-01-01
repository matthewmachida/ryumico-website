import Banner from "@/components/Banner";
import ItemDisplay from "@/components/ItemDisplay";
import Spacer from "@/components/Spacer";
import { allStickersList, stickerPageImages, stickerPageText } from "@/data/stickerpage";

import Image from "next/image";
import { ReactElement } from "react";

export default function Stickers() {
  const bannerImgProps = stickerPageImages.banner;
  const itemList: ReactElement[] = [];
  allStickersList.forEach((item) => {
    itemList.push(
      <div className="relative w-96 h-96">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
        />
      </div>
    );
  });
  allStickersList.forEach((item) => {
    itemList.push(
      <div className="relative w-96 h-96">
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
        <Banner
          img={bannerImgProps}
          title={stickerPageText.bannerTitle}
          subtitle={stickerPageText.bannerSubtitle}
        />

        <Spacer
          height={5}
        />

        {/* New designs */}

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