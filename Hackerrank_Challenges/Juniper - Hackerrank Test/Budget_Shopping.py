# -*- coding: utf-8 -*-
"""
Created on Sun Apr  8 23:01:13 2018

@author: Ketan
"""

def budgetShopping(n, qtys, costs):
    output = []
    for i in range(len(costs)):
        bundles = n // costs[i]
        output.append(bundles * qtys[i])
    
    return output

n = 50
qtys = [20,12,15]
costs = [14,10,15]

print(max(budgetShopping(n, qtys, costs)))
        