# 	87324	272
import sys
input = sys.stdin.readline

lengthA, lengthB = map(int, input().split());
arrA = set(list(map(int, input().split())));
arrB = set(list(map(int, input().split())));

numA = (arrA - arrB);
numB = (arrB - arrA);

print(len(numA) + len(numB))

# 배운점 : 파이썬 input은 느려서 input = sys.stdin.readline 으로 설정하면 조금이라도 더 빨라진다.
# 한줄에 입력받은것 여러개의 변수에 할당하는법 (띄어쓰기로 구분되어있다는 전제하에) map(int, input().split())
# set 타입은 '-'연산자를 이용해서 중복제거를 할 수 있다.