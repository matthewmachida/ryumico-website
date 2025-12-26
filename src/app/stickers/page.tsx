import Banner, { ImageProps } from "@/components/Banner";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Stickers() {
  const bannerImgProps: ImageProps = {
    src: "/images/test3.JPG",
    alt: "test banner img"
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <NavBar/>
        <Banner
          height={85}
          img={bannerImgProps}
          title={"Stickers"}
          subtitle={"Check out and purchase our stickers!"}
        />

        {/* New designs */}

        {/* List of sticker designs - see more button for all */}
        <Footer/>
      </main>
    </div>
  );
}