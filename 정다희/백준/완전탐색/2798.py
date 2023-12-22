import sys
input = sys.stdin.readline

cards, sum = map(int, input().split())
array = list(map(int, input().split()));
numList = [];
for i in range(cards):
    for j in range(i+1, cards):
        for k in range(j+1, cards):
            three = array[i]+ array[j]+ array[k]
            if three > sum:
                continue;
            else:
                numList.append(three);
print(max(numList));