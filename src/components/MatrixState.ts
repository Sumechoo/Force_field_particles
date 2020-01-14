import { Part } from "./Part";
import { SandboxObject } from "./SandboxObject";
import { Vector2d } from "../types";
import { ForceField } from "./ForceField";
import { MATRIX_SIZE } from "../constants";

export class MatrixState {
  private data: Array<SandboxObject>;
  private forces: Vector2d[][] = [];
  private context: CanvasRenderingContext2D;
  private gravity: Vector2d = {
    x: 0,
    y: 0.1
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
    this.data = [];

    for (let i = 0; i < 500; i++) {
      this.data[i] = new Part();
    }

    this.data.push(new ForceField());
    this.data = this.data.reverse();
  }

  private drawPart(obj: SandboxObject) {
    obj.draw(this.context);
    obj.update(this);
  }

  private drawForces() {
    const ctx = this.context;
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.5;

    for (let i = 0; i < MATRIX_SIZE; i += 15) {
      if (this.forces[i] === undefined) {
        this.forces[i] = [];
      }

      for (let j = 0; j < MATRIX_SIZE; j += 15) {
        const forcePoint = this.forces[i][j];
        const visualVec: Vector2d =
          forcePoint === undefined ? { x: 1, y: 1 } : forcePoint;

        ctx.moveTo(i, j);
        ctx.lineTo(i + visualVec.x, j + visualVec.y);
      }
    }

    ctx.stroke();
  }

  public render(frameNum: number) {
    for (let i = 0; i < this.data.length; i++) {
      this.drawPart(this.data[i]);
      this.drawForces();
    }
  }
}
