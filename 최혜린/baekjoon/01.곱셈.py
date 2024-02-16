a = int(input())
b = input()
ans = 0
for i in range(3):
    print(a*int(b[-i-1]))
    ans += a*int(b[-i-1])*10**i
print(ans)