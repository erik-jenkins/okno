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

  public setPosition(x: number, y: number): Okno {
    this.position.x = x;
    this.position.y = y;
    return this;
  }

  public setDimensions(width: number, height: number): Okno {
    this.dimensions.width = width;
    this.dimensions.height = height;
    return this;
  }
}
