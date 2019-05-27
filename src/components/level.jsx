import React from "react";

import Field from "./field";

export default function Level({ children }) {
  const el = [];

  for (let i = 0; i < 900; i++) {
    el.push(<Field key={i} />);
  }

  return (
    <div className="Level">
      <style jsx>{`
        .Level {
          position: relative;
          display: grid;
          grid-template-columns: repeat(${30}, 30px);
          grid-auto-rows: 30px;
          grid-gap: 0;
        }
      `}</style>

      {children}
      {el}
    </div>
  );
}
