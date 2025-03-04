function solution(s)
{
    const stack = [];
    
    for (const element of s){
        // 스택이 비어 있지 않고, 현재 문자와 스택의 맨 위 문자가 같을 경우
        if(stack.length > 0 && stack[stack.length - 1] === element){
            stack.pop();
        } else{
            stack.push(element);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}