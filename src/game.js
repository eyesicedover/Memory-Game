// export function Game() {
//
// }

export function shuffle() {
  var cardsArray = ["set1", "set1", "set2", "set2", "set3", "set3"];
   for (var i = cardsArray.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
   }
   return cardsArray;
}
