@ECHO OFF
CLS
SET PHANTOMJS_EXECUTABLE=%APPDATA%\npm\node_modules\casperjs\node_modules\phantomjs\lib\phantom\phantomjs.exe
%~dp0\node_modules\casperjs\bin\casperjs %*