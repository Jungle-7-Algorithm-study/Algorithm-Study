target = int(input())
n, result = 0, 0
 
while target != result:
    n += 1
    temp = sum(map(int, str(n))) 
    result = n + temp
print(n)