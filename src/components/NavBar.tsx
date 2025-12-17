import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-green-900 w-full h-[10vh] px-16 py-8">
      <nav className="w-full h-full gap-16 flex flex-row items-center">
        <Link href="/..">
          <Image src={""} alt={""}/>
        </Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}