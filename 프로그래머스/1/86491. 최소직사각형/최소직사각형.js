function solution(sizes) {
    // 가장 작은 지갑 = 가로 길이 중 max값 * 세로 길이 중 max값
    const width = [];
    const height = [];
    
    for(let i = 0; i < sizes.length; i++){
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        width.push(max);
        height.push(min);
        
    }
    
    return Math.max(...width) * Math.max(...height);
}