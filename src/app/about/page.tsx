import Banner, { ImageProps } from "@/components/Banner";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function About() {
  const bannerImgProps: ImageProps = {
    src: "/images/test2.jpg",
    alt: "test banner img"
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <NavBar/>
        <Banner
          height={85}
          img={bannerImgProps}
          title={"About Us"}
        />

        {/* About the company/brand - history */}

        {/* Meet the creator/designers */}
        <Footer/>
      </main>
    </div>
  );
}