def cal_date(year, month, day):
    total_date = year * 12 * 28 + month * 28 + day
    return total_date

def solution(today, terms, privacies):
    #리턴할 결과
    ans = []
    #terms 를 dictionary로 저장
    term_dict = {}
    for term in terms:
        term_name, period = term.split(' ')
        term_dict[term_name] = int(period)
    today_year, today_month, today_day = map(int,today.split('.'))
    total_today_day = cal_date(today_year, today_month, today_day)
    for i in range(len(privacies)):
        from_date, privacy_term_name = privacies[i].split(' ')
        year, month, day = map(int,from_date.split('.'))
        total_from_date_day = cal_date(year,month,day) #약관 시작일(총 날짜수 합)
        total_end_date_day = total_from_date_day + term_dict[privacy_term_name] * 28 - 1
        #현재 날짜가 더 크다면, 유효기간 종료이므로 배열에 추가
        if total_end_date_day < total_today_day:
            ans.append(i+1)
    return ans

print(solution("2023.01.01", ["A 6"], ["2022.07.01 A", "2022.07.01 A", "2022.07.01 A"]))
