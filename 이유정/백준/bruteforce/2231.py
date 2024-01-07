n = int(input())
result = 0

for i in range(1, n+1):
    nums = list(map(int, str(i)))
    result = i + sum(nums)
    if result == n:
        print(i)
        break
    elif i == n:
        print(0)