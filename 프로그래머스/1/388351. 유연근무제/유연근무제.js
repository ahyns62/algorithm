function solution(schedules, timelogs, startday) {
    const n = timelogs.length;
    let result = n;
    
    // 설정 시간 + 10분까지 정상 출근
    schedules = schedules.map((schedule) => {
        let hour = Math.floor(schedule / 100);
        let min = (schedule % 100) + 10;
        
        // 시간 바뀔 경우
        if(min >= 60){
            hour++;
            min = min % 60;
        }
        
        return hour * 100 + min;
    });
    
    
    for(let i = 0; i < n; i++){
        let today = startday;
        const currLimit = schedules[i];
        const timelog = timelogs[i]; 
        
        for(let j = 0; j < timelog.length; j++){
            if(timelog[j] > currLimit && today <= 5){
                result--;
                break;
            }
            
            today = (today % 7) + 1;
        }
    }
    
    return result;
}