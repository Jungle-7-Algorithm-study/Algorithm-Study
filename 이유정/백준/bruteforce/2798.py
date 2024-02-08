import sys

N, M = map(int, sys.stdin.readline().split())
card_list = list(map(int, sys.stdin.readline().split()))
hap = 0
hap_list = []
for i in range(len(card_list)):
    for j in range(i+1, len(card_list)):
        for k in range(j+1, len(card_list)):
            hap = card_list[i] + card_list[j] + card_list[k]
            if hap <= M:
                hap_list.append(hap)

if M in hap_list:
    print(M)
else:
    print(max(hap_list))



