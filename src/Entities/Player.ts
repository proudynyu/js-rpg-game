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
    const sprite = new Sprite('assets/human_female.png', this.ctx, this._position, 32, 32)
    this.addComponent<Sprite>(sprite)

    this.components.forEach(component => component.init())
  };

  get position(): Vector2d {
    return this._position;
  }

  public OnUpdate() {
    this.ctx.fillStyle = "#fff"
    this.ctx.fillRect(this._position.x, this._position.y, 32, 32)

    if (this._keys?.a.pressed) this._position.x += -1;
    else if (this._keys?.d.pressed) this._position.x += 1;
    else if (this._keys?.s.pressed) this._position.y += 1;
    else if (this._keys?.w.pressed) this._position.y += -1;

    this.components.forEach(component => component.update())
  };

  public Log() {
    console.log('Initializing Player...')
  }
}
