function solution(cards1, cards2, goal) {
    // goal에 있는 문자열을 하나씩 판별
    // cards1[0] 해당하는 문자라면 cards1에서 제거
    // cards2도 동일
    for(const s of goal){
        if(cards1[0] == s){
            cards1.shift();
        }
        else if(cards2[0] == s){
            cards2.shift();
        }
        else{
            return "No";
        }
    }
    
    return "Yes";
}