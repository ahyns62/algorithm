function solution(numbers, hand) {
    let answer = '';
    // 좌표 형태로 저장
    let keypad = {
        1: [1, 1], 2: [1, 2], 3: [1, 3],
        4: [2, 1], 5: [2, 2], 6: [2, 3],
        7: [3, 1], 8: [3, 2], 9: [3, 3],
        '*': [4, 1], 0: [4, 2], '#': [4, 3],
    };
    // 초기 위치
    let leftHand = [4, 1];
    let rightHand = [4, 3];
    
    numbers.forEach((num) => {
        let numLocation = keypad[num];
        
        if(numLocation[1] === 1){
            leftHand = numLocation;
            answer += 'L';
        } else if(numLocation[1] === 3){
            rightHand = numLocation;
            answer += 'R';
        } else {
            let leftDistance = getDistance(leftHand, numLocation);
            let rightDistance = getDistance(rightHand, numLocation);
            
            if(leftDistance === rightDistance) {
                if(hand === "left") {
                    leftHand = numLocation;
                    answer += 'L';
                } else {
                    rightHand = numLocation;
                    answer += 'R';
                }
            } else if (leftDistance < rightDistance ){
                leftHand = numLocation;
                answer += 'L';
            } else {
                rightHand = numLocation;
                answer += 'R';
            }
        }
    });
    
    return answer;
}


function getDistance(arr1, arr2) {
    let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]); 
    return result; 
}