n = int(input())
arr = list(map(int, input().split()))
arr.sort()

sum = 0
time = 0

for i in range(n):
  time += arr[i]
  sum += time

print(sum)