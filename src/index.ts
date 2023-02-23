import { Game } from "./Game";
import { Config } from "./Config";

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

function main() {
  const config = new Config("js-game");
  const game = new Game(config, ctx, canvas);

  game.init();
}

main();
