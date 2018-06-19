JP MORGAN CHASE Programming Challenge
==========================================


Programming Challenge Description:

Given a list of numbers and a positive integer k, reverse the elements of the list, k items at a time. If the number of elements is not a multiple of k, then the remaining items in the end should be left as is.
Input:

Your program should read lines from standard input. Each line contains a list of numbers and the number k, separated by a semicolon. The list of numbers are comma delimited.
Output:

Print out the new comma separated list of numbers obtained after reversing.


Test 1
Test Input
1,2,3,4,5;2

Expected Output
2,1,4,3,5

Test 2
Test Input
1,2,3,4,5;3

Expected Output
3,2,1,4,5


===========================

import sys
for line in sys.stdin:
    #print(line, end="")
    arr, k = line.split(";")
    arr = list(map(int, arr.split(",")))
    k = int(k)
    
    times = len(arr)//k
    
    i = 0
    while i < times:
        start = i * k
        sub = arr[start: start+k]
        sub.reverse()
        arr[start: start+k] = sub
        
        i += 1
        
    print(",".join(str(x) for x in arr))



================


Programming Challenge Description:

A subsequence of a given sequence S consists of S with zero or more elements deleted. Formally, a sequence Z = z1z2..zk is a subsequence of X = x1x2...xm, if there exists a strictly increasing sequence of indices (i) of X such that for all j=1,2,...k we have Xi = Zj. E.g. Z=bcdb is a subsequence of X=abcbdab with corresponding index sequence <2,3,5,7>
Input:

Your program should read lines from standard input. Each line contains two comma separated strings. The first is the sequence X and the second is the subsequence Z.
Output:

Print out the number of distinct occurrences of Z in X as a subsequence.

Test 1
Test Input
Download Test Input

Expected Output
5

Test 2
Test Input
Expected Output
3


++++++++++++++

import sys
import itertools

for line in sys.stdin:
    #print(line, end="")
    data, subs = line.split(",")
    subs = subs.strip()
    #print("'{}'".format(subs))
    
    c = 0
    for subsequence in itertools.combinations(data, len(subs)):
        st = "".join(subsequence).strip()
        if st == subs:
            c = c + 1
    print(c)




