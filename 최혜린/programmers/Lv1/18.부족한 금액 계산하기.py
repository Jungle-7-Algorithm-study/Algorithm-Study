def solution(price, money, count):
    total = price * sum(range(1, count+1))
    ans = total - money

    return ans if ans > 0 else 0