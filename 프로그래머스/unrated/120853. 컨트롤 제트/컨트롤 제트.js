function solution(s) {
    let arr = s.split(" ");
    while(arr.includes("Z")){
        const idx = arr.findIndex((e) => e === "Z");
        arr.splice(idx - 1, 2);
    }
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
}