function solution(progresses, speeds) {
    // 큐 이용
    // time: 배포 기간
    // ans: 배포 가능한 기능 개수
    let time = [];
    let ans = [];
    
    // 배포 가능 기간 계산하여 time 배열에 저장
    for(let i = 0; i < progresses.length; i++){
        time.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    // 5 10 1 1 20 1
    let curr = time[0]; // 첫 번째 배포 기준일
    let count = 1; // 첫 번째 작업은 무조건 배포되므로 1로 시작
    
    for(let j = 1; j < time.length; j++){
        if(time[j] <= curr){ 
            count++; // 함께 배포
        } else{
            ans.push(count); // 지금까지 배포된 기능 수 저장
            count = 1; // count 초기화
            curr = time[j];
        }
    }
    
    ans.push(count);
    
    return ans;
}