type CenteredHeaderProps = {
  text: string
  subtitle?: string
}

export default function CenteredHeader(props: CenteredHeaderProps) {
  return (
    <div className="w-full h-[10vh] flex flex-col items-center justify-center">
      <h2>
        {props.text}
      </h2>
      {props.subtitle == undefined? <h3 className="py-2">{props.subtitle}</h3> : <div/>}
    </div>
  );
}