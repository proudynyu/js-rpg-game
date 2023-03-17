import { GameObject } from "../../GameObject";
import { Vector2 } from "@utils";

export class Rectangle extends GameObject {
  private ctx: CanvasRenderingContext2D;

  constructor(
    position: Vector2 = new Vector2(0, 0),
    private width: number,
    private heigth: number,
    private color: string = "#fff"
  ) {
    super(position);
    this.ctx = window.context;
  }

  public OnStart(): void {
    this.components.forEach((component) => component.init());

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.vector2d.x,
      this.position.vector2d.y,
      this.width,
      this.heigth
    );
  }

  public OnUpdate(): void {
    this.components.forEach((component) => component.update());

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.vector2d.x,
      this.position.vector2d.y,
      this.width,
      this.heigth
    );
  }
}
