n_of_data = int(input())
arr = [list(map(int, input().split())) for _ in range(n_of_data)]
rgb = [[0] * 3 for _ in range(n_of_data)]
rgb[0] = arr[0]

for i in range(1, n_of_data):
    rgb[i][0] = arr[i][0] + min(rgb[i-1][1], rgb[i-1][2])  # 빨강
    rgb[i][1] = arr[i][1] + min(rgb[i-1][0], rgb[i-1][2])  # 초록
    rgb[i][2] = arr[i][2] + min(rgb[i-1][0], rgb[i-1][1])  # 파랑

print(min(rgb[n_of_data - 1]))