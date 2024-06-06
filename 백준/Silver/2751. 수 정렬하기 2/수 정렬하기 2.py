n = int(input())
list = []

for i in range(n):
  data = int(input())
  list.append(data)
  
list.sort()

for i in list:
  print(i)