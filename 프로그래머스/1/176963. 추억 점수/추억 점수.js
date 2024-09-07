function solution(name, yearning, photo) {
    let ans = {}; // 이름과 그리움 점수 매칭
    let result = [];

    for(let i = 0; i < name.length; i++){
        ans[name[i]] = yearning[i];
    }
    // 각 사진마다 추억 점수 계산
    for(let i = 0; i < photo.length; i++){
        let sum = 0;
        for(let j = 0; j < photo[i].length; j++){
            let person = photo[i][j];
            if(ans[person]){
                sum += ans[person];
            }
        }
        result.push(sum);
    }
    return result;
}