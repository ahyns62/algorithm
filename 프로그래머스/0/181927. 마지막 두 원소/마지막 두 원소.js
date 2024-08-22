function solution(num_list) {
    let answer = [...num_list];
    let a = num_list.pop();
    let b = num_list.pop();
    (a > b) ? answer.push(a - b) : answer.push(a * 2);
    return answer;
}