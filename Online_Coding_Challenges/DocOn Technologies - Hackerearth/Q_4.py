# Write your code here
T = int(input())


for _t in range(0, T):
    N = int(input())
    A = list(map(int, input().split()))
    X = int(input())
    output_arr = []
    
    count_X = A.count(X)
    if count_X > 0:
        one_list = [1]*count_X
        filtered_A = [x for x in A if x != X]
        one_list.extend(filtered_A)
        print(*one_list)