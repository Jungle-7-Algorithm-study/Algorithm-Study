"""
http://boj.kr/9012
"""

from sys import stdin

def input() -> str:
    return stdin.readline().strip()

def main(ps: str) -> bool:
    """
    check whether ps is vps (valid parenthesis string)
    """
    top = 0

    for c in ps:
        if top < 0:
            return False
        match c:
            case "(":
                top += 1
            case ")":
                top -= 1

    return top == 0


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        print("YES" if main(input()) else "NO")
