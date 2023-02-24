import { Sprite } from "./Components/Sprite";
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

    // refactor this after some more implementations
    const midScreen: Vector2d = {
      x: this.config.screenWidth / 2,
      y: this.config.screenHeight / 2,
    };

    const player = new GameObject(
      midScreen,
      this.ctx,
      true,
      this.config.movementKeys
    );

    player.addComponent<Sprite>(new Sprite("", this.ctx, player.position));

    this.entities.push(player);
    // ---

    console.debug("starting looping...");
    this.render();
  }
}
