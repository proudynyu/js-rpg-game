export class Sprite {
  constructor(
    private imageSrc: string,
    private ctx: CanvasRenderingContext2D,
    private xpos: number,
    private ypos: number,
    private height?: number,
    private width?: number
  ) {}

  public loadSprite() {
    const image = new Image(this.width, this.height);
    image.src = this.imageSrc;

    image.onload = () => {
      this.ctx.drawImage(image, this.xpos, this.ypos);
    };
  }
}
