function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    ingredient.forEach((food, i) => {
        stack.push(food);
        
        if(stack.length >= 4 && food === 1) {
            let burger = stack.slice(stack.length - 4, stack.length).join('');
            
            if(burger === '1231') {
                stack.splice(stack.length - 4, 4);
                answer++;
            }
        }
    });
    
    return answer;
}