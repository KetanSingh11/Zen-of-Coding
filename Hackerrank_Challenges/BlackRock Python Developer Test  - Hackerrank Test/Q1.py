#4 3
# <tag1 value="hello">
# <tag2 name="ketan">
# </tag2>
# </tag1>

# tag1.tag2~name
# tag1~name
# tag1~value


import xml.etree.ElementTree as ET

first_inp = list(map(int, input().split()))
N = first_inp[0]
Q = first_inp[1]

xml_string = ""
for i in range(N):
	xml_string = xml_string + input().strip()

queries_data = []
for i in range(Q):
	ii = input().strip().split(".")
	queries_data.append(ii)

root = ET.fromstring(xml_string)

#find
for q_list in queries_data:
	flag = False
	attrib_val = None

	xpath = ""
	if len(q_list) > 1:
		xpath = "./"
		xpath = xpath + '/'.join(q_list[1:-1])
		lasttag, attribute = q_list[-1:][0].split("~")
		xpath = xpath + "/" + lasttag
	else:
		xpath = "."
		attribute = q_list[0].split("~")[1]
	
	found_element_dict = root.find(xpath).attrib
	if attribute in found_element_dict.keys():
		flag = True
		attrib_val = found_element_dict[attribute]


	if flag == True:
		print(attrib_val)
		flag = False
	else:
		print('Not Found!')
		flag = False
