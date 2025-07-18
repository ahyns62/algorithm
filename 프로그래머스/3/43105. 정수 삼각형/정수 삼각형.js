function solution(triangle) {
    // bottom-up 방식의 DP
    const height = triangle.length;
    
    for(let i = height - 2; i >= 0; i--){
        for(let j = 0; j < triangle[i].length; j++){
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    
    return triangle[0][0];
}
