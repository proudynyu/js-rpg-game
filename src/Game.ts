import { Config } from "./Config";

export class Game {
  private active: boolean = false;

  constructor(
    private config: Config,
    private ctx: CanvasRenderingContext2D,
    private canvas: HTMLCanvasElement
  ) {}

  public get isActive() {
    return this.active;
  }

  public set handleActive(running: boolean) {
    this.active = running;
  }

  public handleEvents() {}

  public update() {}

  public render() {}

  public init() {
    console.log("game initializing...");
    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;
    this.active = true;
  }
}
