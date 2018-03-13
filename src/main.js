import { Game } from './game.js';
import './styles.css';

$(document).ready(function() {
  var counter = 0;
  var newGame;
  var link1 = "http://www.freepngimg.com/thumb/elephant/31379-4-elephant-transparent-background-thumb.png";
  var link2 = "http://clipground.com/images/australian-birds-clipart-8.jpg";
  var link3 = "http://pluspng.com/img-png/dog-png-dog-png-image-png-image-200.png";

  $('#start').click(function() {
    $('.game').show();
    $('.intro').hide();
    newGame = new Game();
    newGame.shuffle();
    newGame.setBoard();
  });

  $(".card").unbind().click(function() {
    if (counter == 0) {
      counter++;
      newGame.card1Class = $(this).attr("class");
      newGame.card1Id = $(this).attr("id");
      $("#img" + newGame.card1Id).show();
    } else if ((counter == 1) && (newGame.card1Id != $(this).attr("id"))) {
      counter = 0;
      newGame.card2Class = $(this).attr("class");
      newGame.card2Id = $(this).attr("id");
      $("#img" + newGame.card2Id).show();
      newGame.checker();
      $(".turns").text(newGame.turns);
    }
  });

  $("#reload").click(function(){
    location.reload();
  });
});
