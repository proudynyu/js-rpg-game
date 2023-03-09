import { Game } from "./Game";
import { Config } from "./Config";
import { keyboardEvents } from "./Events";

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

window.context = ctx;


// TODO: creating objects here for now. Must change in the future for something
// like Map or Overworld

// ----

function main() {
  const config = new Config("js-game");
  keyboardEvents.keyboardEvents();

  const game = new Game(config, canvas);

  game.init();
}

main();
