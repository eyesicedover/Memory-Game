export function Game() {
  this.card1Class = "";
  this.card2Class = "";
  this.card1Id = "";
  this.card2Id = "";
  this.successes = 0;
  this.turns = 0;
  this.board = [];
}

Game.prototype.shuffle = function() {
  var baseArray = ["1", "1", "2", "2", "3", "3"];
  for (var i = baseArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [baseArray[i], baseArray[j]] = [baseArray[j], baseArray[i]];
  }
  this.board = baseArray;
};

Game.prototype.setBoard = function(link1, link2, link3) {
  var link = "";
  for (var i = 0; i < this.board.length; i++) {
    $("#" + (i+1)).addClass(this.board[i]);
    if (this.board[i] == "1") {
      link = link1;
    } else if (this.board[i] == "2") {
      link = link2;
    } else {
      link = link3;
    }
    $("#img" + (i+1)).html("<img src='"+ Game.getLink(link1, link2, link3) +"'>");
  }
}

Game.prototype.checker = function() {
  this.turns++;
  if (this.card1Class == this.card2Class) {
    this.successes++;
    if (this.successes == 3) {
      $(".game").fadeOut(1000);
      $("#win").fadeIn(1000);
    }
  } else if (this.card1Class != this.card2Class) {
    $("#img" + this.card1Id).fadeOut(1000);
    $("#img" + this.card2Id).fadeOut(1000);
    this.card1Class = "";
    this.card2Class = "";
  }
};
