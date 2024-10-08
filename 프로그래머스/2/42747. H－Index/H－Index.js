function solution(citations) {
    citations.sort((a, b) => b - a); // 인용 횟수를 내림차순 정렬 [6, 5, 3, 1, 0]
    let h = 0; // H-Index
    
    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= i + 1){
            h = i + 1; 
        } else{
            break;
        }
    }
    return h;
}