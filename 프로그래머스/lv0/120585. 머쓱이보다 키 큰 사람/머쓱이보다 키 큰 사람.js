function solution(array, height) {
    let answer = 0;
    answer = array.filter((el) => el > height)
    return answer.length;
}