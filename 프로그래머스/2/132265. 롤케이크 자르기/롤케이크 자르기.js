function solution(topping) {
    let ans = 0;
    
    const rightMap = new Map(); // 전체 -> 동생 몫
    const leftSet = new Set(); // 철수
    
    for(let t of topping){
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }
    
    for(let t of topping){
        leftSet.add(t);
        
        rightMap.set(t, rightMap.get(t) - 1);
        if(rightMap.get(t) === 0){
            rightMap.delete(t);
        }
        
        if(leftSet.size === rightMap.size){
            ans++;
        }
    }
    
    return ans;
}
