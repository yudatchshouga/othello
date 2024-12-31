export const sum = (a: number, b: number) => a + b;

export function getFlippable(
  board: string[],
  player: string,
  position: string
): string[] {
  const [row, col] = position.split('-').map(Number); // 入力例: "3-5" -> [3, 5]

  // 位置が盤外の場合は空配列を返す
  if (row < 0 || row >= 8 || col < 0 || col >= 8) {
    return [];
  }

  const opponent = player === 'B' ? 'W' : 'B';
  const directions = [
    [-1, 0],
    [1, 0], // 縦方向
    [0, -1],
    [0, 1], // 横方向
    [-1, -1],
    [1, 1], // 斜め方向 (左上 -> 右下)
    [-1, 1],
    [1, -1], // 斜め方向 (右上 -> 左下)
  ];

  const flippable = [];

  // 各方向を確認
  for (const [dx, dy] of directions) {
    const currentFlippable = [];
    let x = row + dx;
    let y = col + dy;
    let foundOpponent = false;

    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      // 盤面の範囲内をチェック
      if (board[x][y] === opponent) {
        currentFlippable.push(`${x}-${y}`);
        foundOpponent = true;
      } else if (board[x][y] === player) {
        if (foundOpponent) {
          flippable.push(...currentFlippable);
        }
        break;
      } else {
        // 空マス
        break;
      }

      x += dx;
      y += dy;
    }
  }

  return flippable;
}

export function put(
  board: string[],
  player: string,
  position: string
): string[] {
  const flippable = getFlippable(board, player, position);

  if (flippable.length === 0) {
    return board;
  }

  const newBoard = board.map((row) => row.split(''));

  const [row, col] = position.split('-').map(Number);
  newBoard[row][col] = player;

  for (const pos of flippable) {
    const [r, c] = pos.split('-').map(Number);
    newBoard[r][c] = player;
  }

  return newBoard.map((row) => row.join(''));
}

// おける箇所を取得
export function getPuttable(board: string[], player: string): string[] {
  const puttable = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== 'N') {
        continue;
      }

      if (getFlippable(board, player, `${i}-${j}`).length > 0) {
        puttable.push(`${i}-${j}`);
      }
    }
  }

  return puttable;
}
