// 최소 신장 트리

// Find 연산 = i가 속한 집합의 루트 노드 찾기
function find(parent, i){
    if(parent[i] == i){
        return i;
    }
    
    parent[i] = find(parent, parent[i]);
    
    return parent[i];
}

// Union 연산 = rank 기준으로 두 집합 합치기
function union(parent, rank, a, b){
    const aroot = find(parent, a);
    const broot = find(parent, b);
    
    // 작은 rank의 트리를 큰 rank의 트리 아래에 연결
    if(rank[aroot] < rank[broot]){
        parent[aroot] = broot;
    } else if(rank[aroot] > rank[broot]){
        parent[broot] = aroot;
    } else {
        parent[broot] = aroot;
        rank[aroot] += 1;
    }
}

function solution(n, costs) {
    // 최소 비용 -> 비용 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    let parent = Array.from({length: n}, (_, i) => i);
    let rank = Array(n).fill(0);
    let minCost = 0; 
    let edges = 0;

    // 현재 간선의 두 노드가 속한 집합의 루트 찾기
    for(const edge of costs){
        if(edges === n - 1){
            break;
        }
        
        const x = find(parent, edge[0]);
        const y = find(parent, edge[1]);
        
        // 두 노드가 서로 다른 집합에 속하는 경우, 합치기
        if(x !== y){
            union(parent, rank, x, y);
            minCost += edge[2];
            edges += 1;
        }
    }
    
    return minCost;
}