import Banner, { ImageProps } from "@/components/Banner";
import CenteredText from "@/components/CenteredText";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function About() {
  const bannerImgProps: ImageProps = {
    src: `${BASE_PATH}/images/test3.png`,
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
        <CenteredText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Meet the creator/designers */}

        {/* Contact us */}
        
        <Footer/>
      </main>
    </div>
  );
}