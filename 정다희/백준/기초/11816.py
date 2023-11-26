# 	31120	48
user_input = input();
sum = 0;

if(list(user_input)[0] == '0' and list(user_input)[1] =='x' ):

    print(int(user_input, 16))
elif(list(user_input)[0] == '0'):

    print(int(user_input, 8));
else:
    print(user_input)