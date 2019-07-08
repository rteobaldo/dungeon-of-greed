import { useEffect, useState } from "react";

export default function useKey(
  handleKeyCallback = null,
  keyEvent = "keyup",
  whitelist = [],
  blacklist = []
) {
  if (keyEvent !== "keyup" && keyEvent !== "keydown") {
    console.warn(
      "useKey keyEvent invalid, assumed keyEvent 'keydown' as fallback!"
    );
    keyEvent = "keydown";
  }

  if (whitelist.length > 0 && blacklist.length > 0) {
    console.warn("White- and blacklist arrays > 0, emptied blacklist!");
    blacklist = [];
  }

  const [state, setState] = useState({
    keyCode: null,
    keyCodeHistory: [],
    code: null,
    codeHistory: []
  });

  useEffect(() => {
    if (
      !(
        typeof window !== "undefined" &&
        window.document &&
        window.document.createElement
      )
    ) {
      return null;
    }

    const handleKey = e => {
      const keyCode = e.keyCode;
      const code = e.code || "UnknownKey";

      if (whitelist.length > 0 && whitelist.indexOf(code) === -1) {
        return;
      }
      if (blacklist.length > 0 && blacklist.indexOf(code) > -1) {
        return;
      }

      setState(prevState => {
        return {
          keyCode,
          keyCodeHistory: [...prevState.keyCodeHistory, keyCode],
          code,
          codeHistory: [...prevState.codeHistory, code]
        };
      });

      if (handleKeyCallback && typeof handleKeyCallback == "function") {
        handleKeyCallback({
          keyName: code,
          keyCode,
          e
        });
      }
    };

    window.addEventListener(keyEvent, handleKey, false);
    return () => window.removeEventListener(keyEvent, handleKey, false);
  }, [handleKeyCallback, keyEvent, blacklist, whitelist]);

  return {
    keyCode: state.keyCode,
    keyCodeHistory: state.keyCodeHistory,
    keyName: state.code,
    keyNameHistory: state.codeHistory
  };
}

export function useKeyUp(
  handleKeyCallback = null,
  whitelist = [],
  blacklist = []
) {
  return useKey(handleKeyCallback, "keyup", whitelist, blacklist);
}

export function useKeyDown(
  handleKeyCallback = null,
  whitelist = [],
  blacklist = []
) {
  return useKey(handleKeyCallback, "keydown", whitelist, blacklist);
}

export function useKeyCombo(keyCodes = [], handleKeyCallback = null) {
  const [currentlyPressedKeyCodes, setCurrentlyPressedKeyCodes] = useState([]);

  const handleKeyDown = ({ keyCode, keyName, e }) => {
    if (currentlyPressedKeyCodes.indexOf(keyCode) === -1) {
      if (
        checkIfArrayItemsinArray(keyCodes, [
          ...currentlyPressedKeyCodes,
          keyCode
        ])
      ) {
        handleKeyCallback({ keyCode, keyName, e });
        setCurrentlyPressedKeyCodes([]);
      } else {
        setCurrentlyPressedKeyCodes(prevState => [...prevState, keyCode]);
      }
    }
  };
  const handleKeyUp = ({ keyCode }) => {
    const indexOfPressedKeyCode = currentlyPressedKeyCodes.indexOf(keyCode);
    if (indexOfPressedKeyCode > -1) {
      setCurrentlyPressedKeyCodes(prevState => [
        ...prevState.slice(0, indexOfPressedKeyCode),
        ...prevState.slice(indexOfPressedKeyCode + 1)
      ]);
    }
  };

  useKeyDown(handleKeyDown, keyCodes);
  useKeyUp(handleKeyUp, keyCodes);

  if (!keyCodes || keyCodes.length < 2 || !handleKeyCallback) {
    console.warn("Invalid arguments for usekeyCombo!");
  }
}

export function checkIfArrayItemsinArray(arrayItems, array) {
  if (array.length === 0 || arrayItems.length === 0) {
    return false;
  }
  for (let i = 0; i < arrayItems.length; i++) {
    if (array.indexOf(arrayItems[i]) === -1) {
      return false;
    }
  }
  return true;
}
