type CenteredTextProps = {
  text: string
}

export default function CenteredText({text}: CenteredTextProps) {
  return(
    <div className="w-full flex flex-col items-center justify-center">
      {/* Margins take up 25% of the screen on both the left and right side, leaving it in the middle */}
      <p className="w-full px-[25%]">
        {text}
      </p>
    </div>
  );
}