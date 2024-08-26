function solution(binomial) {
    let ans = 0;
    const [a, ex, b] = binomial.split(" ");
    if(ex == "+"){
        ans = Number(a) + Number(b);
    } else if(ex == "-"){
        ans = Number(a) - Number(b);
    } else if(ex == "*"){
        ans = Number(a) * Number(b);
    }
    return ans;
}