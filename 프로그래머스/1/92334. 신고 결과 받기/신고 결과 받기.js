function solution(id_list, report, k) {
    const newRepo = [...new Set(report)]; // 중복 제거
    const stopId = []; // 정지 ID
    const cnt = Array(id_list.length).fill(0); // 신고 횟수
    const mail = Array(id_list.length).fill(0); // 메일 받은 횟수
    
    for(const name of newRepo){
        let first = name.split(" ")[0]; // 유저 ID
        let second = name.split(" ")[1]; // 유저가 신고한 ID
        let idx = id_list.indexOf(second);
        cnt[idx] += 1; 
        
        if(cnt[idx] >= k){
            stopId.push(id_list[idx]);
        }
    }
    
    newRepo.map((k, idx) => {
    let a = k.split(' ')[0] // 유저 ID
    let b = k.split(' ')[1] // 유저가 신고한 ID

    // 신고한 ID에 정지된 ID가 있는지 확인
    if (stopId.indexOf(b) >= 0) {
      let idx = id_list.indexOf(a);
      mail[idx] += 1;
    } 
  });

  return mail;
}