import React, { useContext, useEffect } from "react";

import useCharacterState from "~/lib/use-character-state";

export default function Character() {
  const { character, _ } = useCharacterState();

  return (
    <div className="Character">
      <style jsx>{`
        .Character {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid #fff;
          background-color: rebeccapurple;
          border-radius: 50%;
          z-index: 10;
        }
      `}</style>

      <style jsx>{`
        .Character {
          transform: translate3d(
            ${character.position[0] * 30}px,
            ${character.position[1] * 30}px,
            0
          );
        }
      `}</style>
    </div>
  );
}
