import { app, BrowserWindow } from "electron";

import { Game } from "./Game";
import { BASE_HEIGHT, BASE_WIDTH, Config } from "./Config";
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

// implemeting electron [ NOT READY YET ]
const createWindow = () => {
  const win = new BrowserWindow({
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");

  main();
};

app.whenReady().then(() => {
  createWindow();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
});
