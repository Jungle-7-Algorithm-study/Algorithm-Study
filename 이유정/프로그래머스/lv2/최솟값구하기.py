def solution(A, B):
    A.sort()
    B.sort(reverse = True)
    ans = 0
    for i in range(len(A)):
        ans += A[i] * B[i]
    return ans
