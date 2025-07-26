function solution(bridge_length, weight, truck_weights) {
    // 큐 기반 시뮬레이션
    let time = 0;
    let bridge = Array(bridge_length).fill(0); // 다리 상태
    let bridge_weight = 0; // 다리 위 현재 무게
    let waiting = [...truck_weights]; // 대기 트럭
    
    while(bridge.length > 0){
        time++;
        bridge_weight -= bridge.shift();
        
        if(waiting.length > 0){
            if(bridge_weight + waiting[0] <= weight){
                let truck = waiting.shift();
                
                bridge.push(truck);
                bridge_weight += truck;
            } else{
                bridge.push(0);
            }
        }
    }
    
    return time;
}
