import { shuffle } from './game.js';
import './styles.css';

$(document).ready(function() {
  var board = [];
  var counter = 0;
  var card1 = "nothing";
  var card2 = "nothing";

  $('#start').click(function() {
    $('.game').show();
    $('.intro').hide();
    board = shuffle();
    $("#spot1").addClass(board[0]);
    $("#spot2").addClass(board[1]);
    $("#spot3").addClass(board[2]);
    $("#spot4").addClass(board[3]);
    $("#spot5").addClass(board[4]);
    $("#spot6").addClass(board[5]);
    // var newGame = new Game();
  });

  $(".card").unbind().click(function() {
    var holder = $(this).attr("class");
    if ((counter == 0) && !holder.includes("show")) {
      counter++;
      card1 = holder;
      $(this).show();
      $(this).addClass("show");
    } else if (counter == 1 && !holder.includes("show")) {
      counter = 0;
      card2 = holder;
      $(this).show();
      $(this).addClass("show");
      // newGame.checker(card1, card2);
    }

    if (card1 == card2) {
      $('.intro').show();
    }
  });
});
