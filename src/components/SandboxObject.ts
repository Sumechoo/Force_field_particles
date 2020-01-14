import { Vector2d } from "../types";
import { MATRIX_SIZE } from "../constants";
import { MatrixState } from "./MatrixState";

export class SandboxObject {
  public position: Vector2d;
  public size: number = 1;
  public color: string;

  constructor() {
    this.position = {
      x: Math.random() * MATRIX_SIZE,
      y: Math.random() * MATRIX_SIZE
    };
    this.color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  public update(state: MatrixState) {
    if (this.position.y > MATRIX_SIZE) this.position.y = 0;

    this.position.x += (Math.random() - 0.5) / 2;
  }

  public draw(ctx: CanvasRenderingContext2D) {}
}
