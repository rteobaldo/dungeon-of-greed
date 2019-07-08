import { useState } from "react";

import { VALID_KEYMAP } from "~/lib/key-mapping";
import { useKeyDown } from "~/lib/use-key-listener";

export default function useUIController() {
  const [keyPressed, setKeyPressed] = useState({
    e: {
      timeStamp: 0
    }
  });

  function handleKeyboard(e) {
    setKeyPressed(e);
  }

  useKeyDown(handleKeyboard, VALID_KEYMAP);

  return keyPressed;
}
