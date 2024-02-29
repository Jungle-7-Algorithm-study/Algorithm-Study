from itertools import product

def solution(users, emoticons):
    emg_len = len(emoticons)
    ans = [0, 0] #ans[0]은 이모티콘 플러스 가입자 수, ans[1]은 이모티콘 판매액
    #1. 조합마다 확인
    for p in product(range(10, 41, 10), repeat=emg_len):
        count, money = 0, 0    #count랑 money는 각 조합마다의 최고 매출과 최고 가입자 수를 나타내기 때문에 여기서 초기화해줘야하고

        for i in range(len(users)):
            total = 0   #total은 user가 설정한 기준 구매액. 이 구매액을 넘기면 이모티콘 플러스를 가입하니까, user마다 다르기때문에 여기서 초기화해야함.
            users_discount = users[i][0] #유저가 설정한 기준 할인율. 이 할인율을 넘기는 이모티콘은 모두 구매
            for j in range(len(p)):
                #p의 조합마다 확인
                if users_discount <= p[j]: #할인율이 더 크다면
                    total += emoticons[j] - emoticons[j] * p[j] * 0.01
            if users[i][1] <= total:    #user의 기준 금액을 total이 넘기면 이모티콘 플러스 사용자 수 추가
                count += 1
            else:
                money += total
        #현재 money가 최고 매출이 아니면 바로 다음 조합 확인
        if count < ans[0]:
            continue
        if count == ans[0] and money < ans[1]:
            continue

        ans = [count, money]

    return ans

print(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900]))