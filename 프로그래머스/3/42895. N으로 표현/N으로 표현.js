function solution(N, number) {
    let answer = 0;
    let s = [];
    
    for (let i = 1; i < 9; i++){
        s.push(new Set());
        let e = "";
        for (let j = 0; j<i; j++){
            e += String(N)
        }
        s[i-1].add(parseInt(e));
    }

    for (let i = 0; i < 8; i++){
        for (let j = 0; j < i; j++){
            for (let e1 of s[j]){
                   for (let e2 of s[i-j-1]){
                           s[i].add(e1 + e2);
                           s[i].add(e1 - e2);
                           s[i].add(Math.floor(e1 / e2));
                           s[i].add(e1 * e2);
                }
            }
        }
        for (let k of s[i]){
            if(k === number){
                return i+1;
            }
        }
    }

    return -1;
}