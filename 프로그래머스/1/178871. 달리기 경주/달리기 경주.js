function solution(players, callings) {
    let rankMap = {};
    
    for(let i = 0; i < players.length; i++){
        // 선수 이름(키) : 등수(값)
        rankMap[players[i]] = i; 
    }
    
    for(let name of callings){
        let idx = rankMap[name];
        
        if(idx > 0){
            let prevPlayer = players[idx - 1];
            
            // 순서 변경
            players[idx - 1] = name;
            players[idx] = prevPlayer;
            
            rankMap[name] -= 1;
            rankMap[prevPlayer] += 1;
        }
    }
    
    return players;
}
