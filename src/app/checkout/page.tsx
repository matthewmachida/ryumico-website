import CenteredElement from "@/components/CenteredElement";
import CenteredHeader from "@/components/CenteredHeader";
import { checkoutText } from "@/data/checkout";
import { testImages } from "@/data/images";
import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full flex flex-col">
        <div className="w-full h-196 flex flex-col items-center justify-center gap-12">
          {/* List of stickers in cart / empty cart display */}
          <CenteredHeader
            text={checkoutText.emptyCartHeader}
            subtitle={checkoutText.emptyCartText}
          />

          {/* Stripe card payment / go to design page */}
          <CenteredElement
            element={
              <Link href="/stickers">
                <button className="standard-button">
                  {checkoutText.stickerButtonText}
                </button>
              </Link>
            }
          />

          <CenteredElement
            element={
              <div className="relative w-80 h-80">
                <Image
                  src={testImages.img3.src}
                  alt={testImages.img3.alt}
                  fill
                  className="object-cover"
                />
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}