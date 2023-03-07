import { GameObject } from "../GameObject";
import { Sprite } from '../Components'

export class Player extends GameObject {
  private ctx: CanvasRenderingContext2D
  
  constructor(
    private _position: Vector2d,
    private _keys: MovementKeys
  ) {
    super()
    this.ctx = window.context
  }

  public OnStart() {
    this.components.forEach(component => component.init())
  };

  get position(): Vector2d {
    return this._position;
  }

  public OnUpdate() {
    this.ctx.fillStyle = "#fff"
    this.ctx.fillRect(this._position.x, this._position.y, 32, 32)

    if (this._keys?.a.pressed) this._position.x += -16;
    else if (this._keys?.d.pressed) this._position.x += 16;
    else if (this._keys?.s.pressed) this._position.y += 16;
    else if (this._keys?.w.pressed) this._position.y += -16;

    this.components.forEach(component => component.update())
  };

  public Log() {
    console.log('Initializing Player...')
  }
}
