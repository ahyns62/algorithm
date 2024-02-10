function solution(my_string) {
    let answer = 0;
    let new_string = my_string.replace(/[A-z]/g, " ").split(' ');
    for(let i = 0; i < new_string.length; i++){
        if(!isNaN(new_string[i])){
            answer += Number(new_string[i]);
        }
    }
    return answer;
}