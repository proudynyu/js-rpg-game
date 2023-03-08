import { Component } from './Components'

export abstract class GameObject {
  public components: Component[] = [];

  constructor(private _position: Vector2d) {}

  public getComponent<T extends Component>(component: T): T | undefined {
    for (const ClassComponent of this.components) {
      if (component === ClassComponent) {
        return component;
      }
    }
    return undefined;
  }

  public addComponent<T extends Component>(component: T): void {
    component.gameObject = this
    this.components.push(component);
  }

  public removeComponent<T extends Component>(component: T): void {
    for (const ClassComponent of this.components) {
      if (component === ClassComponent) {
        this.components.splice(this.components.indexOf(component), 1);
      }
    }
  }

  get position(): Vector2d {
    return this._position;
  }

  abstract OnStart(): void;
  abstract OnUpdate(): void;
}
