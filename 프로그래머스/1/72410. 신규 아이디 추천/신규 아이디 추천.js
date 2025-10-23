function solution(new_id) {
    let ans = new_id.toLowerCase() // 1단계
        .replace(/[^\w\-\.]/g, '') //2단계
    .replace(/\.{2,}/g,'.'); // 3단계
    
    // 4단계
    if(ans[0] === '.') ans = ans.slice(1);
    if(ans[ans.length - 1] === '.') ans = ans.slice(0, -1);
    
    // 5단계
    if(ans.length === 0) ans = 'a';
    
    // 6단계
    if(ans.length >= 16){
        ans = ans.slice(0, 15);
        if(ans[ans.length - 1] === '.') ans = ans.slice(0, -1);
    }
    
    // 7단계
    if(ans.length <= 2){
        ans = ans.padEnd(3, ans[ans.length - 1]);
    }
    
    
    return ans;
}