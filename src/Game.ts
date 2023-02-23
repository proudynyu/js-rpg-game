import { Config } from "./Config";

export class Game {
  private active: boolean = false;

  constructor(
    private config: Config,
    private ctx: CanvasRenderingContext2D,
    private canvas: HTMLCanvasElement
  ) {}

  get isActive() {
    return this.active;
  }

  set handleActive(running: boolean) {
    this.active = running;
  }

  private handleEvents() {
    // if i want to pause the game, i could use this function
    // like `if press "space" handleActive(isActive!)`
  }

  private update() {}

  private render() {
    if (this.active) {
      this.update();
      requestAnimationFrame(() => {
        this.render();
      });
    }
  }

  public init() {
    console.debug("game initializing...");
    this.canvas.width = this.config.screenWidth;
    this.canvas.height = this.config.screenHeight;
    this.active = true;

    console.debug("starting looping...");
    this.render();
  }
}
