def solution(A,B):
    ans = 0
    A = sorted(A)
    B = sorted(B, reverse=True)

    for i in range(len(A)):
        ans += A[i] * B[i]

    return ans

A = [1, 4, 2]
B = [5, 4, 4]
print(solution(A,B))