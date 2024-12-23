"""
boj.kr/2869

f: (a-b)x >= (v-a)를 만족하는 최소 x를 구하는 문제
"""
from math import ceil

def main(a, b, v):
    x = ceil((v-a) / (a-b))
    return x + 1

if __name__ == "__main__":
    a, b, v = map(int, input().split())
    print(main(a, b, v))
    

