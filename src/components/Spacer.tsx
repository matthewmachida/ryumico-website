type SpacerProps = {
  height: number // in vh
}

export default function Spacer(props: SpacerProps) {
  return <div className="w-full" style={{ height: `${props.height}vh` }}/>;
}