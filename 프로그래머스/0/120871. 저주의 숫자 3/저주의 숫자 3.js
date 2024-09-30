function solution(n) {
    let count = 0;
    let num = 0;
    
    while (count < n) {
        num++;
        // 3의 배수이거나 숫자 3이 포함된 경우를 건너뜀
        if (num % 3 === 0 || String(num).includes('3')) {
            continue;
        }
        count++; // 조건을 만족하는 경우에만 카운트 증가
    }
    
    return num;
}