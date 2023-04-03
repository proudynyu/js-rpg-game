import { GameObject } from "./GameObject";
import { Window } from './Window'

export class Game {
  private active: boolean = false;
  private gameObjects: GameObject[] = [];
  private ctx: CanvasRenderingContext2D

  constructor(
    private windowInstance: Window,
  ) {
    this.ctx = window.context
  }

  get isActive(): boolean {
    return this.active;
  }

  set handleActive(running: boolean) {
    this.active = running;
  }

  private handleEvents(): void {
    // if i want to pause the game, i could use this function
    // like `if press "space" handleActive(isActive!)`
  }

  private update(): void {
    this.gameObjects.forEach((gameObject) => {
      gameObject.OnUpdate();
    });
  }

  private render(): void {
    this.ctx.clearRect(0, 0, this.windowInstance.screenWidth, this.windowInstance.screenHeight);

    this.handleEvents();

    if (this.active) {
      this.update();
      requestAnimationFrame(() => {
        this.render();
      });
    }
  }

  public init(): void {
    console.debug("game initializing...");

    this.gameObjects.forEach((gameObject) => {
      gameObject.OnStart();
    });

    this.active = true;
    console.debug("starting looping...");
    this.render();
  }

  public addNewGameObject(gameObject: GameObject) {
    if (!this.active) {
      this.gameObjects.push(gameObject);
    } else {
      this.gameObjects.push(gameObject);
      gameObject.OnStart();
    }
  }
}
