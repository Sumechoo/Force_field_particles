import { SandboxObject } from "./SandboxObject";

enum ForceFieldType {
  SOLID,
  WIND
}

export class ForceField extends SandboxObject {
  private type: ForceFieldType;

  constructor() {
    super();

    this.type = ForceFieldType.SOLID;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();

    ctx.fillStyle = "lightblue";
    ctx.fillRect(this.position.x, this.position.y, 30, 30);

    ctx.fill();
  }

  update() {}
}
