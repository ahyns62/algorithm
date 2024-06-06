import sys
n = int(input())
list = []

for i in range(n):
  data = int(sys.stdin.readline())
  list.append(data)
  
for i in sorted(list):
  print(i)