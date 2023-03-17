import { GameObject } from './GameObject'

export abstract class Component {
  public gameObject: GameObject | null = null;
  
  abstract init(): void;
  abstract update(): void;
}