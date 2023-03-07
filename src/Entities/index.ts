import { keyboardEvents } from "../Events";
import { GameObject } from "../GameObject";
import { Player } from "./Player";

export class Entities {
  public _entities: GameObject[] = []

  get entities() { return this._entities }

  public static create() {
    const player = new Player(
      { x: 0, y: 0 },
      keyboardEvents.movementKeys
    )
  }
}