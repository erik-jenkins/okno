import { ReactNode } from "react";

import oknoManagerContext from "contexts/oknoManagerContext";

interface OknoManagerProps {
  children?: ReactNode;
}

export default function OknoManager({ children }: OknoManagerProps) {
  return (
    <oknoManagerContext.Provider value={{}}>
      {children}
    </oknoManagerContext.Provider>
  );
}
