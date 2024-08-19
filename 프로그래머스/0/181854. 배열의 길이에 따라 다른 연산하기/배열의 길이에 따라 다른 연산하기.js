function solution(arr, n) {
    let answer = [...arr];
    for(let i = 0; i < arr.length; i += 2){
        if(arr.length % 2 == 0){
            answer[i + 1] += n;
        }
        else if(arr.length % 2 != 0){
            answer[i] += n;
        }
    }
    return answer;
}