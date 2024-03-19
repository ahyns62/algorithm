function solution(array) {
    // 새로운 배열 생성
    let newArray = new Array(Math.max(...array) + 1).fill(0);
    
    // 해당 값에 해당하는 index의 값 += 1
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] += 1
    }
    
    if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
        return -1;
    } 
    return newArray.indexOf(Math.max(...newArray));
}