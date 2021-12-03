import { createContext } from "react";

import Okno from "lib/Okno";

interface OknoManagerContext {
  getAll: () => Okno[];
  add: () => void;
  remove: (id: string) => void;
  setPosition: (id: string, x: number, y: number) => void;
  setDimensions: (id: string, width: number, height: number) => void;
}

const oknoManagerContext = createContext({} as OknoManagerContext);

export default oknoManagerContext;
