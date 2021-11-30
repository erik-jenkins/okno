import { useContext } from "react";

import oknoManagerContext from "contexts/oknoManagerContext";

export default function useOknoManager() {
  return useContext(oknoManagerContext);
}
