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