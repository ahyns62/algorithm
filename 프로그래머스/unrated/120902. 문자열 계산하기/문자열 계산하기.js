function solution(my_string) {
    let arr = my_string.split(" ");
    let ans = Number(arr[0]);
    
    for(let i = 1; i < arr.length; i += 2){
        arr[i] === '+' ? ans += Number(arr[i + 1]) : ans -= Number(arr[i + 1]);
    }
    return ans;
}