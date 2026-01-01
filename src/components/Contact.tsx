import { Color } from "@/lib/colors";
import PhotoAndText from "./PhotoAndText";
import { contactImages, contactText } from "@/data/contact";

export default function Contact() {
  // TODO: make custom animation for email logo?
  return (
    <PhotoAndText
      src={contactImages.emailIcon.src}
      alt={contactImages.emailIcon.alt}
      header={contactText.header}
      text={contactText.text}
      color={Color.Orange}
      width={200}
      height={200}
    />
  );
}