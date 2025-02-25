function solution(order) {
    let ans = 0;
    
    for(let i = 0; i < order.length; i++){
        if(order[i].includes("americano" || "anything")){
            ans += 4500;
        } else if(order[i].includes("cafelatte")){
            ans += 5000;
        } else if(order[i].includes("anything")){
            ans += 4500;
        }
    }
    
    return ans;
}