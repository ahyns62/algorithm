function solution(k, m, score) {
  let sum = 0;
  score.sort((a, b) => b - a);

  const repeat = parseInt(score.length / m);
 
  for (let i = m - 1; i < m * repeat; i += m) {
    sum += score[i];
  }
    
  return sum * m;
    
}