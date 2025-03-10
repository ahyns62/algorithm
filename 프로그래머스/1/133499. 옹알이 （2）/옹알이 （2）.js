function solution(babbling) {
    let ans = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < words.length; j++){
            if(babble.includes(words[j].repeat(2))){
                break;
            }
            
            babble = babble.split(words[j]).join(" ");
        }
            
        if(babble.split(" ").join("").length === 0){
            ans++;
        }
    }
    
    return ans;
}