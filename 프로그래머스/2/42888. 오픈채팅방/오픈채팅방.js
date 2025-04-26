function solution(record) {
    let answer = [];
    const hashMap = {};

    // userId - nickname 저장
    for(const r of record){
        const [action, uid, nickname] = r.split(" ");
        if(action === 'Enter' || action === 'Change'){
            hashMap[uid] = nickname;
        }
    }
    
    for(const r of record){
        const [action, uid] = r.split(" ");
        
        if(action === 'Enter'){
            answer.push(`${hashMap[uid]}님이 들어왔습니다.`);
        } else if(action === 'Leave'){
            answer.push(`${hashMap[uid]}님이 나갔습니다.`);
        }
    }
    
    return answer;
}