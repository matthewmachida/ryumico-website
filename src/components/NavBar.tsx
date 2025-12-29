import Link from "next/link";
import Image from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NavBar() {
  return (
    <div className="bg-white-900 w-full h-24">
      <div className="w-full h-full px-16 flex flex-row justify-between">
        {/* Left Side of NavBar */}
        <nav className="h-full gap-16 flex flex-row items-center">
          <Link className="h-full" href="/">
            {/* Logo image instead of text for the home page button */}
            <div className="relative h-full">
              <Image
                src={`${BASE_PATH}/logos/whale-logo.png`}
                alt="Logo"
                width={0}
                height={0}
                sizes="150px"
                className="nav-button h-24 w-auto"/>
            </div>
          </Link>
          <Link className="h-full" href="/about">
            <h3 className="nav-button h-full px-8 flex flex-row items-center">About</h3>
          </Link>
          <Link className="h-full" href="/stickers">
            <h3 className="nav-button h-full px-8 flex flex-row items-center">Stickers</h3>
          </Link>
        </nav>

        {/* Right Side of NavBar */}
        <nav className="h-full flex flex-row items-center">
          <Link className="h-full" href="/checkout">
            <h3 className="nav-button h-full px-8 flex flex-row items-center">Cart</h3>
          </Link>
        </nav>
      </div>
    </div>
  );
}