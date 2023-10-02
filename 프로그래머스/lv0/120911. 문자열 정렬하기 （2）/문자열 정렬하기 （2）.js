function solution(my_string) {
    let answer = '';
    answer += my_string.toLowerCase();
    return answer.split('').sort().join('');
}