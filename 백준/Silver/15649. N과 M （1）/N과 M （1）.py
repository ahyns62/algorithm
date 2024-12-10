N, M = map(int, input().split())
visited = [False] * (N + 1)  # 방문 여부 확인하는 배열

def backtrack(N, M, seq, visited):
    if len(seq) == M:
        print(" ".join(map(str, seq)))
        return
    
    for i in range(1, N + 1):
        if not visited[i]:  # 중복된 숫자를 방지
            visited[i] = True
            seq.append(i)  # 수열에 숫자 추가
            backtrack(N, M, seq, visited)  # 재귀 호출
            seq.pop()  # 수열에서 숫자 제거 (백트래킹)
            visited[i] = False

backtrack(N, M, [], visited)  # 백트래킹 함수 호출