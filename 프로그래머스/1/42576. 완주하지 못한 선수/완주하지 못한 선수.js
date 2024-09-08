function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        } 
    }
    // 마지막 사람은 비교되지 않으므로 완주하지 못한 사람은 마지막 사람
    return participant[participant.length - 1];
}