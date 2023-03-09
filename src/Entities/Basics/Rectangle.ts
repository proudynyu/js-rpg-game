import { GameObject } from "../GameObject";
import { Vector2 } from "../../utils/Vector";

export class Rectangle extends GameObject {
  private ctx: CanvasRenderingContext2D

  constructor(
    private pos: Vector2,
    private width: number,
    private heigth: number,
    private color: string = '#fff'
  ) {
    super(pos)
    this.ctx = window.context
  }

  public OnStart(): void {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.pos.vector2d.x, this.pos.vector2d.y, this.width, this.heigth)
  } 

  public OnUpdate(): void {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.pos.vector2d.x, this.pos.vector2d.y, this.width, this.heigth)
  }
}