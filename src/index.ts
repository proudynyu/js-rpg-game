const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

const cl = console.log;

const BASE_WIDTH = 1024;
const BASE_HEIGHT = 576;
const PIXEL_SIZE = 32;

canvas.width = BASE_WIDTH;
canvas.height = BASE_HEIGHT;

ctx.fillStyle = "rgb(255,255,255)";
for (let i = 0; i < BASE_WIDTH; i += PIXEL_SIZE) {
  for (let j = 0; j < BASE_WIDTH; j += PIXEL_SIZE) {
    ctx.strokeRect(i, j, PIXEL_SIZE, PIXEL_SIZE);
  }
}
