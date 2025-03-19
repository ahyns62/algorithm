function solution(n, w, num) {
    const boxes = Array.from({ length: w }, () => []);
    let boxNum = 0;
    let direction = 1;  // 오른쪽으로 진행하는 경우 1, 왼쪽으로 진행하는 경우 -1

    while (boxNum < n) {
        if (direction === 1) {
            for (let idx = 0; idx < w; idx++) {
                boxNum++;
                boxes[idx].push(boxNum);
                if (boxNum === n) break;
            };
        } else {
            for (let idx = w - 1; idx >= 0; idx--) {
                boxNum++;
                boxes[idx].push(boxNum);
                if (boxNum === n) break;
            };
        };
        
        direction *= -1;  
    }

    for (let values of boxes) {
        if (values.includes(num)) {
            return values.length - values.indexOf(num);
        }
    }

    return 0;
}