function solution(want, number, discount) {
    let answer = 0;
    let map = new Map();
    
    for(let i = 0; i < want.length; i++){
        map.set(want[i], number[i]);
    }
    
    for(let j = 0; j <= discount.length - 10; j++){
        let arr = discount.slice(j, j + 10);
        
        let cntMap = new Map();
        let isSame = true;
        
        for(let item of arr){
            cntMap.set(item, (cntMap.get(item) || 0) + 1);
        }
        
        for(let [key, value] of map){
            if(cntMap.get(key) !== value){
                isSame = false;
                break;
            }
        }
        
        if(isSame) answer++;
    }
    
    return answer;
}