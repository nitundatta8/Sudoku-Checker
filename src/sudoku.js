export function Game() {
this.rows = []
}


Game.prototype.addRow = function(row) {
  this.rows.push(row);
}

export function Row(r) {
  this.r = r
}
