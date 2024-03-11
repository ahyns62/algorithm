function solution(n) {
  const ans = [];
  for (let i = 2; i <= n; i++) {
    ans[i] = i;
  }
  for (let j = 2; j <= n; j++) {
    if (ans[j] === 0) continue;
    for (let k = j + j; k <= n; k += j) {
      ans[k] = 0;
    }
  }

  return ans.filter((el) => el).length;
}