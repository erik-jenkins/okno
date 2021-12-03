import { DragMoveEvent, DragEndEvent } from "@dnd-kit/core";

export enum OknoEventType {
  Move = "MOVE",
  Resize = "RESIZE",
}

export function getEventDetails(event: DragMoveEvent | DragEndEvent) {
  const eventType = getEventType(event.active.id);
  const rawId = getRawId(event.active.id);
  const { x: deltaX, y: deltaY } = event.delta;
  return { id: rawId, eventType, deltaX, deltaY };
}

function getEventType(eventId: string): OknoEventType {
  if (eventId.includes("okno.move")) return OknoEventType.Move;
  return OknoEventType.Resize;
}

function getRawId(id: string) {
  return id.replace(/okno\..+\./, "");
}
