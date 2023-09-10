function solution(my_string) {
    return [...my_string].map(Number).filter(a => !isNaN(a)).sort((a, b) => a - b);
}