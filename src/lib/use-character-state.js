import { useContext, useEffect } from "react";

import { CharacterContext } from "~/contexts/character-context";
import useUIController from "~/lib/use-ui-controller";
import KeyMapping from "~/lib/key-mapping";

export default function useCharacterState() {
  const { character, setCharacter } = useContext(CharacterContext);
  const keyPressed = useUIController();
  const newPosition = createPositionFromKey(keyPressed);

  useEffect(() => {
    setCharacterPosition(newPosition);
  }, [keyPressed.e.timeStamp]);

  function createPositionFromKey({ keyName }) {
    const currentPosition = character.position;

    switch (keyName) {
      case KeyMapping.ARROW_UP:
        return [currentPosition[0], currentPosition[1] - 1];
      case KeyMapping.ARROW_DOWN:
        return [currentPosition[0], currentPosition[1] + 1];
      case KeyMapping.ARROW_LEFT:
        return [currentPosition[0] - 1, currentPosition[1]];
      case KeyMapping.ARROW_RIGHT:
        return [currentPosition[0] + 1, currentPosition[1]];
      default:
        return character.position;
    }
  }

  function setCharacterPosition(position) {
    setCharacter({
      ...character,
      position
    });
  }

  return {
    character
  };
}
