#! /usr/bin/env bash

curl -sSfL https://raw.githubusercontent.com/ddosify/ddosify/master/scripts/install.sh | sh
sleep 5
ddosify -t http://localhost:3000