export function Game() {
this.rows = []
}


Game.prototype.addRow = function(row) {
  this.rows.push(row);
}

Game.prototype.checkSudoku = function() {
  //for (var i = 0; i < rows.length; i++)
  //  
}




// Game.prototype.findDuplicate = function(rowNum){
  
//   for(var i=0; i<this.rows.length;i++){
//     for(var j=i+1; j<this.rows.length;j++){
//       if(this.rows[rowNum].r[i] ===this.rows[rowNum].r[j] ){
//         return true;
//       }
//     }
//   }
//   return false;
// }

Game.prototype.findDuplicate = function(rowNum){
  var rowNumber = rowNum;
  for (let n = 0; n <= rowNumber; n++){
    for(var i=0; i<this.rows.length;i++){
      for(var j=i+1; j<this.rows.length;j++){
        if(this.rows[n].r[i] ===this.rows[n].r[j] ){
          return true;
        }
      }
    }
  }
  return false;
}



export function Row(r) {
  this.r = r
}
