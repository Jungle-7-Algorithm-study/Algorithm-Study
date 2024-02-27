def solutions(friends, gifts):
    g_record = {}
    for f1 in friends:
        g_record[f1] = [0, {}]
        for f2 in friends:
            if f1 != f2:
                g_record[f1][1][f2] = 0
    for gift in gifts:
        giver, taker = gift.split()
        g_record[giver][0] += 1
        g_record[taker][0] -= 1
        g_record[giver][1][taker] += 1  #giver가 taker에게 선물을 몇개 주었는지 카운트
        g_record[taker][1][giver] -= 1  #giver와 taker사이의 선물지수? 이걸 꼭 -해야하나??
        #선물을 주고 받은 기록이 있는 사이의 경우 더 많은 선물을 준 사람이 다음 달에 선물을 받기 때문에
    ans = [0] * len(friends)

    for a, values in g_record.items():
        #g_record = {f1 : [0, {}], f2: [0, {}] ...} 이렇게 되어있기 때문에
        #a는 f1(key) values는 [0, {}] 에 해당된다.
        idx1 = friends.index(a) #friends에서 a의 index를 찾아 idx1에 저장
        exponent_a = values[0]  #즉 values[0]은 a의 선물지수
        for b, cnt in values[1].items():
            #g_record = {f1: [0, {f2 : 2, f3:2}]} 이런식으로 저장되어있음
            #즉, values[1]은 {f2: 2, f3: 2} 친구에게 준 선물의 갯수를 저장한 표와 같음
            #f2에게 2번 f3에게 2번
            #이걸 순회를 도니까, b는 key(f2, f3 즉 친구이름) cnt 는 친구에게 준 선물의 갯수에 해당됨
            if cnt > 0: #b에게 선물을 준 갯수가 b에게서 받은 갯수보다 크다면
                ans[idx1] += 1  #선물을 b에게서 한개 받는다.
            elif cnt == 0:  #한번도 주고받지 않았다면
                if exponent_a > g_record[b][0]: #a의 선물지수가 b의 선물지수보다 크다면
                    ans[idx1] += 1  #b에게서 선물을 한개 받는다.
    return max(ans)

