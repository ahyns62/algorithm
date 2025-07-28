function solution(today, terms, privacies) {
    let answer = [];
    const termMap = new Map();
    
    // 해시맵 변환
    for(const term of terms){
        const [type, period] = term.split(" ");
        
        termMap.set(type, parseInt(period));
    }
    
    // 일 수 변환 함수
    const dateToDays = (dateStr) => {
        const [y, m, d] = dateStr.split(".").map(Number);
        
        return y * 12 * 28 + m * 28 + d;
    }
    
    const todayDays = dateToDays(today);
    
    
    for(let i = 0; i < privacies.length; i++){
        const [dateStr, type] = privacies[i].split(' ');
        
        const dateDays = dateToDays(dateStr);
        const expireDays = termMap.get(type) * 28;
        
        if(dateDays + expireDays <= todayDays){
            answer.push(i + 1);
        }
    }
    
    return answer;
}