import { PointerSensor, PointerSensorOptions } from "@dnd-kit/core";
import type { PointerEvent } from "react";

class WindowPointerSensor extends PointerSensor {
  static activators: {
    eventName: "onPointerDown";
    handler: (
      { nativeEvent: event }: PointerEvent,
      { onActivation }: PointerSensorOptions
    ) => boolean;
  }[] = [
    {
      eventName: "onPointerDown",
      handler: ({ nativeEvent: event }: PointerEvent) => {
        const isInteractive: boolean =
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target as Element);

        return !isInteractive;
      },
    },
  ];
}

const isInteractiveElement = (element: Element): boolean =>
  ["button", "input", "textarea", "select", "option"].includes(
    element.tagName.toLocaleLowerCase()
  );

export class WindowMoveSensor extends WindowPointerSensor {}
export class WindowResizeSensor extends WindowPointerSensor {}
