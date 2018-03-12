import { shuffle } from './game.js';
import './styles.css';

$(document).ready(function() {
  var board = [];
  $('#start').click(function(event) {
    event.preventDefault();
    $('.game').show();
    $('.intro').hide();
    board = shuffle();
  });
});
