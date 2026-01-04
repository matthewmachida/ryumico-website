export type Sticker = {
  name: string,
  src: string,
  alt: string
}

export const nullSticker = {
  name: "",
  src: "",
  alt: ""
}

export function removeSuffixFromAlt(str: string) {
  return str.substring(0, str.indexOf(" Sticker"));
}