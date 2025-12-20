import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Spacer from "@/components/Spacer";
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
          <Spacer height={5}/>
          
          {/* Welcome blurb */}

          {/* Sticker carousel */}

          {/* Contact us */}

          {/* Footer */}
        </div>
      </main>
    </div>
  );
}
