import { Vector2 } from "../utils/Vector";
import { Sprite } from "../Components";
import { keyboardEvents } from "../Events";
import { GameObject } from "../GameObject";
import { Player } from "./Complex/Player";

export class Entities {
  public _entities: GameObject[] = [];

  get entities() {
    return this._entities;
  }

  public create() {
    const player = new Player(keyboardEvents.movementKeys, new Vector2(0, 0));

    const sprite = new Sprite(
      "./assets/human_female.png",
      player.position.vector2d,
      32,
      32
    );
    player.addComponent<Sprite>(sprite);

    this._entities.push(player);
  }
}
