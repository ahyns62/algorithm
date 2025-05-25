function solution(n)
{
    let ans = 0;

    while(n > 0){
        // 짝수 -> 순간이동
        if(n % 2 === 0){
            n /= 2;
        } 
        // 홀수 -> 점프, 거리 1 감소
        else{
            n -= 1;
            ans++;       
        }
    }

    return ans;
}