# -*- coding: utf-8 -*-
"""
Created on Sun Apr  8 19:34:14 2018

@author: Ketan
"""

#
# Complete the getMinimumDifference function below.
#
def getMinimumDifference(a, b):
    from collections import Counter
    m = len(a)
    n = len(b)
    output = []
    for i in range(m):
        #if length is not equal; can not be anagrams
        if len(a[i]) != len(b[i]):
            output.append(-1)
        else:
            #length is equal, find the diff
            count = 0
            char_count_map = [0] * 26
            #fill char_count
            for char in a[i]:
                char_count_map[ord(char) - ord('a')] += 1
            
            for char in b[i]:
                if char_count_map[ord(char) - ord('a')] <= 0:
                    count += 1
                else:
                    char_count_map[ord(char) - ord('a')] -= 1
                    #count += 1
            output.append(count)
            
    return output
    




a = ['a','jk','abb','mn','abc']
b = ['bb','kj','bbc','op','def']

a = ['m', 'n']
b = ['o', 'p']

a = ['abb']
b = ['bbc']

print(getMinimumDifference(a,b))