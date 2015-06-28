import json
import sys
import commands
import time
import collections
import re


def get_json_from_file(file_path):
    json_file = file(file_path)
    json_list = json.load(json_file)
    json_file.close()
    return json_list

# run run_code in shell, and return true/false of run result
# the status and message is written into run_result (a list)
def shell_run(run_code, run_result):
    result = commands.getstatusoutput(run_code)
    for x in result:
        run_result.append(x)

    if run_result[0] == 0:
        return True
    else:
        return False

# return message
def get_message(order):
    message_array = str(order).split(' ')
    if message_array[0] != "MSG":
        return ""
    else:
        return order[4:]


# check message, return true/false
def check_message(message, order):
    order_array = str(order).split(' ')
    judge_symbol = order_array[0]
    judge_content = order[3:]
    if judge_symbol == "==" or judge_symbol == "!=":
        result_bool = (message == judge_content)        # shell result(message) express return line as ''
        # print result_bool
        if judge_symbol == "==":
            return result_bool
        else:
            return not result_bool
    elif judge_symbol == "=~" or judge_symbol == "!~":
        match_obj = re.search(judge_content, message)
        if match_obj:
            return True
        else:
            return False
    else:
        return "null"




# PROGRAM START

# define file name
# including [shell file(.sh), execution result file(.txt), result_json file(.json)]
# depends on timestamp
file_name = str(int(time.time()))

# create files
file_shell = open("./shell_files/"+file_name+".sh", "w+")
file_result_json = open("./results/"+file_name+".json", "w")


# edit shell file
file_shell.write("#!/bin/bash\n")
file_shell.write("exec &>./records/"+file_name+".txt\n")

# get json from file
json_file_path = sys.argv[1]
json_to_dispose = get_json_from_file(json_file_path)
case = json_to_dispose['healthcheck']

# define total execute result
# data form:
# {"healthcheck_result":
# [
# {"test_code": "", "test_judge": "(true/false)", "test_message": "",
# "run_code": "", "run_judge": "(true/false)", "run_message": ""
#  "check_result": [{"check_code": "", "check_judge": "(true/false)", "check_message": ""}]}
# ]
# }
total_result = collections.OrderedDict()
healthcheck_result = []
total_result['healthcheck_result'] = healthcheck_result

# ergodic case and set healthcheck_result
for check_unit in case:
    # define check_unit execute result (as a ordered dictionary)
    # data form:
    # {"test_code": "", "test_judge": "(true/false)", "test_message": "",
    # "run_code": "", "run_judge": "(true/false)", "run_message": ""
    #  "check_result": [{"check_code": "", "check_judge": "(true/false)", "check_message": ""}]}
    result_check_unit = collections.OrderedDict()
    code_test = check_unit['test']

    # run test_code in shell
    result_test = []
    result_test_bool = shell_run(code_test, result_test)
    # write result to execute result
    result_check_unit['test_code'] = code_test
    result_check_unit['test_judge'] = result_test_bool
    result_check_unit['test_message'] = result_test[1]

    # if run "test code" in shell return True, then continue
    if result_test_bool:
        code_run = check_unit['run']
        code_run_true = check_unit['run_true']
        code_run_false = check_unit['run_false']

        # write code_run to shell file and run, save the result to another file
        # (to imitate the patter of the tool will be used in the future)
        file_shell.write(code_run)
        result_run = []
        result_run_bool = shell_run(code_run, result_run)
        result_run_output = result_run[1]
        # write result to execute result
        result_check_unit['run_code'] = code_run
        result_check_unit['run_judge'] = result_run_bool
        # set message depends on user input
        if result_run_bool:
            result_check_unit['run_message'] = get_message(code_run_true)
        else:
            result_check_unit['run_message'] = get_message(code_run_false)

        # ergodic checks and set check_result (check result_run_output)
        check_result = []
        result_check_unit['check_result'] = check_result
        checks = check_unit['check_message']
        for check in checks:
            # define check execute result (as a ordered dictionary)
            # data form:
            # {"check_code": "", "check_judge": "(true/false)", "check_message": ""}
            result_check = collections.OrderedDict()
            code_check = check['check_code']
            code_check_true = check['check_true']
            code_check_false = check['check_false']

            result_check['check_code'] = code_check

            result_check_bool = check_message(result_run_output, code_check)
            result_check['check_judge'] = result_check_bool
            if result_check_bool:
                result_check['check_message'] = get_message(code_check_true)
            else:
                result_check['check_message'] = get_message(code_check_false)

            check_result.append(result_check)

    # put check_unit result into total result
    healthcheck_result.append(result_check_unit)

# return total_result as a string
print(json.dumps(total_result))

# close file
file_shell.close()
file_result_json.close()













