function solution(enroll, referral, seller, amount) {
    // enroll: 키, referral: 값
    let parent = {};
    for(let i = 0; i < enroll.length; i++){
        parent[enroll[i]] = referral[i]; // parent["young"] = "edward"
    }
    
    // 누적값 total 객체 생성 및 초기화
    let total = {};
    for(let name of enroll){
        total[name] = 0; // total["john"] = 0
    }
    
    // seller 배열과 amount 배열 이용해 이익 분배
    for(let i = 0; i < seller.length; i++){
        let money = amount[i] * 100;// 판매자가 판매한 총 금액 계산
        let cur = seller[i]; // cur = "young"
        // 판매자부터 차례대로 상위 노드로 이동하며 이익 분배
        while(cur != "-" && money > 0){
            // cur
            total[cur] += Math.ceil(money * 0.9);
            cur = parent[cur]; // cur = parent["young"] = edward
            money = Math.floor(money / 10);
        }
    }
    
    // enroll 배열 모든 노드 해당하는 이익을 배열로 반환
    return enroll.map(name => total[name]);
}