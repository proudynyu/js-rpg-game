import { Component } from ".";

export class Sprite extends Component {
  private _image: HTMLImageElement;
  private ctx: CanvasRenderingContext2D;
  
  constructor(
    private imageSrc: string,
    private position: Vector2d,
    private height?: number,
    private width?: number
    ) {
      super();

      this.ctx = window.context
      const image = new Image(this.width, this.height);
      image.src = this.imageSrc;
      this._image = image
  }

  public init(): void {
    console.log({pos: this.position})
    this._image.onload = () => {
      this.ctx.drawImage(this._image, this.position.x, this.position.y)
    };
  }

  public update() {
    this.ctx.drawImage(this._image, this.position.x, this.position.y)
  }
}
