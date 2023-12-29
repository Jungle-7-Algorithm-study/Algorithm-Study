"""
https://boj.kr/27736

찬반투표
"""

import sys

n = int(input())
votes = input().split()

pros = 0
cons = 0
giveups = 0

for v in votes:
    match v:
        case "1":
            pros += 1
        case "-1":
            cons += 1
        case "0":
            giveups += 1
            if giveups >= n / 2:
                print("INVALID")
                sys.exit()

if pros > cons:
    print("APPROVED")
    sys.exit()

print("REJECTED")
