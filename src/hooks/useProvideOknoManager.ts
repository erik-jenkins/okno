import { useState } from "react";
import Okno from "lib/Okno";

interface OknoMap {
  [id: string]: Okno;
}

export default function useProvideOknoManager() {
  const [oknoMap, setOknoMap] = useState<OknoMap>({});

  function getAll(): Okno[] {
    return Object.values(oknoMap);
  }

  function add() {
    const newWindow = new Okno();
    setOknoMap({ ...oknoMap, [newWindow.id]: newWindow });
  }

  return {
    getAll,
    add,
  };
}
