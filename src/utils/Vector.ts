export class Vector2 {
  private vec2: Vector2d;

  constructor(x: number, y: number) {
    this.vec2 = { x, y };
  }

  get vector2d() {
    return this.vec2;
  }

  public static vector2DSum(vectorOne: Vector2d, vectorTwo: Vector2d): Vector2 {
    return new Vector2(vectorOne.x + vectorTwo.x, vectorOne.y + vectorTwo.y);
  }

  public static vector2DScalarMultiply(vector: Vector2d, scalar: number) {
    return new Vector2(vector.x * scalar, vector.y * scalar)
  }
}
