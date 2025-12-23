import Image from "next/image";
import PhotoAndText, { Color } from "./PhotoAndText";

export default function Contact() {
  // TODO: make custom animation for email logo?
  return (
    <PhotoAndText
      src="/icons/email.svg"
      alt="Email icon"
      header="Need to Contact Us?"
      text="If you have any questions or inquiries, send us an email at example@email.com and we will try get back to you!"
      color={Color.Orange}
      width={200}
      height={200}
    />
  );
}