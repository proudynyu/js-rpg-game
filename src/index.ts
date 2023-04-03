

import { Window } from "./Window";
import { Game } from "./Game";

function main() {
  const windowInstance = Window.get()

  windowInstance.init();

  const game = new Game(windowInstance);

  game.init();
}

main();
