class HanoiView {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupTowers();
    // this.render();
    this.source = -1;
    
    $(".towers").on("click", "ul" ,(e) => {
      // debugger
      if (this.source === -1) {
        this.source = $(e.currentTarget).data("idx");
      } else {
        debugger
        let moved = this.game.isValidMove(this.source, $(e.currentTarget).data("idx"));
        if (moved) {
          this.game.move(this.source, $(e.currentTarget).data("idx"));
          // debugger
          // let el = this.piles[this.source].pop();
          // this.piles[$(e.currentTarget).data("idx")].push(el);
          this.render(this.source, $(e.currentTarget).data("idx"));
        }
        this.source = -1;
      }
    });

  }

  setupTowers() {
  //  let firstPile = $("<ul>");
  //  let secondPile = $("<ul>");
  //  let thirdPile = $("<ul>");
  //   let firstDisk = $("<li>").data("index", 1);
  //   let secondDisk = $("<li>").data("index", 2);
  //   let thirdDisk = $("<li>").data("index", 3);

  //  firstPile.append(firstDisk, secondDisk, thirdDisk);
  //  this.el.append(firstPile, secondPile, thirdPile);
  let towers = [];
  this.game.towers.forEach((tower, tower_idx) => {
    towers.push($("<ul>").data("idx", tower_idx));
    // tower.forEach((disk, idx) => {
    //   debugger
    //   towers[tower_idx].unshift($("<li>").data("idx", idx));
    // });
    for (let index = 1; index <= tower.length; index++) {
      towers[tower_idx].append($("<li>").data("idx", index).text(index));
    }
  });
    towers.forEach((tower) => {

      this.el.append(tower);
    });

  this.piles = towers;
}

  render(start, end) {
    let firstPile = this.piles[start];
    let el = firstPile.find(":first-child").remove(); 
    this.piles[end].append(el);
  }
}

module.exports = HanoiView;