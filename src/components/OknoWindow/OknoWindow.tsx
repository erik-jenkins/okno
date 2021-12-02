/** @jsxImportSource @emotion/react */
import React, { createContext, useState } from "react";
import {
  DndContext,
  DragMoveEvent,
  DragEndEvent,
  useSensor,
} from "@dnd-kit/core";
import { css } from "@emotion/react";

import Okno from "lib/Okno";
import { WindowMoveSensor } from "lib/sensors";
import { Position } from "types";
import useOknoManager from "hooks/useOknoManager";

interface OknoWindowContext {
  okno: Okno;
}

export const oknoWindowContext = createContext({} as OknoWindowContext);

interface OknoWindowProps {
  okno: Okno;
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

const OknoWindowCss = (okno: Okno, position: Position) => css`
  position: absolute;
  transform: translate3d(${position.x}px, ${position.y}px, 0);
  width: ${okno.dimensions.width}px;
  height: ${okno.dimensions.height}px;
`;

export default function OknoWindow({
  okno,
  as,
  children,
  ...rest
}: OknoWindowProps) {
  const [tempPosition, setTempPosition] = useState<Position>(okno.position);
  const { setPosition } = useOknoManager();
  const moveSensor = useSensor(WindowMoveSensor);

  function handleDragMove(event: DragMoveEvent) {
    setTempPosition({
      x: okno.position.x + event.delta.x,
      y: okno.position.y + event.delta.y,
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    setPosition(okno.id, tempPosition.x, tempPosition.y);
  }

  const Component = as || "div";
  return (
    <DndContext
      sensors={[moveSensor]}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <oknoWindowContext.Provider value={{ okno }}>
        <Component
          className="okno-window"
          css={OknoWindowCss(okno, tempPosition)}
          {...rest}
        >
          {children}
        </Component>
      </oknoWindowContext.Provider>
    </DndContext>
  );
}
