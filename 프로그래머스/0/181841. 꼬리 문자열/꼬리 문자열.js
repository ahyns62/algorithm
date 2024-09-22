function solution(str_list, ex) {
    let ans = "";
    for(let k of str_list){
        if(!k.includes(ex))
        ans += String(k);
    }
    return ans;
}