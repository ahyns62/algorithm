function solution(my_string, is_suffix) {
    let arr = [];
    for(let i = 0; i < my_string.length; i++){
        arr.push(my_string.slice(i, my_string.length));
    }
    return arr.includes(is_suffix) ? 1 : 0;
}