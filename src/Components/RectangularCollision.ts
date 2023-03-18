import { Vector2 } from "@utils";
import { Component } from "../Component";

export class RectangularCollision extends Component {
  private ctx: CanvasRenderingContext2D;

  public showCollision: boolean = false;
  public isColliding: boolean = false;
  public width: number;
  public height: number;
  public position: Vector2;

  public static collisions: RectangularCollision[] = [];

  constructor(width: number, height: number, position: Vector2) {
    super();
    this.width = width;
    this.height = height;
    this.position = position;
    this.ctx = window.context;
  }

  set showRectCollision(show: boolean) {
    this.showCollision = show;
  }

  set colliding(c: boolean) {
    this.isColliding = c;
  }

  private draw() {
    this.ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  public init(): void {}

  public update(): void {
    if (this.gameObject) {
      this.position = this.gameObject.position
    }
    if (this.showCollision) {
      this.draw();
    }
  }

  public isIntersecting(rect: RectangularCollision): boolean {
    return (
      this.position.x >= rect.position.x + rect.width &&
      this.position.x + this.width <= rect.position.x &&
      this.position.y + this.height >= rect.position.y &&
      this.position.y >= rect.position.y + rect.height
    );
  }
}
