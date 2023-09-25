function solution(hp) {
    let a = Math.floor(hp / 5); // 장군개미
    let b = Math.floor(hp % 5 / 3); // 병정개미
    let c = Math.floor(hp % 5 % 3 / 1); // 일개미    
    return a + b + c;
}