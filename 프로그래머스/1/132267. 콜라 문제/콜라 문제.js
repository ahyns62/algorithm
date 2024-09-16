function solution(a, b, n) {
    let ans = 0; 
    let remain = n;
    while(true){
        if(a > remain){
            break;
        }
        ans += parseInt(remain / a) * b;
        remain = parseInt(remain / a) * b + remain % a;
    }
    
    return ans;
}