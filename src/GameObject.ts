export class GameObject {
  constructor(
    private ypos: number,
    private xpos: number,
    private ctx: CanvasRenderingContext2D
  ) {
  }

  public update(): void {}
}
