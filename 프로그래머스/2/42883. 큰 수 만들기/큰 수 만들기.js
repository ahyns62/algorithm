function solution(number, k) {
    const arr = [];
    for (let i = 0; i < number.length; i++) {
        // 배열 마지막 숫자와 현재 숫자를 비교
        // 현재 숫자가 더 크면 해당 숫자를 pop함
        while (number[i] > arr[arr.length - 1] && arr.length > 0 && k > 0) {
            k--;
            arr.pop();
        }
      arr.push(number[i]);
    }
    arr.splice(number.length - k, k);
    return arr.join("");
}