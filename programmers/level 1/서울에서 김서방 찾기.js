function solution(seoul) {
    var answer = '';
    let idx = 0;
    
    for(let i = 0; i <= seoul.length - 1; i++){
        if(seoul[i] === "Kim"){
            idx = i;
        }
    }
    answer = "김서방은 " + idx + "에 있다";
    return answer;
}
