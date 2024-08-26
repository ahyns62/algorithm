function solution(binomial) {
    let arr = [];
    let ans = 0;
    arr = binomial.split(" ");
    if(arr[1] == "+"){
        ans = Number(arr[0]) + Number(arr[2]);
    } else if(arr[1] == "-"){
        ans = arr[0] - arr[2];
    } else if(arr[1] == "*"){
        ans = arr[0] * arr[2];
    }
    return ans;
}