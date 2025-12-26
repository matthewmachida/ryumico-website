import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-[25vh] flex flex-col items-center p-8 gap-8 bg-blue-900">
      {/* Page buttons */}
      <div className="flex flex-row items-center justify-center gap-8">
        <nav className="h-full gap-16 flex flex-row items-center">
          <Link className="h-full" href="/..">
            <h3 className="footer-button h-full flex flex-row items-center">Home</h3>
          </Link>
          <Link className="h-full" href="/about">
            <h3 className="footer-button h-full flex flex-row items-center">About</h3>
          </Link>
          <Link className="h-full" href="/stickers">
            <h3 className="footer-button h-full flex flex-row items-center">Stickers</h3>
          </Link>
          <Link className="h-full" href="/checkout">
            <h3 className="footer-button h-full flex flex-row items-center">Checkout</h3>
          </Link>
        </nav>
      </div>
      {/* Special thanks */}
      <p className="text-white">Made by Ryumico Sticker Co. with love 💖</p>
      {/* Copyright? */}
    </div>
  );
}