const BASE_WIDTH = 1024;
const BASE_HEIGHT = 576;
const PIXEL_SIZE = 32;

export class Config {
  constructor(
    private screenTitle: string,
    private screenWidth: number = BASE_WIDTH,
    private screenHeight: number = BASE_HEIGHT,
    private pixelSize: number = PIXEL_SIZE
  ) {}

  get title() {
    return this.screenTitle;
  }

  get width() {
    return this.screenWidth;
  }

  get height() {
    return this.screenHeight;
  }

  get pSize() {
    return this.pixelSize;
  }

  set width(w: number) {
    this.screenWidth = w;
  }

  set height(h: number) {
    this.screenHeight = h;
  }

  set pixel(p: number) {
    this.pixelSize = p;
  }
}
