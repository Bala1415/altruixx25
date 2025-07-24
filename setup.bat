@echo off
echo Installing dependencies for College Symposium Website...
echo.

echo Installing root dependencies...
call npm install

echo.
echo Installing frontend dependencies...
cd frontend
call npm install

echo.
echo Installing backend dependencies...
cd ..\backend
call npm install

echo.
echo Setup complete!
echo.
echo To start the application, run: npm run dev
echo Frontend will be available at: http://localhost:3000
echo Backend will be available at: http://localhost:5000
echo.
pause
