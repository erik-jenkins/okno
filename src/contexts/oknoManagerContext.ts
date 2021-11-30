import { createContext } from "react";

import Okno from "lib/Okno";

interface OknoManagerContext {
  getAll: () => Okno[];
  add: () => void;
}

const oknoManagerContext = createContext({} as OknoManagerContext);

export default oknoManagerContext;
