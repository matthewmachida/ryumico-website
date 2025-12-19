import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  const list = [
    <Image src="/images/c1.jpg" alt="carousel 1" fill className="object-cover"/>,
    <Image src="/images/c2.jpeg" alt="carousel 2" fill className="object-cover"/>,
    <Image src="/images/c3.JPG" alt="carousel 3" fill className="object-cover"/>
  ];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <div className="flex flex-col items-center">
          <NavBar/>
          <Carousel
            height={85}
            slides={list}
          />
          <h1 className="bg-orange-900">I'm an h1 tag!</h1>
          <p className="bg-yellow-900">I'm a p tag!</p>
          <p className="bg-purple-500 w-[300px] h-[600px]">another p tag</p>
        </div>
      </main>
    </div>
  );
}
