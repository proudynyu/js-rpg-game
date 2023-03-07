export class Sprite implements Component {
  private _image: HTMLImageElement;
  private ctx: CanvasRenderingContext2D,

  constructor(
    private imageSrc: string,
    private position: Vector2d,
    private height?: number,
    private width?: number
  ) {
    this._image = {} as HTMLImageElement
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
    this.ctx.drawImage(this._image!, this.position.x, this.position.y)
  }
}
