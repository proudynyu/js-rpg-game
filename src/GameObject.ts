export function getComponentId() {}
export function getComponentTypeId() {}

export abstract class GameObject {
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
  }

  public removeComponent<T extends Component>(component: T): void {
    for (const ClassComponent of this.components) {
      if (component === ClassComponent) {
        this.components.splice(this.components.indexOf(component), 1);
      }
    }
  }

  abstract OnStart(): void;
  abstract OnUpdate(): void;
  abstract Log(): void;
}
