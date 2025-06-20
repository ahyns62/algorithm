function solution(s) {
    let ans = 0;
    let i = 0;
    
    while(i < s.length){
        let x = s[i];
        let cnt_x = 1;
        let cnt_other = 0;
        
        for(let j = i + 1; j < s.length; j++){
            if(s[j] === x) cnt_x++;
            else cnt_other++;
            
            if(cnt_x === cnt_other){
                break;
            }
        }
        
        ans++;
        i += cnt_x + cnt_other;
    }
    
    return ans;
}