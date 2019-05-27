import { useEffect, useState } from "react";

import KeyMap from "~/lib/key-mapping";

export default function useUIController() {
  const [keyPressed, setKeyPressed] = useState();

  function keyPressHandler({ key }) {
    if (Object.values(KeyMap).includes(key)) {
      setKeyPressed(key);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  return keyPressed;
}
