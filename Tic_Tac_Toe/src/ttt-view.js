class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", (e) => {
      let cell = $(e.target);
      if (cell.hasClass("selected")) {
        alert("invalid move!");
      }
      let player = this.game.currentPlayer;
      this.game.playMove(cell.data("pos"));
      cell.addClass("selected");
      cell.text(player);
      if (this.game.isOver()) {
        alert(player);
      }
    });
    
  }

  makeMove($square) {
    // $square.on("click",)
  }

  setupBoard() {
    let board = $("<ul>");
    // debugger
    this.el.append(board);
    for(let i = 0; i < 3 ;i++) {
      for (let j = 0; j < 3; j++) {
        let cell = $("<li>");
        cell.data("pos", [i, j]);
        board.append($(cell));
      }
    }
  }
}

module.exports = View;
