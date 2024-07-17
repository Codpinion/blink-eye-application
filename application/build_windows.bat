@echo off
title=Blink Eye for Windows Build Script
echo Installing Inno Setup...
winget install --id=JRSoftware.InnoSetup -e -s winget
echo Installing Dependencies...
python -m pip install wheel
python -m pip install -r REQUIREMENTS.txt
python -m pip install pyinstaller
echo Building the executable...
pyinstaller --name BlinkEye --onefile --windowed --icon="./Assets/blink-eye-logo.ico" --add-data="./Assets/*;./Assets" --add-data="./data/*;./data" --clean blink-eye.py
echo Building the installer...
"%ProgramFiles(x86)%\Inno Setup 6\ISCC.exe" BuildFileForInnoSetup.iss
