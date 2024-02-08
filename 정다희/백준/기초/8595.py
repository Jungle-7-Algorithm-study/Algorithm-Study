import sys
input = sys.stdin.readline

input_length = int(input());
words = input()
middle_num = [];
#	40192	1020
sum = 0;
for char in words:
   
    if( char.isdigit() ):
        
        middle_num.append(char);
    else:
        print(middle_num);
        if(len(middle_num)==0): continue;
        else:
            middle_num = ''.join(middle_num)
            sum+= int(middle_num)
            middle_num = [];
            
print(sum)
        