function solution(numbers) {
    let answer = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(i !== j){
                sum = numbers[i] + numbers[j];
                if(!answer.includes(sum)){ answer.push(sum) };
            }
        }
    }
    return answer.sort((a, b) => a - b);
}