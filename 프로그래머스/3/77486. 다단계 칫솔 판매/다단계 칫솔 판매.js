function solution(enroll, referral, seller, amount) {
    // parent 객체
    let parent = {};
    for(let i = 0; i < enroll.length; i++){
        parent[enroll[i]] = referral[i]; 
    };
    
    // result 객체
    let result = {};
    for(let name of enroll){
        result[name] = 0;
    };
    
    // 이익 분배 계산
    seller.forEach((cur, i) => {
      let money = amount[i] * 100;// 총 금액
      let curSeller = cur; // 현재 사람 이름
      // 판매자부터 차례대로 상위 노드로 이동하며 이익 분배
      while(cur != "-" && money > 0){
        const profit = Math.floor(money * 0.1); // 회사로 가는 돈
        result[curSeller] += (money - profit); // 현재 노드에게 가는 돈
        money = profit;
        curSeller = parent[curSeller];
      }  
    });
    
    return enroll.map(name => result[name]);
}