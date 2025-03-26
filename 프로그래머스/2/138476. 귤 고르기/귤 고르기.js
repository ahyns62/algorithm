function solution(k, tangerine) {
    let totalCounts = 0;
    let typeCounts = 0;
    const sizeCount = {};
    
    tangerine.forEach((size) => {
        if(sizeCount[size]){
            sizeCount[size] += 1;
        } else {
            sizeCount[size] = 1;
        }
    });
    
    let arr = Object.values(sizeCount).sort((a, b) => b - a);
    
    for(let cnt of arr){
        if(totalCounts + cnt >= k){
            typeCounts += 1;
            break;
        } 
        totalCounts += cnt;
        typeCounts += 1;
    }

    
    return typeCounts;

}