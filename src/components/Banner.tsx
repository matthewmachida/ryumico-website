import Image from "next/image";

type BannerProps = {
  img: ImageProps
  title?: string
  subtitle?: string
}

export type ImageProps = {
  src: string
  alt: string
}

export default function Banner(props: BannerProps) {
  return (
    <div className="relative w-full h-256">
      <Image src={props.img.src} alt={props.img.alt} fill className="object-cover"/>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* Text overlay */}
      {props.title == null? <div/> :
        <div className="absolute bottom-0 left-0 p-20 z-20">
          <h1 className="text-white">{props.title}</h1>
          { props.subtitle == null? <div/> : <h3 className="text-white">{props.subtitle}</h3> }
        </div>
      }
    </div>
  );
}