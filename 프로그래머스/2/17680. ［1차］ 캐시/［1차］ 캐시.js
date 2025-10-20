function solution(cacheSize, cities) {
    const hitTime = 1;
    const missTime = 5;
    const cache = [];
    let answer = 0;
    
    if(cacheSize === 0) return missTime * cities.length;
    
    cities.forEach((city) => {
        const newCity = city.toUpperCase();
        const idx = cache.indexOf(newCity);
        
        if(idx === -1){
            if(cache.length >= cacheSize){
                cache.shift();
            }
            answer += missTime;
        } else{
            cache.splice(idx, 1);
            answer += hitTime;
        }

        cache.push(newCity);
    });
    
    return answer;
}