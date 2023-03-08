export class Vector2 {
  private vec2: Vector2d;
  constructor(x: number, y: number) {
    this.vec2 = { x, y };
  }

  get vector2d() {
    return this.vec2;
  }

  public static vector2DSum(vectorOne: Vector2d, vectorTwo: Vector2d): Vector2 {
    const x = vectorOne.x + vectorTwo.x;
    const y = vectorOne.y + vectorTwo.y;
    return new Vector2(x, y);
  }
}
