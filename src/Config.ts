const BASE_WIDTH = 1024;
const BASE_HEIGHT = 576;
const PIXEL_SIZE = 32;

export class Config {
  private _movementKeys: MovementKeys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
  };

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

  get movementKeys() {
    return this._movementKeys;
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


  public movementEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          this.movementKeys.w.pressed = true;
          break;
        case "a":
          this.movementKeys.a.pressed = true;
          break;
        case "s":
          this.movementKeys.s.pressed = true;
          break;
        case "d":
          this.movementKeys.d.pressed = true;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
          this.movementKeys.w.pressed = false;
          break;
        case "a":
          this.movementKeys.a.pressed = false;
          break;
        case "s":
          this.movementKeys.s.pressed = false;
          break;
        case "d":
          this.movementKeys.d.pressed = false;
          break;
      }
    });
  }
}
