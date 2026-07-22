@echo off
echo ========================================================
echo   Starting Digital Marketing x Data Analytics Portfolio
echo ========================================================
set PATH=C:\Users\admin\AppData\Roaming\TRAE SOLO\ModularData\ai-agent\vm\tools\node;%PATH%
cd /d "C:\Users\admin\.gemini\antigravity\scratch\digital-growth-portfolio"
echo Opening browser at http://localhost:5173/...
start http://localhost:5173/
node.exe "node_modules\npm\bin\npm-cli.js" run dev -- --host
