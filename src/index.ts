

import { Window } from "./Window";
import { Game } from "./Game";
import { Player } from "./Entities/Complex";
import { Vector2 } from "./utils/Vector";
import { Sprite } from "./Components/Sprite";

const player = new Player(new Vector2(32, 32), 4);

player.addComponent<Sprite>(
  new Sprite("./assets/orc_male.png", player.position, 32, 32)
);

function main() {
  const windowInstance = new Window();
  const game = Game.get(windowInstance);

  windowInstance.init();

  game.addNewGameObject(player)
  game.init();
}

main();
