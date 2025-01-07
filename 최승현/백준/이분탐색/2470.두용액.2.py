"""
http://boj.kr/2470

Two Pointer 문제라는 것을 확인하고 재시도
"""

from collections.abc import Iterable

def log(s):
    global LOG
    if LOG:
        print(s)


def main(seq: Iterable[int]) -> tuple[int, int]:
    seq = sorted(seq)
    log(seq)
    # 0과 가장 가까운 인덱스 두개를 먼저 찾는다
    i, j = 0, 1
    tmpi, tmpj = 0, 1
    tmpabs = abs(seq[tmpi] + seq[tmpj])
    for _ in range(len(seq) - 1):
        if abs(seq[tmpi] + seq[tmpj]) < tmpabs:
            tmpabs = abs(seq[tmpi] + seq[tmpj])
            i = tmpi
            j = tmpj
        tmpi += 1
        tmpj += 1
    del tmpabs, tmpi, tmpj

    minimum = abs(seq[i] + seq[j])
    result_i = i
    result_j = j

    # [i,j] 범위 안에서 seq[i] + seq[j]의 값이 음수인지, 양수인지 보면서 i,j를 조절
    while True:
        si, sj = seq[i], seq[j]
        sisj = si + sj

        if abs(sisj) < minimum:
            log(f"sisj,minimum = {sisj},{minimum}")
            minimum = abs(sisj)
            result_i = i
            result_j = j

        log(f"i,j,sisj = {i},{j},{sisj}")
        if i == 0 and j == len(seq) - 1:
            break

        if sisj < 0 and j < len(seq) - 1:
            # 하 씨, 좀 더해도 될 것 같은데?
            j += 1
        elif i == 0 and j < len(seq) - 1:
            j += 1
        elif sisj > 0 and i > 0:
            # 하 씨, 좀 빼도 될 것 같은데?
            i -= 1
        elif j == len(seq) - 1 and i > 0:
            i -= 1
        else:  #  sisj == 0:
            # 하 씨, 0이 바로 나와버리네
            return si, sj

    return seq[result_i], seq[result_j]


if __name__ == "__main__":
    LOG = False
    n = int(input())
    seq = map(int, input().strip().split())

    print(" ".join(map(str, main(seq))))
