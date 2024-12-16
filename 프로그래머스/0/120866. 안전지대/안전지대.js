function solution(board) {
  const n = board.length;
  let answer = 0;
    
  const isSafe = (x, y) => {
    const range = (k) => [k - 1, k, k + 1];
    for (const ry of range(y)) {
      for (const rx of range(x)) {
        if (board[ry]?.[rx]) {
          return false;
        }
      }
    }
    return true;
  };

  for (let y = 0; y < n; ++y) {
    for (let x = 0; x < n; ++x) {
      answer += isSafe(x, y);
    }
  }
  return answer;
}