import sys
input = sys.stdin.readline

n = int(input())  # 체스판 크기
count = 0

# 세 개의 배열로 퀸의 위치 추적
cols = [False] * n          # 각 열에 퀸이 있는지 여부
diag1 = [False] * (2 * n)   # 좌측 하향 대각선 (row - col)
diag2 = [False] * (2 * n)   # 우측 하향 대각선 (row + col)

# 퀸을 배치하는 함수 (백트래킹)
def solve_queens(row):
    global count
    
    if row == n:  # 모든 행에 퀸을 배치한 경우
        count += 1
        return
    
    for col in range(n):  # 각 열에 퀸 배치 시도
        if not cols[col] and not diag1[row - col] and not diag2[row + col]:
            # 퀸 배치
            cols[col] = diag1[row - col] = diag2[row + col] = True
            solve_queens(row + 1)  # 다음 행 이동
            # 퀸 배치 해제 (백트래킹)
            cols[col] = diag1[row - col] = diag2[row + col] = False

solve_queens(0)
print(count)
