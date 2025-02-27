function solution(numbers) {
    let ans = [];
    // 두 수를 선택하는 모든 경우의 수
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < i; j++){
            ans.push(numbers[i] + numbers[j]);
        }
    }
    // 중복 제거 한 다음 오름차순 정렬
    return [...new Set(ans)].sort((a, b) => a - b);
}