"use client"

import { ReactElement, useState } from "react";

type ItemDisplayProps = {
  items: ReactElement[]
}

export default function ItemDisplay(props: ItemDisplayProps) {
  const [expanded, setExpanded] = useState(false);

  const first = props.items.slice(0, 4);
  const more = props.items.slice(4);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div className="grid grid-cols-4 gap-8 px-24">
        {first.map((item, i) => (
          <div key={i}>
            {item}
          </div>
        ))}
      </div>

      {
        expanded && (more.length > 0) && (
          <div className="grid grid-cols-4 gap-8 px-24">
            {more.map((item, i) => (
              <div key={i}>
                {item}
              </div>
            ))}
          </div>
        )
      }

      {
        more.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)} // toggle expanded button
            className="standard-button"
          >
            {expanded? "See Less" : "See More"}
          </button>
        )
      }
    </div>
  );
}