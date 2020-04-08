/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.pathCount = 0;
    this.boardSize = size;
  }

  solve(row, column) {
    if (row === this.boardSize - 1 && column === this.boardSize - 1) {
      this.pathCount += 1;
      return;
    }
    if (
      row < 0 ||
      row >= this.boardSize ||
      column < 0 || column >= this.boardSize
    ) {
      return;
    }
    if (this.board.hasBeenVisited(row, column)) {
      return;
    } else {
      this.board.togglePiece(row, column);
      this.solve(row + 1, column);
      this.solve(row, column + 1);
      this.solve(row - 1, column);
      this.solve(row, column - 1);
    }
    return this.pathCount;
  }
}

module.exports = { RobotPaths };
