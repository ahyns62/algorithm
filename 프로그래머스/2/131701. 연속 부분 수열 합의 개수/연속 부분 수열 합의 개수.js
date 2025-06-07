function solution(elements) {
    const ans = new Set();
    const len = elements.length;
    
    const getSum = (arr) => {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    
    for(let i = 1; i <= len; i++){
        for(let j = 0; j < len; j++){
            if(j + i > len){
                ans.add(getSum(elements.slice(j, len)) + getSum(elements.slice(0, j + i - len)));
            } else{
                ans.add(getSum(elements.slice(j, j + i)));
            }
        }
    }
    
    return ans.size;
}