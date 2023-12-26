function solution(s) {
    let answer = '';
    let arr = s.split(' ');
    let str = '';
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(j % 2 === 0){ 
                answer += arr[i][j].toUpperCase();
            }
            else{
                answer += arr[i][j].toLowerCase();       
            }
        }
        answer += " ";
    }
    answer = answer.substr(0, answer.length - 1);
    return answer;
}