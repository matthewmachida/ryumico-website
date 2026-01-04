"use client"

import { purchaseStickerImages } from "@/data/purchasesticker";
import Image from "next/image";
import { useState } from "react";

export default function QuantityController() {
  const [value, setValue] = useState(1);
  
  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => Math.max(v - 1, 1));

  return(
    <div className="h-16 gap-4 flex flex-row items-center justify-center">
      {/* Minus Decrement */}
      <button
        onClick={decrement}
        className="relative w-10 h-10"
      >
        <Image
          src={purchaseStickerImages.minus.src}
          alt={purchaseStickerImages.minus.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </button>

      {/* Quantity Input */}
      <input
        type={"number"}
        value={value}
        onChange={(input) => setValue(Number(input.target.value))}
        className="w-24 h-16 p-2 text-center text-2xl rounded-xl
                   border-2 border-blue-900
                   outline-none focus:outline-none focus:ring-0
                   appearance-none
                   [&::-webkit-inner-spin-button]:appearance-none
                   [&::-webkit-outer-spin-button]:appearance-none"
      />

      {/* Plus Increment */}
      <button
        onClick={increment}
        className="relative w-10 h-10"
      >
        <Image
          src={purchaseStickerImages.plus.src}
          alt={purchaseStickerImages.plus.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </button>
    </div>
  );
}