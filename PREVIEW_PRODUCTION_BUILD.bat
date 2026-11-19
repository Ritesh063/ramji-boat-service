@echo off
title Ramji Boat Services - Production Preview
echo ========================================================
echo   RAMJI BOAT SERVICES - PRODUCTION PREVIEW SERVER
echo ========================================================
echo.
echo Building latest production assets...
call npm run build
echo.
echo Launching preview server...
echo.
call npm run preview
pause
