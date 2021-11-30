import { v4 as uuid } from "uuid";
import { Position, Dimensions } from "types";

export default class Okno {
  readonly id: string;
  readonly position: Position;
  readonly dimensions: Dimensions;

  constructor() {
    this.id = uuid();
    this.position = { x: 0, y: 0 };
    this.dimensions = { width: 600, height: 200 };
  }

  public move(delta: Position): Okno {
    this.position.x += delta.x;
    this.position.y += delta.y;
    return this;
  }
}
