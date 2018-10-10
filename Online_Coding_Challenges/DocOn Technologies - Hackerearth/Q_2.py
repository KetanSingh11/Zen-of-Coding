# Write your code here
T = int(input())

for i in range(0, T):
    N = int(input())
    N_list = list(map(int, input().split()))
    
    _max = 0
    for p in range(0, N):
        if (p+2) < N:
            for q in range(p+2, N):
                _curr = (q-1)* min(N_list[p], N_list[q])
                if _curr > _max:
                    _max = _curr
    print(_max)
    _max = 0