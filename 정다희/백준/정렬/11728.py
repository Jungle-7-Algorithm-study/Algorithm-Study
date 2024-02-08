import sys
input = sys.stdin.readline;
lenA, lenB = map(int, input().split());

arrA = list(map(int, input().split()));
arrB = list(map(int, input().split()))
result = arrA + arrB
result.sort();
print(" ".join(map(str, result)))