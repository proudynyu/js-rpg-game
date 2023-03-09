import { Config } from "./Config";

import { GameObject } from "@entities";

export class Game {
  private active: boolean = false;
  private gameObjects: GameObject[] = [];
  private ctx: CanvasRenderingContext2D

  constructor(
    private config: Config,
    private canvas: HTMLCanvasElement
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
    this.ctx.clearRect(0, 0, this.config.screenWidth, this.config.screenHeight);

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
    this.canvas.width = this.config.screenWidth;
    this.canvas.height = this.config.screenHeight;

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
