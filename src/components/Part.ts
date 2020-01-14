import { SandboxObject } from "./SandboxObject";

export class Part extends SandboxObject {
  public layer: number;

  constructor() {
    super();

    this.layer = Math.random();
  }

  update(state) {
    this.position.y += state.gravity.y + this.layer;
    this.position.x += state.gravity.x;

    super.update(state);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.position.x + 1, this.position.y + 1);

    ctx.stroke();
  }
}
