import { Vector2 } from "../../utils/Vector";
import { GameObject } from "../GameObject";

export class Player extends GameObject {
  constructor(
    private _keys: MovementKeys,
    position: Vector2 = new Vector2(0, 0 )
  ) {
    super(position);
  }

  public OnStart() {
    this.components.forEach((component) => component.init());
  }

  public OnUpdate() {
    this.components.forEach((component) => component.update());

    if (this._keys?.a.pressed) this.position.vector2d.x += -16;
    else if (this._keys?.d.pressed) this.position.vector2d.x += 16;
    else if (this._keys?.s.pressed) this.position.vector2d.y += 16;
    else if (this._keys?.w.pressed) this.position.vector2d.y += -16;
  }
}
