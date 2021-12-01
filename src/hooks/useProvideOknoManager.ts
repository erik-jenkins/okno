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

  function remove(id: string) {
    if (id in oknoMap === false) return;

    const newMap = { ...oknoMap };
    delete newMap[id];
    setOknoMap(newMap);
  }

  function move(id: string, x: number, y: number) {
    if (id in oknoMap === false) return;

    const okno = oknoMap[id];
    const newOkno = okno.move(x, y);
    setOknoMap({ ...oknoMap, [id]: newOkno });
  }

  function savePosition(id: string) {
    if (id in oknoMap === false) return;

    const okno = oknoMap[id];
    const newOkno = okno.savePosition();
    setOknoMap({ ...oknoMap, [id]: newOkno });
  }

  return {
    getAll,
    add,
    remove,
    move,
    savePosition,
  };
}
