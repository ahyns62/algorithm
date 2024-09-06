function solution(phone_book) {
    // 배열 정렬하기 (이중 for문 구현 시 효율성 테스트 실패)
    phone_book.sort(); // 	[ '119', '1195524421', '97674223' ]
    for(let i = 0; i < phone_book.length - 1; i++){
        // 다음 번호에서 현재 번호의 접두어가 있는 경우
        if(phone_book[i + 1].indexOf(phone_book[i]) === 0){
            return false;
        }
    }
    return true;
}