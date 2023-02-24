export class Sprite {
  constructor(
    private imageSrc: string,
    private ctx: CanvasRenderingContext2D,
    private position: Vector2d,
    private height?: number,
    private width?: number
  ) {}

  public loadSprite(): void {
    const image = new Image(this.width, this.height);
    image.src = this.imageSrc;

    image.onload = () => {
      this.ctx.drawImage(image, this.position.x, this.position.y);
    };
  }
}
