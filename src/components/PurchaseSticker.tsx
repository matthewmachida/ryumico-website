import { Sticker } from "@/lib/stickers";
import Image from "next/image";
import CenteredHeader from "./CenteredHeader";
import { purchaseStickerText } from "@/data/purchasesticker";
import QuantityController from "./QuantityController";
import Link from "next/link";

type PurchaseStickerProps = {
  sticker: Sticker
}

export default function PurchaseSticker({sticker}: PurchaseStickerProps) {
  return (
    <div className="relative w-full h-120 bg-gray-300">
      {/* Foreground photo and text */}
      <div className="relative w-full h-120 px-[15%] z-10 flex flex-row items-center justify-center">
        {/* Photo */}
        <div className="relative w-1/2 h-full m-8 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={sticker.src}
            alt={sticker.alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* Purchase options */}
        <div className="w-1/2 h-full p-8 flex flex-col items-left justify-center">
          {/* Name of Sticker */}
          <CenteredHeader
            text={sticker.name}
          />

          <div className="px-[25%] flex flex-col items-center justify-center gap-8">
            {/* Quantity */}
            <QuantityController/>

            {/* Add to cart / go to checkout */}
            <div className="w-full flex flex-row items-center justify-center gap-4">
              <button
                className="standard-button"
              >
                {purchaseStickerText.addButton}
              </button>
              <Link href="/checkout">
                <button
                  className="standard-button"
                >
                  {purchaseStickerText.goToCartButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}