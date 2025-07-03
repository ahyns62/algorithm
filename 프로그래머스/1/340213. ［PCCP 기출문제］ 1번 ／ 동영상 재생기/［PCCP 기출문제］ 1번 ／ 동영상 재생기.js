// 초 변환 함수
function timeToSeconds(time){
    const [mm, ss] = time.split(":").map(Number);
    
    return mm * 60 + ss;
}

// 시간 변환 함수
function secondsToTime(seconds){
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    
    return `${mm}:${ss}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
    const videoLenSec = timeToSeconds(video_len);
    const opStartSec = timeToSeconds(op_start);
    const opEndSec = timeToSeconds(op_end);
    let currentSec = timeToSeconds(pos);
    
    if(currentSec >= opStartSec && currentSec <= opEndSec){
        currentSec = opEndSec;
    }
    
    for(const cmd of commands){
        if(cmd === "next"){
            currentSec += 10;
            if(currentSec > videoLenSec) currentSec = videoLenSec;
        } else if(cmd === "prev"){
            currentSec -= 10;
            if(currentSec < 0) currentSec = 0;
        }
        
        if(currentSec >= opStartSec && currentSec <= opEndSec){
            currentSec = opEndSec;
        }
    }
    
    return secondsToTime(currentSec);
}