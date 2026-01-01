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
      {props.subtitle != undefined? <p className="py-2 larger-p">{props.subtitle}</p> : <div/>}
    </div>
  );
}