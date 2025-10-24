function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    for(const move of moves){
        const moveIdx = move - 1;
        
        for(let i = 0; i < board.length; i++){
            if(board[i][moveIdx] !== 0){
                const currNum = board[i][moveIdx];
                
                if(stack.length > 0){
                    if(stack[stack.length - 1] === currNum){
                        stack.pop();
                        answer += 2;
                    } else{
                        stack.push(currNum);
                    }
                } else{
                    stack.push(currNum);
                }
                
                board[i][moveIdx] = 0; 
                break;
            }
        }
    }
    
    return answer;
}