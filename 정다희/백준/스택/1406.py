import sys
input = sys.stdin.readline

words = list(map(str, input().split()));
count = input();
countCopy = count +1;
for i in range(count):
    digit = input();
    if(digit == 'L'):
        if(countCopy > 0):
            countCopy = countCopy -1;
    elif(digit == 'B'):
        if(countCopy +1 <= count):
            countCopy = countCopy +1;
    elif()
