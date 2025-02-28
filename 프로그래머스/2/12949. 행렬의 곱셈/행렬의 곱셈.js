function solution(arr1, arr2) {
    let ans = [];
    const r1 = arr1.length; // arr1의 행
    const r2 = arr2.length; // arr2의 행
    const c1 = arr1[0].length; // arr1의 열
    const c2 = arr2[0].length; // arr2의 열
    
    // 결과 담을 2차원 배열 초기화 (r1 * c2)
    for(let i = 0; i < r1; i++){
        ans.push(new Array(c2).fill(0));
    }
    
    // 행렬의 곱 연산
    for(let i = 0; i < r1; i++){
        for(let j = 0; j < c2; j++){
            for(let k = 0; k < c1; k++){
                ans[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return ans;
}