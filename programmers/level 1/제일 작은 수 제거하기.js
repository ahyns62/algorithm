function solution(arr) {
    let answer = [];
    let min_num = 0;
    min_num = Math.min.apply(Math, arr);
    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] !== min_num){
            answer.push(arr[i]);
        } else if(arr.length === 1){
            answer.push(-1);
        }
    }
    return answer;
}
