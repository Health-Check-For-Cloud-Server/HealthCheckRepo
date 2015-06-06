__author__ = 'itas'
import json
import sys
import os
import stat
import commands
import subprocess
import time

json_file = sys.argv[1]
# result_json for saving json parse result
result_json = {
    "healthcheck_result": [
        {
            "run": "",
            "run_judge": "",
            "message": "",
            "check_message": [
                {
                    "check_code": "grep 'java version' record.txt",
                    "check_judge": "",
                    "message": ""
                }
            ]
        }
    ]
}

filename = str(int(time.time()))
result_file = open("./results/"+filename+".json", "w")

b_file = file(json_file)
b_json = json.load(b_file)

f = open("./shell_files/"+filename+".sh", "w")
f.write("#!/bin/bash\n")
f.write("exec &>./records/"+filename+".txt\n")

if b_json['healthcheck'][0]['test'] == '0':  # test == 0  continue
    result_json['healthcheck_result'][0]['run'] = b_json['healthcheck'][0]['run']
    f.write(str(b_json['healthcheck'][0]['run'])+"\n")
    f.close()
    subprocess.call("chmod +x ./shell_files/"+filename+".sh", shell=True)
    subprocess.call("./shell_files/"+filename+".sh", shell=True)
    isSuc = subprocess.call("echo $?", shell=True)
    judge = open("./records/"+filename+".txt", "r").read()
    s = judge.split('\n')
    if isSuc == 0:  # rc == 0 continue
        result_json['healthcheck_result'][0]['run_judge'] = 'true'
        if b_json['healthcheck'][0]['run_true'] == 'CMD':
            '''designing......'''
        else:
            '''designing......'''
    else:
        result_json['healthcheck_result'][0]['run_judge'] = 'false'
        exit()
    if len(s) > 0:  # message not null continue
        record_file_path = "./records/"+filename+".txt"
        check_code_array = str(b_json['healthcheck'][0]['check_message'][0]['check_code']).split(' ')
        check_code_array[len(check_code_array)-1] = "./records/"+filename+".txt"
        check_code_str = ' '.join(check_code_array)
        result_json['healthcheck_result'][0]['check_message'][0]['check_code'] = check_code_str

        if commands.getoutput(check_code_str) != '':
            result_json['healthcheck_result'][0]['check_message'][0]['check_judge'] = 'true'
            result_json['healthcheck_result'][0]['check_message'][0]['message'] = judge
            json.dump(result_json, result_file)
            print json.dumps(result_json)
        else:
            result_json['healthcheck_result'][0]['check_message'][0]['check_judge'] = 'false'
            result_json['healthcheck_result'][0]['check_message'][0]['message'] = judge
            json.dump(result_json, result_file)
            print json.dumps(result_json)
    else:
        exit()
else:
    exit()
