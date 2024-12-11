import sys
input = sys.stdin.readline
n = int(input())
graph = [[] for i in range(n)]

# 재귀
def dfs(num):
    for i in graph[num]:
        if visited[i] == 0:
            visited[i] = 1 
            dfs(i)

for i in range(n):
    nums = list(map(int,input().rstrip().split()))
    for j in range(n):
        if nums[j] == 1: 
            graph[i].append(j) 
            
for i in range(n):
    visited = [0 for i in range(n)] 
    dfs(i) 
    print(*visited)