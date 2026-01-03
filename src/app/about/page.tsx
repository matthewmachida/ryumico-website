import Banner, { ImageProps } from "@/components/Banner";
import CenteredHeader from "@/components/CenteredHeader";
import CenteredText from "@/components/CenteredText";
import Contact from "@/components/Contact";
import PhotoAndText from "@/components/PhotoAndText";
import Spacer from "@/components/Spacer";
import { aboutImages, aboutText } from "@/data/about";

export default function About() {
  const bannerImgProps: ImageProps = {
    src: aboutImages.banner.src,
    alt: aboutImages.banner.alt
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex flex-col">
        <Banner
          img={bannerImgProps}
          title={aboutText.bannerTitle}
        />
        <Spacer height={7}/>

        {/* About the company/brand - history */}
        <CenteredHeader
          text={aboutText.introHeader}
        />
        <CenteredText
          text={aboutText.introText}
        />
        <Spacer height={15}/>

        {/* Meet the creator/designers */}
        <PhotoAndText
          src={aboutImages.owner.src}
          alt={aboutImages.owner.alt}
          header={aboutText.ownerHeader}
          text={aboutText.ownerText}
        />
        <Spacer height={5}/>

        {/* Contact us */}
        <Contact/>
        <Spacer height={5}/>
      </main>
    </div>
  );
}