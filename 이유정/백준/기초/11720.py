N = int(input())
print(sum(map(int, input())))
num_list = input()
hap = 0
for i in range(N):
    hap += int(num_list[i])
print(hap)

