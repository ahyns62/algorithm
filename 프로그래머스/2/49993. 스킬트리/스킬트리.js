function solution(skill, skill_trees) {
    let answer = 0;
    const skillMap = new Map();
    
    for(let i = 0; i < skill.length; i++){
        skillMap.set(skill[i], i);
    }

    for(const tree of skill_trees){
        const arr = [];
        let isValid = true;
        
        for(const char of tree){
            if(skillMap.has(char)){
                arr.push(skillMap.get(char));
            }
        }

        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== i){
                isValid = false;
                break;
            }
        }
        
        if(isValid) answer++;
        
    }
    
    return answer;
}