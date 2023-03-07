import { Sprite } from "../Components";
import { keyboardEvents } from "../Events";
import { GameObject } from "../GameObject";
import { Player } from "./Player";

export class Entities {
  public _entities: GameObject[] = []

  get entities() { return this._entities }

  public create() {
    const player = new Player(
      { x: 0, y: 0 },
      keyboardEvents.movementKeys
    )
    const sprite = new Sprite('build/assets/human_female.png', window.context, this._position, 32, 32)
    player.addComponent<Sprite>(sprite)

    this._entities.push(player)
  }
}