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

export const Color = {
  Red: "bg-red-300",
  Orange: "bg-orange-300",
  Yellow: "bg-yellow-300",
  Green: "bg-yellow-300",
  Blue: "bg-blue-300",
  Purple: "bg-purple-300",
  Pink: "bg-pink-300",
  Gray: "bg-gray-300",
  Black: "bg-gray-300"
} as const

export type Color = (typeof Color)[keyof typeof Color]

export default function PhotoAndText(props: PhotoAndTextProps) {
  console.log(props.src)
  return (
    <div className="relative w-full h-[60vh]">
      {/* Foreground photo and text */}
      <div className="relative w-full h-[60vh] z-10 flex flex-row items-center justify-center">
        {/* Photo */}
        <div className="relative w-1/2 h-[60vh] m-8 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
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
        <div className="absolute inset-0 w-full h-[60vh] flex flex-col">
          <div className="w-full h-[5vh]"/>
          <div className={`w-full h-[50vh] ${props.color}`}/>
          <div className="w-full h-[5vh]"/>
        </div>
      }
    </div>
  );
}