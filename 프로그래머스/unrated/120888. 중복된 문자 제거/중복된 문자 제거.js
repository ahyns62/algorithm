function solution(my_string) {
    let answer = '';
    my_string.split("");
    for(let i = 0; i < my_string.length; i++){
        if(answer.includes(my_string[i])){
            continue;
        } else {
            answer += my_string[i];
        }
    }
    return answer;
}