# em:)
Hack NYU 2022 Project
was to be depolyed on a server
encountered some technical issue
so only development environment is available
## Start flask server 
run
```
cd flask-server`
virtualenv venv
pip install flask
python main.py
```
to start flask server.

## Start React and load HTML
Make sure the latest version of Node.js and npm are installed
```
cd client
npm install
npm start
```
page should be available at ```localhost:3000```

## Backend APIs
+ `/PostMessage(user_id,message)`
	+ add a message
+ `/GetMesssage()`
	+ return a random message 
+ `/GetHappy()`
	+ return the number of happy person in 400s
+ `/GetSad()`
	+ return the number of sad person in 400s
+  `/Sad`
	+  sad count++
+  `/Happy`
	+  happy count++
