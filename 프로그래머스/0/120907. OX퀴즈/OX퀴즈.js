function solution(quiz) {
    let ans = [];
    for(let i = 0; i < quiz.length; i++) {
        let str = quiz[i].split(" ");
        if(str[1] === "+") {
            if(Number(str[0]) + Number(str[2]) === Number(str[4])) {
                ans.push("O");
            } else {
                ans.push("X");
            }
        } else if(str[1] === "-") {
            if(Number(str[0]) - Number(str[2]) === Number(str[4])) {
                ans.push("O");
            } else {
                ans.push("X");
            }
        }
    }
    return ans;
}
