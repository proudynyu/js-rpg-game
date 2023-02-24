import { Config } from "./configs/Config";
import { GameObject } from "./GameObject";

export class Game {
  private active: boolean = false;
  private entities: GameObject[] = [];

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

  private handleEvents(): void {
    // if i want to pause the game, i could use this function
    // like `if press "space" handleActive(isActive!)`
  }

  private update(): void {
    this.entities.forEach((entity) => {
      entity.update();
    });
  }

  private render(): void {
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
    this.active = true;

    const midScreen = {
      xpos: this.config.screenWidth / 2,
      ypos: this.config.screenHeight / 2,
    };

    // refactor this after some more implementations
    const player = new GameObject(midScreen.ypos, midScreen.xpos, this.ctx);
    this.entities.push(player);
    // ---

    console.debug("starting looping...");
    this.render();
  }
}
