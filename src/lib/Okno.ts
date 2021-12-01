import { v4 as uuid } from "uuid";
import { Position, Dimensions } from "types";

export default class Okno {
  readonly id: string;
  readonly position: Position;
  readonly initialPosition: Position;
  readonly dimensions: Dimensions;

  constructor() {
    this.id = uuid();
    this.position = { x: 0, y: 0 };
    this.initialPosition = { ...this.position };
    this.dimensions = { width: 600, height: 200 };
  }

  public move(deltaX: number, deltaY: number): Okno {
    this.position.x = this.initialPosition.x + deltaX;
    this.position.y = this.initialPosition.y + deltaY;
    return this;
  }

  public savePosition(): Okno {
    this.initialPosition.x = this.position.x;
    this.initialPosition.y = this.position.y;
    return this;
  }
}
