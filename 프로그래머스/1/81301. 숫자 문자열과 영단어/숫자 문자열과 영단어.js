function solution(s) {
    let answer = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9
    };
    
    while(isNaN(s)){
        for(let i in answer){
            if(s.indexOf(i) > -1){
                s = s.replace(i, answer[i]);
            }
        }
    }
    return Number(s);
}