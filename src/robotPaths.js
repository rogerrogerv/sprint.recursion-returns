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

  solve() {
    const findPath = (row, column) => {
      if (row === this.boardSize - 1 && column === this.boardSize - 1) {
        this.pathCount += 1;
        return;
      }
      // eslint-disable-next-line prettier/prettier
      if (
        row < 0 ||
        row >= this.boardSize ||
        column < 0 ||
        column >= this.boardSize
      ) {
        return; //^^ out-of-bounds checking
      }
      if (this.board.hasBeenVisited(row, column)) {
        // eslint-disable-next-line no-useless-return
        return;
        // eslint-disable-next-line no-else-return
      } else {
        this.board.togglePiece(row, column);
        findPath(row + 1, column); // step Down
        findPath(row, column + 1); // step Right
        findPath(row - 1, column); // step Up
        findPath(row, column - 1); // step Left
        this.board.togglePiece(row, column);
      }
    };

    findPath(0, 0);
    return this.pathCount;
  }
}

module.exports = { RobotPaths };
