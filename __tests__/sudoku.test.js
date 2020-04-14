import { Game } from './../src/sudoku.js';
import { Row } from './../src/sudoku.js';

//  row1 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row2 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row3 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row4 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row5 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row6 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row7 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row8 [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  row9 [1, 2, 3, 4, 5, 6, 7, 8, 9]

// index [0, 1, 2, 3, 4, 5, 6, 7, 8]

// this is the index  cell1 = [row1[0, 1, 2], row2[0, 1, 2], row3[0, 1, 2]]
// this is the actual values = cell1[row1[1,2,3], row2[1,2,3], row3[1, 2, 3]]

//

describe('Game', () => {
  var game;
  beforeEach(() => {
    game = new Game();
    var array1 = [7,1,6,5,2,3,8,4,9];
    var array2 = [5,8,9,4,7,1,2,3,6];
    var array3 = [4,3,2,6,9,8,5,1,7];
    var array4 = [1,5,7,3,8,6,9,2,4];
    var array5 = [8,2,4,9,5,7,3,6,1];
    var array6 = [6,9,3,1,4,2,7,8,5];
    var array7 = [2,4,8,7,1,9,6,5,3];
    var array8 = [9,6,1,2,3,5,4,7,8];
    var array9 = [3,7,5,8,6,4,1,9,2];
    
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
  

  });
  

  test('should correctly add row to game object',
  () => {
    
    expect(game.rows[0].r).toEqual([7,1,6,5,2,3,8,4,9]);
    expect(game.rows[1].r).toEqual([5,8,9,4,7,1,2,3,6]);
    expect(game.rows[2].r).toEqual([4,3,2,6,9,8,5,1,7]);
    expect(game.rows[3].r).toEqual([1,5,7,3,8,6,9,2,4]);
    expect(game.rows[4].r).toEqual([8,2,4,9,5,7,3,6,1]);
    expect(game.rows[5].r).toEqual([6,9,3,1,4,2,7,8,5]);
    expect(game.rows[6].r).toEqual([2,4,8,7,1,9,6,5,3]);
    expect(game.rows[7].r).toEqual([9,6,1,2,3,5,4,7,8]);
    expect(game.rows[8].r).toEqual([3,7,5,8,6,4,1,9,2]);

  });

  test('should correctly add 9 rows with 9 indices ', function(){
    expect(game.rows.length).toEqual(9);
    
  }); 
  

  test('should correctly check if row has no repeating values', function(){
    expect(game.findDuplicate(0)).toEqual(false);
  });

  test('should correctly check if all 9 rows have no repeating values', function(){
    expect(game.findDuplicate(8)).toEqual(false);
  });

  test('should correctly check if column has no repeating values', function(){

  });

  test('should correctly check if all 9 columns have no repeating values', function(){

  });

  test('should correctly check if block has no repeating values', function(){

  });

  test('should correctly check if all 9 blocks have no repeating values', function(){

  });


});

