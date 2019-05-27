import React from "react";
import App, { Container } from "next/app";

import { CharacterContextProvider } from "~/contexts/character-context";

import "~/styles/reset.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <CharacterContextProvider>
          <Component {...pageProps} />
        </CharacterContextProvider>
      </Container>
    );
  }
}
