import Image from "next/image";

type PhotoAndTextProps = {
  src: string,
  alt: string,
  header: string,
  text: string
}

export default function PhotoAndText(props: PhotoAndTextProps) {
  return (
    <div className="w-full h-[60vh] flex flex-row items-center justify-center">
      <div className="relative w-1/2 h-[60vh] m-8 rounded-2xl overflow-hidden">
        <Image
          src={props.src}
          alt={props.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-1/2 h-full p-8 flex flex-col items-left justify-center">
        <h3>
          {props.header}
        </h3>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}