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
    var array1 = [1,2,3,4,5,6,7,8,9];
    
    var a = new Row(array1);
    var b = new Row(array1);
    var d = new Row(array1);
    var c = new Row(array1);
    var e = new Row(array1);
    var f = new Row(array1);
    var g = new Row(array1);
    var h = new Row(array1);
    var i = new Row(array1);
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
    
    
    
    
    
    expect(game.rows[0].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[1].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[2].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[3].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[4].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[5].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[6].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[7].r).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(game.rows[8].r).toEqual([1,2,3,4,5,6,7,8,9]);

  });

  test('should correctly add 9 rows with 9 indices ', function(){
    expect(game.rows.length).toEqual(9);
    
  }); 

  test('should correctly check if row has no repeating values', function(){

  });

  test('should correctly check if all 9 rows have no repeating values', function(){

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

