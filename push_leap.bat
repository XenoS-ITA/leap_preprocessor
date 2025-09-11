@echo off
REM Get last commit message and store it in a variable
FOR /F "usebackq delims=" %%A IN (`git log -1 --pretty^=%%B`) DO SET lastCommitMsg=%%A

REM Change directory
cd /d C:\Peakville\data\resources\[ignored]\leap3

REM Stage changes
git add .

REM Commit using the stored commit message
git commit -m "%lastCommitMsg%"

REM Push to remote
git push