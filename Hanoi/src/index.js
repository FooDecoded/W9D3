const Game = require("./game.js");
const HanoiView = require("./hanoi-view.js");

$(() => {
  const rootEl = $('.towers');
  const game = new Game();
  const view = new HanoiView(game, rootEl);
});
