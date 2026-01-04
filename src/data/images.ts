import { addBasePath } from "@/lib/paths";

export const stickers = {
  whalelogo: {
    src: addBasePath("/stickers/whalelogo-transparent.png"),
    alt: "Ryumico Co. Whale Sticker"
  },
  polarski: {
    src: addBasePath("/stickers/polarski-transparent.png"),
    alt: "Polar Ski Sticker"
  },
  bouldotter: {
    src: addBasePath("/stickers/bouldotter-transparent.png"),
    alt: "Bouldotter Sticker"
  },
  bigneedle: {
    src: addBasePath("/stickers/bigneedle-transparent.png"),
    alt: "Bigneedle Sticker"
  }
}

export const stickersList = [
  stickers.whalelogo,
  stickers.polarski,
  stickers.bouldotter,
  stickers.bigneedle
]

export const logos = {
  logo: stickers.whalelogo,
  title: {
    src: addBasePath("/logos/title-logo.png"),
    alt: "Ryumico title banner"
  }
}

export const icons = {
  // arrow alt may be overwritten if reversed with className="[transform:scaleX(-1)]"
  arrow: {
    src: addBasePath("/icons/arrow.svg"),
    alt: "right arrow"
  },
  rightarrow: {
    src: addBasePath("/icons/arrow.svg"),
    alt: "right arrow"
  },
  email: {
    src: addBasePath("/icons/email.svg"),
    alt: "email symbol"
  },
  minus: {
    src: addBasePath("/icons/minus.svg"),
    alt: "minus symbol"
  },
  plus: {
    src: addBasePath("/icons/plus.svg"),
    alt: "plus symbol"
  }
}

export const testImages = {
  img1: {
    src: addBasePath("/images/test.png"),
    alt: "test img 1"
  },
  img2: {
    src: addBasePath("/images/test2.png"),
    alt: "test img 2"
  },
  img3: {
    src: addBasePath("/images/test3.png"),
    alt: "test img 3"
  },
  img4: {
    src: addBasePath("/images/test4.png"),
    alt: "test img 4"
  },
  img5: {
    src: addBasePath("/images/test5.png"),
    alt: "test img 5"
  },
  testCarousel: [
    {
      src: addBasePath("/images/test2.png"),
      alt:"carousel 1"
    },
    {
      src: addBasePath("/images/test3.png"),
      alt: "carousel 2"
    },
    {
      src: addBasePath("/images/test4.png"),
      alt: "carousel 3",
    }
  ],
}