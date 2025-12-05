function solution(arr, query) {
    let result = arr;

    for (let i = 0; i < query.length; i++) {
        const num = query[i];

        if (i % 2 === 0) {
            result = result.slice(0, num + 1);
        } else {
            result = result.slice(num);
        }
    }

    return result;
}
