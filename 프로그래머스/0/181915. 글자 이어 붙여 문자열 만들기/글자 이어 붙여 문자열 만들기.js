function solution(my_string, index_list) {
    let answer = '';
    for(let i = 0; i < index_list.length; i++){
        let str = index_list[i];
        answer += String(my_string[str]);
    }
    return answer;
}