class Node {
    constructor(data, prev, next){
        this.data = data; // 현재 행 위치
        this.prev = prev; // 이전 노드 인덱스
        this.next = next; // 다음 노드 인덱스
    }
}

function solution(n, k, cmd) {
    let answer = Array.from({length: n}, () => "O");
    const node = Array.from({length: n}, (_, idx) => new Node(idx, idx - 1 < 0 ? null : idx - 1, idx + 1 >= n ? null : idx + 1)); // idx = 노드의 data 값
    const stack = [];
    
    for(c of cmd){
        const splited = c.split(" ");
        let command = splited[0];
        let num = Number(splited[1]);
        
        switch(command){
            case "U": {
                while(num--){
                    k = node[k].prev;
                }
                break;
            }
            
            case "D": {
                while(num--){
                    k = node[k].next;
                }
                break;
            }
            
            // 삭제 후 해당 노드를 스택에 푸시
            case "C": {
                const { prev, next } = node[k];
                stack.push(node[k]);
                
                // 현재 노드가 첫 번째 행이 아닐 경우, 이전 노드 next를 현재 노드의 next로 업데이트
                if(node[prev]) node[prev].next = next;
                // 현재 노드가 마지막 행이 아닐 경우, 다음 노드가 가리키는 prev를 현재 노드의 prev로 업데이트
                if(node[next]) node[next].prev = prev;
                
                
                // 새로 선택될 노드의 인덱스 결정
                k = next ? next : prev;
                break;
            }
                
            // 스택의 가장 최근 노드 꺼내서 원래 위치로 복구
            case "Z": {
                const popStack = stack.pop();
                const {data, prev, next} = popStack;
                
                // 복구할 노드가 첫 번째 노드가 아닐 경우, 이전 노드 next를 복구할 노드의 data로 업데이트
                if(node[prev]) node[prev].next = data;
                // 복구할 노드가 마지막 노드가 아닐 경우, 다음 노드 prev를 복구할 노드의 data로 업데이트
                if(node[next]) node[next].prev = data;
                break;
            }
        }
    }
    
    for(s of stack){
        answer[s.data] = "X";
    }
    
    
    return answer.join("");
}