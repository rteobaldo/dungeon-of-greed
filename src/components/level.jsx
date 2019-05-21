import React from "react";

import Field from "./field";

export default function Level() {
  const el = [];

  for (let i = 0; i < 900; i++) {
    el.push(<Field />);
  }

  return (
    <div className="root">
      <style jsx>{`
        .root {
          position: relative;
          display: grid;
          grid-template-columns: repeat(${30}, 30px);
          grid-auto-rows: 30px;
          grid-gap: 0;
        }
      `}</style>

      {el}
    </div>
  );
}
