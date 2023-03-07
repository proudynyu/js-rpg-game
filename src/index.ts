import { Game } from "./Game";
import {  Config } from "./Config";
import { keyboardEvents } from "./Events";

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

window.context = ctx;

function main() {
  const config = new Config("js-game");
  keyboardEvents.keyboardEvents();

  const game = new Game(config, canvas);

  game.init();
}

main()
