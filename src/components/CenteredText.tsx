type CenteredTextProps = {
  text: string
}

export default function CenteredText({text}: CenteredTextProps) {
  return(
    <div className="w-full flex flex-col items-center justify-center">
      <p className="w-full px-[25%]">
        {text}
      </p>
    </div>
  );
}