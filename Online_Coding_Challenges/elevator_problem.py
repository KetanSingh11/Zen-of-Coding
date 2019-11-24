## Elevator problem
import sys


def elevator_engine(start_floor, list_of_cmds):
	distance = 0
	distance = distance + abs(start_floor - list_of_cmds[0][0])		#move to the called floor from start_floor
	
	for inst_set in list_of_cmds:
		distance = distance + abs(inst_set[0] - inst_set[1])
		


def file_reader(filename):
	for line in open(filename):
		start_floor, list_of_cmds = line.split(":")
		start_floor = int(start_floor)
		list_of_cmds = list(x.split("-") for x in list_of_cmds.split(","))
		
		for x in range(len(list_of_cmds)):
			list_of_cmds[x] = [int(list_of_cmds[x][0]), int(list_of_cmds[x][1])]

		print("start_floor: {}, list_of_cmds: {}".format(start_floor, list_of_cmds))

	print(type(start_floor))
	print(type(list_of_cmds[0][0]))



if __name__ == "__main__":
	# print("sys:", sys.argv)
	filename = sys.argv[1]
	#mode = sys.argv[2]
	file_reader(filename)

