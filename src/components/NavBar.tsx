import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-green-900 w-full h-[10vh] px-16 py-8">
      <div className="w-full h-full flex flex-row justify-between">
        <nav className="h-full gap-16 flex flex-row items-center">
          <Link href="/..">
            <Image src="/images/test.png" alt="Logo" width={100} height={100}/>
          </Link>
          <Link href="/about">About</Link>
          <Link href="/designs">Designs</Link>
        </nav>
        <nav className="h-full flex flex-row items-center">
          <Link href="/checkout">Cart</Link>
        </nav>
      </div>
    </div>
  );
}