import { ReactNode } from "react";
import { DndContext, DragMoveEvent, DragEndEvent } from "@dnd-kit/core";

import oknoManagerContext from "contexts/oknoManagerContext";
import useProvideOknoManager from "hooks/useProvideOknoManager";

interface OknoManagerProps {
  children?: ReactNode;
}

export default function OknoManager({ children }: OknoManagerProps) {
  const oknoManager = useProvideOknoManager();

  function handleDragMove(event: DragMoveEvent) {
    const { id } = event.active;
    const { x, y } = event.delta;
    oknoManager.move(id, x, y);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { id } = event.active;
    oknoManager.savePosition(id);
  }

  return (
    <DndContext onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
      <oknoManagerContext.Provider value={oknoManager}>
        {children}
      </oknoManagerContext.Provider>
    </DndContext>
  );
}
