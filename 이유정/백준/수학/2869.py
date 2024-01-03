import sys

A, B, V = map(int, sys.stdin.readline().split())

if V <= A:
    print(1)
else:
    if (V - A) % (A - B) == 0:
        print((V-A) //(A-B))
    else:
        print((V-A) // (A-B+1))
