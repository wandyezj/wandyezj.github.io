setlocal enabledelayedexpansion
@echo off

set name=wandyezj

set THISDIR=%~dp0
set THISDIR=%THISDIR:~,-1%

set imagemagick="%tools%\Programs\ImageMagick\magick.exe"

set generated=%THISDIR%\generated

if exist "%generated%" (
    rmdir /S /Q "%generated%"
)
mkdir "%generated%"

set original=%THISDIR%/../wandyezj.png

set images=
set sizes=16 32 48 64 128 256 512 1024

rem create pngs
for %%s in (%sizes%) do (
    set size=%%s
    set image="%generated%/%name%-!size!.png"
    set images=!images! !image!
    set command=%imagemagick%  "%original%" -resize !size!x!size! "!image!"
    echo !command!
    call !command!
)

rem create ico
set command=%imagemagick% convert !images! "%generated%/%name%.ico"
echo !command!
call !command!
