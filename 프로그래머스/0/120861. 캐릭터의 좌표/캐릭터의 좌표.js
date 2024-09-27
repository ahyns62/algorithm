function solution(keyinput, board) {
    let [a, b] = [0, 0];
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
   for(let k of keyinput){
        if(k === "left"){
            a--;
        } else if(k === "right"){
            a++;
        } else if(k === "up"){
            b++;
        } else if(k === "down"){
            b--;
        }
       // 보드 크기 벗어나지 않도록 좌표 제한
       a = Math.max(-maxX, Math.min(maxX, a));
       b = Math.max(-maxY, Math.min(maxY, b));
    }
    return [a, b];
}