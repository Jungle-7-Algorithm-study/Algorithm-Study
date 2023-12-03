X = input()

if X[0] == '0':
    if X[1] == 'x':
        # 16진수일 경우
        print(int(X, 16))
    else:
        # 8진수일 경우
        print(int(X, 8))
else:
    print(int(X))