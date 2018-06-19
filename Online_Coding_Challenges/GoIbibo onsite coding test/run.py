import os
import sys


filepath = "input.csv"
totallines = None

def reader(filename):
	global totallines

	mydict = {}		# { 'word' : [count, [linenos] ] }

	fp = open(filename, 'r')

	for i, line in enumerate(fp):
		line = line.split(",")
		
		for a in range(len(line)):
			word = line[a].strip()
			if word not in mydict.keys():
				linenos = [i]
				mydict[word] = [1, linenos]
			else:
				mydict[word][0] = mydict[word][0] + 1
				mydict[word][1].append(i)

	fp.close()
	totallines = i
	return mydict



if __name__ == "__main__":
	x = reader(filepath)
	# for k, v in x.items():
	# 	print(k, ":", v)

	print("Unique Strings are:")
	for i in x.keys():
		print(i, end=",")
	print("\n")
	
	lineno = int(input("Enter Line number: "))
	if lineno <= totallines:
		print(open(filepath).readlines()[:lineno][-1])
	else:
		print("Error: File has only {} lines.".format(totallines))

	word = input("Enter a word to find: ")
	if word in x.keys():
		print(x[word][1])
	else:
		print("Error: Word not found")

	word = input("Enter word to find # of occurrances: ")
	if word in x.keys():
		print(x[word][0])
	else:
		print("Error: Word not found")



