import { Config } from "./Config";
import { GameObject } from "./GameObject";

export class Game {
  private active: boolean = false;
  private gameObjects: GameObject[] = []

  constructor(
    private config: Config,
    private ctx: CanvasRenderingContext2D,
    private canvas: HTMLCanvasElement
  ) {}

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
  }

  private render(): void {
    this.ctx.clearRect(0,0,this.config.screenWidth, this.config.screenHeight)
    
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

    this.gameObjects.forEach(gameObject => {
      gameObject.init()
    })
    
    this.active = true;
    console.debug("starting looping...");
    this.render();
  }

  public addNewGameObject(gameObject: GameObject) {
    if (!this.active) {
      this.gameObjects.push(gameObject)
    } else {
      this.gameObjects.push(gameObject)
      gameObject.init()
    }
  }
}
