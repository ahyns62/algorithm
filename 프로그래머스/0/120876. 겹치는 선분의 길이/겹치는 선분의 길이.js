function solution(lines) {
  const allPoints = new Set(); // 모든 점의 집합
  const overlapPoints = new Set(); // 겹치는 점의 집합

  for (let [start, end] of lines) {
    for (let i = start; i < end; i++) {
      if (allPoints.has(i)) {
        overlapPoints.add(i);
      } else {
        allPoints.add(i);
      }
    }
  }

  return overlapPoints.size;
}