import { Component } from "../Component";
import { Vector2 } from "@utils";

export class Sprite extends Component {
  private _image: HTMLImageElement;
  private ctx: CanvasRenderingContext2D;

  constructor(
    private imageSrc: string,
    private position: Vector2,
    private height?: number,
    private width?: number
  ) {
    super();

    this.ctx = window.context;
    const image = new Image(this.width, this.height);
    image.src = this.imageSrc;
    this._image = image;
  }

  public init(): void {
    this._image.onload = () => {
      this.ctx.drawImage(
        this._image,
        this.position.x,
        this.position.y
      );
    };
  }

  public update() {
    this.ctx.drawImage(
      this._image,
      this.position.x,
      this.position.y
    );
  }
}
