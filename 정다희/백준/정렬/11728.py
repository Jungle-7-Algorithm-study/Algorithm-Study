import sys
input = sys.stdin.readline;
lenA, lenB = map(int, input().split());

arrA = (list(map(int, input().split())))
arrA.sort()
arrB = (list(map(int, input().split())))
arrB.sort();
result = (set(arrA) | set(arrB));
result = list(result)
result.sort()
# print(list(result));
print(' '. join(map(str, result)))