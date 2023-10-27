function solution(id_pw, db) {
    let answer = '';
    db.map((a, b) => {if(id_pw[0] === a[0] && id_pw[1] === a[1]) answer = "login"
        else if(id_pw[0] === a[0] && id_pw[1] !== a[1]) answer = "wrong pw"
        else if(id_pw[0] !== a[0] && id_pw[1] !== a[1]) answer = "fail"
    });

    return answer;
}