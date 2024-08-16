function solution(num_list, n) {
    let answer = [];
    answer.push(num_list[0]);
    for(let i = 1; i < num_list.length / n; i++){
        answer.push(num_list[0 + n * i]);
    }
    return answer;
}