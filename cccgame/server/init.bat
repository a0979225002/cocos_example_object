@echo off
cd node &&^
npm i typescript -g &&^
npm i gulp -g &&^
npm i &&^
cd lcc-framework-server &&^
echo build lcc-framework-server &&^
gulp buildFramework &&^
cd ../scripts &&^
echo build scripts &&^
tsc &&^
cd ../.. &&^
pause