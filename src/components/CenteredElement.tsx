import { ReactElement } from "react";

type CenteredElementProps = {
  element: ReactElement
}

export default function CenteredText({element}: CenteredElementProps) {
  return(
    <div className="w-full flex flex-col items-center justify-center">
      {element}
    </div>
  );
}