export class KeyboardEvents {
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

  get movementKeys() {
    return this._movementKeys;
  }

  public keyboardEvents() {
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
