function solution(number, limit, power) {
    let totalIron = 0;

    // 약수의 개수를 구하기 위한 반복문
    for (let i = 1; i <= number; i++) {
        let divisorCount = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
                if (j !== i / j) {
                    divisorCount++;
                }
            }
        }

        // 공격력 제한에 따라 무기 공격력을 계산
        if (divisorCount > limit) {
            totalIron += power;
        } else {
            totalIron += divisorCount;
        }
    }

    return totalIron;
}
