

import { Window } from "./Window";
import { Game } from "./Game";

function main() {
  const windowInstance = Window.get()
  const game = Game.get(windowInstance);

  windowInstance.init();
  game.init();
}

main();
