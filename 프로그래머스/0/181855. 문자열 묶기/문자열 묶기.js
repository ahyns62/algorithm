function solution(strArr) {
    let dictMap = {};
    
    strArr.forEach(item => {
        const len = item.length;
        if(!dictMap[len]){
            dictMap[len] = [];
        }
        dictMap[len].push(item);
    });
    
    const values = Object.values(dictMap).map(a => a.length);
    
    
    return Math.max(...values);
}