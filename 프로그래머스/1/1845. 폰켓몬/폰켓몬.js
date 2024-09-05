function solution(nums) {
    const newArr = new Set(nums); // 중복 제거
    const k = (nums.length) / 2; // 선택 가능한 폰켓몬 수
    return Math.min(k, newArr.size);
}