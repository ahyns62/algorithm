function solution(polynomial) {
    let terms = polynomial.split(" + "); // 항목 분리
    let xSum = 0; // x항 계수
    let constantSum = 0; // 상수항 계수
    let ans = []; // 결괏값
    
    for(let term of terms){
        if(term.includes("x")){
            let coefficient = term.replace("x", "") || "1";
            xSum += parseInt(coefficient);
        } else {
            constantSum += parseInt(term);
        }
    }
    
    if(xSum !== 0) ans.push(xSum === 1 ? "x" : `${xSum}x`);
    if(constantSum !== 0) ans.push(`${constantSum}`);
    
    return ans.join(" + ");
}