import { keyboardEvents } from "@events";
import { Component } from "../Component";
import { Vector2 } from "@utils";

export class Movement extends Component {
  private _keys: MovementKeys;
  constructor(private position: Vector2, private speed: number) {
    super();
    this._keys = keyboardEvents.movementKeys;
  }

  public init() {}

  public update() {
    if (this._keys?.a.pressed) this.position.x += -this.speed;
    else if (this._keys?.d.pressed) this.position.x += this.speed;
    else if (this._keys?.s.pressed) this.position.y += this.speed;
    else if (this._keys?.w.pressed) this.position.y += -this.speed;
  }
}
