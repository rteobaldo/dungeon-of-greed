import React from "react";

import Level from "~/components/level";

export default function Game({ children }) {
  return (
    <div className="Game">
      <style jsx>{`
        .Game {
          position: relative;
        }
      `}</style>

      <Level>{children}</Level>
    </div>
  );
}
