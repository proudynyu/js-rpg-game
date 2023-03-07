export class Sprite implements Component {
  private _image: HTMLImageElement | null = null;
  private ctx: CanvasRenderingContext2D;
  
  constructor(
    private imageSrc: string,
    private position: Vector2d,
    private height?: number,
    private width?: number
  ) {
    this.ctx = window.context
  }

  public init(): void {
    const image = new Image(this.width, this.height);
    image.src = this.imageSrc;

    image.onload = () => {
      this._image = image
    };
  }

  public update() {
    if (this._image)
      this.ctx.drawImage(this._image, this.position.x, this.position.y)
  }
}
