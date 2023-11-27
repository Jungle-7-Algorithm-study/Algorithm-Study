N = int(input())
text = input()
sum_num = 0
hidden_num = ''

for word in text:
    if word.isdigit():
        hidden_num += word
    #hidden_num이 존재하고 -> 존재하면서, isdigit이 false라는 것은, 이전 순회에서 word가 숫자였고, 현재는 문자열이라는 것
    elif hidden_num:
        sum_num += int(hidden_num)
        hidden_num = ''

#미처 다 더하지 못한 숫자가 있다면 더해줌
if hidden_num:
    sum_num += int(hidden_num)

print(sum_num)