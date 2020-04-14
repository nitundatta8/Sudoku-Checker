import { Game } from './../src/sudoku.js';
import { Row } from './../src/sudoku.js';

$(document).ready(function(){
  var game = new Game();
  
  var array1 = [7,1,6,5,2,3,8,4,3];
  var array2 = [5,8,9,4,7,1,2,3,6];
  var array3 = [4,3,2,6,9,8,5,1,7];
  var array4 = [1,5,7,3,8,6,9,2,4];
  var array5 = [8,2,4,9,5,7,3,6,1];
  var array6 = [6,9,3,1,4,2,7,8,5];
  var array7 = [2,4,8,7,1,9,6,5,3];
  var array8 = [9,6,1,2,3,5,4,7,8];
  var array9 = [3,7,5,8,6,4,1,9,3];
  
  var a = new Row(array1);
  var b = new Row(array2);
  var c = new Row(array3);
  var d = new Row(array4);
  var e = new Row(array5);
  var f = new Row(array6);
  var g = new Row(array7);
  var h = new Row(array8);
  var i = new Row(array9);
  game.addRow(a);
  game.addRow(b);
  game.addRow(c);
  game.addRow(d);
  game.addRow(e);
  game.addRow(f);
  game.addRow(g);
  game.addRow(h);
  game.addRow(i);




})