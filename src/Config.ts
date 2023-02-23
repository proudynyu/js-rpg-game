const BASE_WIDTH = 1024;
const BASE_HEIGHT = 576;
const PIXEL_SIZE = 32;

export class Config {
  constructor(
    private _screenTitle: string,
    private _screenWidth: number = BASE_WIDTH,
    private _screenHeight: number = BASE_HEIGHT,
    private _pixelSize: number = PIXEL_SIZE
  ) {}

  get screenTitle() {
    return this._screenTitle;
  }

  get screenWidth() {
    return this._screenWidth;
  }

  get screenHeight() {
    return this._screenHeight;
  }

  get pixelSize() {
    return this._pixelSize;
  }

  set screenWidth(w: number) {
    this._screenWidth = w;
  }

  set screenHeight(h: number) {
    this._screenHeight = h;
  }

  set pixelSize(p: number) {
    this._pixelSize = p;
  }
}
