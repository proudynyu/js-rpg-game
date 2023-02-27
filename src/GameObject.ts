export function getComponentId() {}
export function getComponentTypeId() {}

export abstract class Component {
  public gameObject: GameObject | null = null;
  public abstract update: () => void;
  public abstract init: () => void;
}

export class GameObject {
  public components: Component[] = [];

  public getComponent<T extends Component>(component: T): T | undefined {
    for (const ClassComponent of this.components) {
      if (component === ClassComponent) {
        return component;
      }
    }
    return undefined;
  }

  public addComponent<T extends Component>(component: T): void {
    this.components.push(component);
    component.gameObject = this;
  }

  public removeComponent<T extends Component>(component: T): void {
    for (const ClassComponent of this.components) {
      if (component === ClassComponent) {
        this.components.splice(this.components.indexOf(component), 1);
      }
    }
  }

  public update() {
    for (let i = 0; i < this.components.length - 1; i++) {
      this.components[i].update();
    }
  }

  public init() {
    for (let i = 0; i < this.components.length - 1; i++) {
      this.components[i].init();
    }
  }

  // constructor(
  //   public _position: Vector2d,
  //   public ctx: CanvasRenderingContext2D,
  //   public isPlayer?: boolean,
  //   public keys?: MovementKeys
  // ) {
  //   this.isPlayer = isPlayer ?? false;
  // }

  // get position(): Vector2d {
  //   return this._position;
  // }

  // public update(): void {
  //   if (this.isPlayer) {
  //     this.ctx.fillStyle = "#fff"
  //     this.ctx.fillRect(this._position.x, this._position.y, 32, 32)
  //     if (this.keys?.a.pressed) this._position.x += -1;
  //     else if (this.keys?.d.pressed) this._position.x += 1;
  //     else if (this.keys?.s.pressed) this._position.y += 1;
  //     else if (this.keys?.w.pressed) this._position.y += -1;
  //   }
  // }
}
