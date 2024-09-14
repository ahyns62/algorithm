function solution(clothes) {
    let ans = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }
 
    for(let key in obj) {
        ans *= (obj[key] + 1);
    }
    
    return ans - 1;
}