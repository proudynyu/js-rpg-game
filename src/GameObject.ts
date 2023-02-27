export class GameObject {
  private components: any[] = [];

  constructor(
    private _position: Vector2d,
    private ctx: CanvasRenderingContext2D,
    private isPlayer?: boolean,
    private keys?: MovementKeys
  ) {
    this.isPlayer = isPlayer ?? false;
  }

  get position(): Vector2d {
    return this._position;
  }

  public update(): void {
    if (this.isPlayer) {
      this.ctx.fillStyle = "#fff"
      this.ctx.fillRect(this._position.x, this._position.y, 32, 32)
      if (this.keys?.a.pressed) this._position.x += -1;
      else if (this.keys?.d.pressed) this._position.x += 1;
      else if (this.keys?.s.pressed) this._position.y += 1;
      else if (this.keys?.w.pressed) this._position.y += -1;
    }
  }

  public addComponent<T>(component: T): void {
    this.components.push(component);
  }

  public getComponent<T>(component: T): T | undefined {
    const i = this.components.indexOf(component);
    if (i > 0) {
      return this.components[i];
    }
    return undefined;
  }
}
