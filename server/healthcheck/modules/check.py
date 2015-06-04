__author__ = 'itas'
import json
import sys
import os
import stat
import commands
import subprocess


#r_json for saving json parse result
r_json={"healthcheck_result":[
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

r_file=open("json_result.json","w")

b_json=file("json_file.json")
b_file = json.load(b_json)
f = open("healthcheck.sh","w")
f.write("#!/bin/bash\n")
f.write("exec &>record.txt\n")
if b_file['healthcheck'][0]['test'] == '0':#test == 0  continue
    r_json['healthcheck_result'][0]['run'] = b_file['healthcheck'][0]['run']
    f.write(str(b_file['healthcheck'][0]['run'])+"\n")
    f.close()
    subprocess.call("chmod +x /home/itas/healthcheck.sh", shell=True)
    subprocess.call("/home/itas/healthcheck.sh", shell=True)
    isSuc=subprocess.call("echo $?",shell=True)
    judge =open("record.txt","r").read()
    s =judge.split('\n')
    if isSuc == 0:#rc == 0 continue
        r_json['healthcheck_result'][0]['run_judge'] = 'true'
        if b_file['healthcheck'][0]['run_true'] == 'CMD':
            '''designing......'''
        else:
            '''designing......'''
    else:
        r_json['healthcheck_result'][0]['run_judge'] = 'false'
        exit()
    if len(s) >0:#message not null continue
        record_file_path="/home/itas/record.txt"
        check_code_array=str(b_file['healthcheck'][0]['check_message'][0]['check_code']).split(' ')
        check_code_array[len(check_code_array)-1]="/home/itas/record.txt"
        check_code_str=' '.join(check_code_array)
        r_json['healthcheck_result'][0]['check_message'][0]['check_code'] = check_code_str


        if commands.getoutput(check_code_str) !='':
            r_json['healthcheck_result'][0]['check_message'][0]['check_judge'] = 'true'
            r_json['healthcheck_result'][0]['check_message'][0]['message'] = judge
            json.dump(r_json,r_file)
        else:
            r_json['healthcheck_result'][0]['check_message'][0]['check_judge'] = 'false'
            r_json['healthcheck_result'][0]['check_message'][0]['message'] = judge
            json.dump(r_json,r_file)
    else:
        exit()
else:
    exit()