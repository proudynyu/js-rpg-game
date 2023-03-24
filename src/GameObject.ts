import { Component } from "./Component";
import { Vector2 } from "./utils/Vector";

export abstract class GameObject {
  protected ctx: CanvasRenderingContext2D;
  public components: Component[] = [];

  constructor(
    private _position: Vector2,
    private _speed: number = 2,
    private _direction: Vector2 = new Vector2(0, 0)
  ) {
    this.ctx = window.context;
  }

  public getComponent<T extends Component>(
    classType: new () => T
  ): T | undefined {
    return (
      (this.components.find(
        (component) => component.constructor === classType
      ) as T) ?? undefined
    );
  }

  public addComponent<T extends Component>(component: T): void {
    component.gameObject = this;
    this.components.push(component);
  }

  public removeComponent<T extends Component>(component: T): void {
    for (const ClassComponent of this.components) {
      if (component === ClassComponent) {
        this.components.splice(this.components.indexOf(component), 1);
      }
    }
  }

  get position(): Vector2 {
    return this._position;
  }

  get speed(): number {
    return this._speed;
  }

  get direction(): Vector2 {
    return this._direction;
  }

  set speed(sp: number) {
    this._speed = sp;
  }

  set direction(v: Vector2) {
    this._direction = v;
  }

  set position(p: Vector2) {
    this._position = p;
  }

  abstract OnStart(): void;
  abstract OnUpdate(): void;
}
