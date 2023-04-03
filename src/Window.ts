import { keyboardEvents } from "@events";

export class Window {
  private width: number;
  private height: number;
  private title: string;
  private spriteSize: number;

  public static window: Window | null = null;

  public static get() {
    if (!Window.window) {
      Window.window = new Window();
    }
    return Window.window;
  }

  private constructor() {
    this.height = 1024;
    this.width = 576;
    this.title = "js game";
    this.spriteSize = 32;
  }

  get screenTitle() {
    return this.title;
  }

  get screenWidth() {
    return this.width;
  }

  get screenHeight() {
    return this.height;
  }

  get pixelSize() {
    return this.spriteSize;
  }

  public init(): void {
    const canvas = document.querySelector("canvas")!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = this.width;
    canvas.height = this.height;

    window.context = ctx;
    
    // events
    keyboardEvents.keyboardEvents();

  }
}
