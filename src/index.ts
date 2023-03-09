import { Game } from "./Game";
import { Config } from "./Config";
import { keyboardEvents } from "./Events";
import { Rectangle } from "./Entities/Basics";
import { Vector2 } from "./utils/Vector";
import { Player } from "./Entities/Complex";
import { Sprite } from "./Components/Sprite";

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

window.context = ctx;

// TODO: creating objects here for now. Must change in the future for something
// like Map or Overworld
const rect = new Rectangle(new Vector2(0, 0), 32, 32);
const player = new Player(
  keyboardEvents.movementKeys,
  new Vector2(32, 32),
  4
)

player.addComponent<Sprite>(new Sprite(
  "./assets/orc_male.png",
  player.position.vector2d,
  32, 32
))
// ----

function main() {
  const config = new Config("js-game");
  keyboardEvents.keyboardEvents();

  const game = new Game(config, canvas);

  game.addNewGameObject(rect);
  game.addNewGameObject(
    new Rectangle(
      new Vector2(config.screenWidth / 2, config.screenHeight / 2),
      32,
      32,
      "red"
    )
  );

  game.addNewGameObject(player)

  game.init();
}

main();
