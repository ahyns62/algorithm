function solution(enroll, referral, seller, amount) {
    // 판매원(자식) - 추천인(부모) 객체(parent)
    let parent = {};
    for(let i = 0; i < enroll.length; i++){
        parent[enroll[i]] = referral[i]; // parent["john"] = "-"
    }
    // 판매원별 이익금 객체(result)
    let result = {};
    for(let i = 0; i < enroll.length; i++){
        result[enroll[i]] = 0;
    }
    
    // 이익 분배 계산
    seller.forEach((cur, i) => {
        // 현재 판매하는 사람
        let curName = cur;
        // 이익금
        let money = amount[i] * 100;
        
        // 상위 노드로 이익 전달 반복
        while(cur != "-" && money > 0){
            // 현재 판매하는 사람 자신한테 주는 돈 (90%)
            result[curName] += money - Math.floor(money * 0.1);
            // 현재 판매하는 사람 -> 상위 노드로 이동
            curName = parent[curName];
            // 상위 노드로 주는 돈 (10%)
            money = Math.floor(money * 0.1);
        }
    })
    return enroll.map(name => result[name]);

}