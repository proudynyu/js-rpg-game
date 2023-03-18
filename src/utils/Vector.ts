type Vector2d = { x: number; y: number };

export class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }

  public static vector2DSum(vectorOne: Vector2d, vectorTwo: Vector2d): Vector2 {
    return new Vector2(vectorOne.x + vectorTwo.x, vectorOne.y + vectorTwo.y);
  }

  public static vector2DScalarMultiply(vector: Vector2d, scalar: number) {
    return new Vector2(vector.x * scalar, vector.y * scalar);
  }

  public static vectorDistance(vec1: Vector2d, vec2: Vector2d) {
    return Math.sqrt(
      Math.pow(vec1.x + vec2.x, 2) + Math.pow(vec1.y + vec2.y, 2)
    );
  }
}
