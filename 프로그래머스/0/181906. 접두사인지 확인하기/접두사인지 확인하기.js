function solution(my_string, is_prefix) {
    let answer = [];
    for(let i = 0; i < my_string.length; i++){
        answer.push(my_string.slice(0, i));
    }
    return answer.includes(is_prefix) ? 1 : 0;
}