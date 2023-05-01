function solution(s){
    var answer = true;
    let p_ans = 0;
    let y_ans = 0;
    
    for(let spell of s){
        spell = spell.toLowerCase();
        if (spell == 'p') p_ans += 1;
        if (spell == 'y') y_ans += 1;
    }
    return (p_ans === y_ans) ? true : false;
}
