import { ReactNode } from "react";

import oknoManagerContext from "contexts/oknoManagerContext";
import useProvideOknoManager from "hooks/useProvideOknoManager";

interface OknoManagerProps {
  children?: ReactNode;
}

export default function OknoManager({ children }: OknoManagerProps) {
  const oknoManager = useProvideOknoManager();
  return (
    <oknoManagerContext.Provider value={oknoManager}>
      {children}
    </oknoManagerContext.Provider>
  );
}
