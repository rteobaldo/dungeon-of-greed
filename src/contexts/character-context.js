import React, { useState } from "react";

const initialState = {
  name: "Tals",
  position: [0, 0]
};

export const CharacterContext = React.createContext(initialState);

export function CharacterContextProvider({ children }) {
  const [character, setCharacter] = useState(initialState);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}
