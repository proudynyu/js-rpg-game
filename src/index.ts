import { Game } from "./Game";
import { Config } from "./Config";

import { keyboardEvents } from "@events";

import { Rectangle, Player } from "@entities";
import { Vector2 } from "@utils";
import { Sprite, Movement } from "@components";

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

window.context = ctx;

// TODO: creating objects here for now. Must change in the future for something
// like Map or Overworld
const rect = new Rectangle(new Vector2(0, 0), 32, 32);
const player = new Player(new Vector2(32, 32), 4);

player.addComponent<Sprite>(
  new Sprite("./assets/orc_male.png", player.position, 32, 32)
);

rect.addComponent<Movement>(new Movement(rect.position, 2));
// ----

function main() {
  const config = new Config("js-game");
  keyboardEvents.keyboardEvents();

  const game = new Game(config, canvas);

  game.addNewGameObject(
    new Rectangle(
      new Vector2(config.screenWidth / 2, config.screenHeight / 2),
      32,
      32,
      "red"
    )
  );
  game.addNewGameObject(rect);

  game.addNewGameObject(player);

  game.init();
}

main();
