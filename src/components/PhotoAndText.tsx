import { Color } from "@/lib/colors";
import Image from "next/image";

type PhotoAndTextProps = {
  src: string
  alt: string
  header: string
  text: string
  color?: Color
  width?: number
  height?: number
}

export default function PhotoAndText(props: PhotoAndTextProps) {
  return (
    <div className="relative w-full h-160">
      {/* Foreground photo and text */}
      <div className="relative w-full h-160 z-10 flex flex-row items-center justify-center">
        {/* Photo */}
        <div className="relative w-1/2 h-160 m-8 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
          {(props.width != undefined && props.height != undefined)?
            <Image
              src={props.src}
              alt={props.alt}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
            :
            <Image
              src={props.src}
              alt={props.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          }
        </div>
        {/* Text */}
        <div className="w-1/2 h-full p-8 flex flex-col items-left justify-center">
          <h2>
            {props.header}
          </h2>
          <p>
            {props.text}
          </p>
        </div>
      </div>

      {/* Background stripe */}
      {props.color == undefined? <div/> : 
        <div className="absolute inset-0 w-full h-160 flex flex-col">
          <div className="w-full h-20"/>
          <div className={`w-full h-120 ${props.color}`}/>
          <div className="w-full h-20"/>
        </div>
      }
    </div>
  );
}