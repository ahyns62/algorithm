import sys
def binary_search(target, data):
  start = 0
  end = len(data) - 1

  while start <= end:
    mid = (start + end) // 2
    if data[mid] == target:
      return 1
    elif data[mid] < target:
      start = mid + 1
    else:
      end = mid - 1
  return 0

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()
m = int(sys.stdin.readline())
find = list(map(int, sys.stdin.readline().split()))

for f in find:
  ans = binary_search(f, arr)
  print(ans)