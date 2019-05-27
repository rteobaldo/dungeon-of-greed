import React, { useContext, useEffect } from "react";

import useCharacter from "~/lib/use-character";

export default function Character() {
  const { character, _ } = useCharacter();

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
          transform: translate3d(${character.position * 30});
        }
      `}</style>
    </div>
  );
}
