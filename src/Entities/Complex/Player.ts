import { Vector2 } from "@utils";
import { GameObject } from "../../GameObject";

export class Player extends GameObject {
  constructor(position: Vector2 = new Vector2(0, 0), speed?: number) {
    super(position, speed);
  }

  public OnStart() {
    this.components.forEach((component) => {
      component.gameObject = this;
      component.init();
    });
  }

  public OnUpdate() {
    this.components.forEach((component) => component.update());
  }
}
