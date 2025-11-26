function solution(str1, str2) {
    let arr1 = [];
    let arr2 = [];

    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    for(let i = 0; i < str1.length; i++){
        let pair = str1.slice(i, i + 2);

        if(/^[A-Z]{2}$/.test(pair)){
            arr1.push(pair);
        }
    }
    
    for(let j = 0; j < str2.length; j++){
        let pair = str2.slice(j, j + 2);

        if(/^[A-Z]{2}$/.test(pair)){
            arr2.push(pair);
        }
    }
    
    if(arr1.length === 0 && arr2.length === 0){
        return 65536;
    }
    
    // 교집합
    let intersection = [];
    let arr2Copy = [...arr2];
    
    for(let word of arr1){
        let index = arr2Copy.indexOf(word);
        if(index !== -1){
            intersection.push(word);
            arr2Copy.splice(index, 1);
        }
    }
    
    // 합집합
    let union = [...arr1];
    arr2Copy = [...arr2];
    
    for(let word of arr1){
        let index = arr2Copy.indexOf(word);
        if(index !== -1){
            arr2Copy.splice(index, 1);
        }
    }
    union.push(...arr2Copy);
    
    let jaccard = intersection.length / union.length;
    
    return Math.floor(jaccard * 65536);
}