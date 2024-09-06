function solution(phone_book) {
    phone_book.sort(); // 이중 루프보다 정렬하는 것이 효율성 좋음
    for(let i = 0; i < phone_book.length - 1; i++){
        if(phone_book[i + 1].indexOf(phone_book[i]) === 0){
            return false;
        }
    }
    return true;
}