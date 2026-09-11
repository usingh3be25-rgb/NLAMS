@echo off
title National Land Acquisition & Management System (NLAMS)
color 0B
cls
echo ======================================================================
echo   NATIONAL LAND ACQUISITION ^& MANAGEMENT SYSTEM (NLAMS)
echo   Government of India - Unified Digital Interoperability Prototype
echo ======================================================================
echo.
echo Starting NLAMS server and launching web portal...
echo Primary Case Study: Project PARK-001 (Green City Government Park, Delhi)
echo Disputed Parcel:    Parcel P-103 (15 Acres, Section 15 Objection)
echo.

set "PY_CMD=python"
where python >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    if exist "%LOCALAPPDATA%\Programs\Python\Python313\python.exe" (
        set "PY_CMD=%LOCALAPPDATA%\Programs\Python\Python313\python.exe"
    ) else (
        echo [ERROR] Python was not found in PATH or standard installation directories.
        echo Please ensure Python 3.8+ is installed to run this application.
        pause
        exit /b 1
    )
)

cd /d "%~dp0"
"%PY_CMD%" server.py --open

pause
