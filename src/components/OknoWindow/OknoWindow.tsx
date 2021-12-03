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
import { Dimensions, Position } from "types";
import { getEventDetails, OknoEventType } from "lib/oknoEventType";
import useOknoManager from "hooks/useOknoManager";

interface OknoWindowContext {
  okno: Okno;
  tempDimensions: Dimensions;
}

export const oknoWindowContext = createContext({} as OknoWindowContext);

interface OknoWindowProps {
  okno: Okno;
  as?: React.ComponentType;
  children?: React.ReactNode;
  [prop: string]: any;
}

const OknoWindowCss = (position: Position, dimensions: Dimensions) => css`
  position: absolute;
  transform: translate3d(${position.x}px, ${position.y}px, 0);
  width: ${dimensions.width}px;
`;

export default function OknoWindow({
  okno,
  as,
  children,
  ...rest
}: OknoWindowProps) {
  const { setPosition, setDimensions } = useOknoManager();
  const moveSensor = useSensor(WindowMoveSensor);
  const [tempPosition, setTempPosition] = useState<Position>(okno.position);
  const [tempDimensions, setTempDimensions] = useState<Dimensions>(
    okno.dimensions
  );

  function handleDragMove(event: DragMoveEvent) {
    const { eventType, deltaX, deltaY } = getEventDetails(event);
    if (eventType === OknoEventType.Move) {
      handleWindowMove(deltaX, deltaY);
      return;
    }

    handleWindowResize(deltaX, deltaY);
  }

  function handleWindowMove(deltaX: number, deltaY: number) {
    setTempPosition({
      x: okno.position.x + deltaX,
      y: okno.position.y + deltaY,
    });
  }

  function handleWindowResize(deltaX: number, deltaY: number) {
    setTempDimensions({
      width: okno.dimensions.width + deltaX,
      height: okno.dimensions.height + deltaY,
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { eventType } = getEventDetails(event);
    if (eventType === OknoEventType.Move) {
      handleWindowMoveEnd();
      return;
    }

    handleWindowResizeEnd();
  }

  function handleWindowMoveEnd() {
    setPosition(okno.id, tempPosition.x, tempPosition.y);
  }

  function handleWindowResizeEnd() {
    setDimensions(okno.id, tempDimensions.width, tempDimensions.height);
  }

  const Component = as || "div";
  return (
    <DndContext
      sensors={[moveSensor]}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <oknoWindowContext.Provider value={{ okno, tempDimensions }}>
        <Component
          className="okno-window"
          css={OknoWindowCss(tempPosition, tempDimensions)}
          {...rest}
        >
          {children}
        </Component>
      </oknoWindowContext.Provider>
    </DndContext>
  );
}
