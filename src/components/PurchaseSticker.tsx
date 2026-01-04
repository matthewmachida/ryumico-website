import { Sticker } from "@/lib/stickers";
import Image from "next/image";

type PurchaseStickerProps = {
  sticker: Sticker
}

export default function PurchaseSticker(props: PurchaseStickerProps) {
  return (
    <div className="relative w-full h-120 bg-red-300">
      {/* Foreground photo and text */}
      <div className="relative w-full h-120 z-10 flex flex-row items-center justify-center">
        {/* Photo */}
        <div className="relative w-1/2 h-120 m-8 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={props.sticker.src}
            alt={props.sticker.alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* Purchase options */}
        <div className="w-1/2 h-full p-8 flex flex-col items-left justify-center">
          {/* Quantity */}

          {/* Add to cart */}

          {/* Close window */}
        </div>
      </div>
    </div>
  );
}