import PhotoCarousel from "@/components/PhotoCarousel";
import NavBar from "@/components/NavBar";
import PhotoAndText from "@/components/PhotoAndText";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ItemCarousel from "@/components/ItemCarousel";

export default function Home() {
  const list = [
    {
      src: "/images/c1.jpg",
      alt:"carousel 1"
    },
    {
      src: "/images/c2.jpeg",
      alt: "carousel 2"
    },
    {
      src: "/images/c3.JPG",
      alt: "carousel 3",
    }
  ];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <div className="flex flex-col items-center justify-center">
          {/* Header navigation bar */}
          <NavBar/>

          {/* Banner photo carousel */}
          <PhotoCarousel
            slides={list}
            height={85}
            title={"Ryumico Co."}
            subtitle={"Welcome to Ryumico Sticker Co.!"}
          />

          <Spacer height={5}/>

          {/* Welcome blurb */}
          <PhotoAndText
            src="/images/c1.jpg"
            alt="test photo"
            header="Ryumico Sticker Co."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />

          <Spacer height={5}/>

          {/* Sticker carousel */}
          <ItemCarousel
            items={[]}
          />

          <Spacer height={5}/>

          {/* Contact us */}
          <Contact/>

          {/* Footer */}
          <Footer/>
        </div>
      </main>
    </div>
  );
}
