def solution(answer):
    student1 = [1, 2, 3, 4, 5]
    student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    a = 0
    cnt = [0, 0, 0]
    for i in answer:
        if i == student1[a%5]:
            cnt[0] += 1
        if i == student2[a%8]:
            cnt[1] += 1
        if i == student3[a%10]:
            cnt[2] += 1
        a += 1
    return_ans = []
    cnt_max = max(cnt)
    for i in range(len(cnt)):
        if cnt[i] == cnt_max:
            idx = i + 1
            return_ans.append(idx)
    return return_ans
print(solution([1,3,2,4,2]))