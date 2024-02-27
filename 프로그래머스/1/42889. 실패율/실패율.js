function solution(N, stages) {
    let ans = [];
    for(let i = 1; i < N + 1; i++){
        let num1 = stages.filter((x) => x === i).length;
        let num2 = stages.filter((x) => x >= i).length;
        ans.push([i, num1 / num2]);
    }
    ans.sort((a, b) => b[1] - a[1]);
    return ans.map((x) => x[0]);
}