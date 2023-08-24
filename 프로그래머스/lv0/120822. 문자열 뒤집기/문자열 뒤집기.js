function solution(my_string) {
    let ans = "";
    for(let i = my_string.length - 1; i >= 0; i--){
        ans += my_string[i];
    }
    return ans;
}