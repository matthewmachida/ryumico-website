type CenteredHeaderProps = {
  text: string
  subtitle?: string
}

export default function CenteredHeader(props: CenteredHeaderProps) {
  return (
    <div className="w-full h-32 flex flex-col items-center justify-center">
      <h2>
        {props.text}
      </h2>
      {/* Only include subtitle if it exists */}
      {props.subtitle == undefined? <h3 className="py-2">{props.subtitle}</h3> : <div/>}
    </div>
  );
}