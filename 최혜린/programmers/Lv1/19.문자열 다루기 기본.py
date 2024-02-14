def solution(s):
    if len(s)==4 or len(s)==6:
        if s.isnumeric():
            return True

    return False


# 가독성 good
def solution(s):
    return s.isnumeric() and len(s) in [4,6]