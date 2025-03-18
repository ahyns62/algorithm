function solution(survey, choices) {
    let ans = "";
    // 각 성격 유형 별 점수를 저장할 수 있는 객체 생성
    let scores = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };
    // 선택지에 따른 점수 배열
    const points = [-3, -2, -1, 0, 1, 2, 3];
    
    
    // 각 질문에 대해 survey 배열 순회하며 점수 계산
    survey.forEach((s, i) => {
        let choice = choices[i];
        let point = points[choice - 1];
        
        // 음수: 비동의 관련 성격 유형 점수 증가, 양수: 동의 관련 성격 유형 점수 증가
        if(point < 0){
            scores[s[0]] -= point;
        } else if(point > 0){
            scores[s[1]] += point;
        }

    });

    // 지표별 더 높은 점수의 성격 유형 결정
    ans += (scores['R'] >= scores['T']) ? 'R' : 'T';
    ans += (scores['C'] >= scores['F']) ? 'C' : 'F';
    ans += (scores['J'] >= scores['M']) ? 'J' : 'M';
    ans += (scores['A'] >= scores['N']) ? 'A' : 'N';
    
    
    return ans;
}