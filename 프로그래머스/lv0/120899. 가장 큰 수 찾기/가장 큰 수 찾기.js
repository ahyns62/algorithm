function solution(array) {
    let num = 0;
    let idx = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > num){
            num = array[i];
            idx = i;
        }
    }
    return [num, idx];
    
}