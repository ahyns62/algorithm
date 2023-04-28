function solution(arr) {
    let answer = 0;
    let sum = 0;
    for(let i = 0; i <= arr.length - 1; i++){
        sum += arr[i];
        answer = sum / arr.length;
    }
    return answer;
}
