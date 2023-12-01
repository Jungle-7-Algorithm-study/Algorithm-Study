import sys
input = sys.stdin.readline
# a b c d
words =list(input()[:-1])
print(words)
count = int(input()); # 4
digit = len(words); # 4
for i in range(count):
    print(words)
    print(digit);
    inputs = input().split();
    if(inputs[0] == 'L'):
        if(digit > 0):
            digit = digit -1; # 3
    elif(inputs[0] == 'B'): 
        # 4 4
        if(digit -1 < 0):
            continue;
        del words[digit -1];
        digit = digit -1;  
    elif(inputs[0] == "D"):
        if(len(words) >= digit+1):
            digit = digit + 1
    elif(inputs[0] == "P"):
        words.insert(digit, inputs[1]);
        digit = digit+1
print("".join(words));
