import React from "react";

import Head from "~/components/head";
import Game from "~/components/game";
import Character from "~/components/character";

export default function Home() {
  return (
    <>
      <Head />

      <Game>
        <Character />
      </Game>
    </>
  );
}
