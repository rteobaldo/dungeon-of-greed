import { useContext } from "react";

import { CharacterContext } from "~/contexts/character-context";
import useUIController from "~/lib/use-ui-controller";
import KeyMap from "~/lib/key-mapping";

export default function useCharacter() {
  const { character, setCharacter } = useContext(CharacterContext);
  const keyPressed = useUIController();

  function createNewPosition(key) {
    switch (key) {
      case KeyMap.WALK_UP:
        return [character.position.x, y - 1];
      case KeyMap.WALK_DOWN:
        return [character.position.x, y + 1];
      case KeyMap.WALK_LEFT:
        return [x - 1, character.position.y];
      case KeyMap.WALK_RIGHT:
        return [x + 1, character.position.y];

      default:
        return character.position;
    }
  }

  function setCharacterPosition(x, y) {
    const position = createNewPosition(keyPressed);

    setCharacter({
      ...character,
      position
    });
  }

  return {
    character,
    setCharacterPosition
  };
}
