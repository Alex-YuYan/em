from flask import Flask
from flask import request
from flask import jsonify
import random
from PeopleCounter import NumOfPeople
app = Flask(__name__)
num_happy=NumOfPeople(20)
num_sad=NumOfPeople(20)
messages=dict()


@app.route("/hello")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/PostMessage', methods=['POST'])
def PostMessage():
    if request.method == 'POST':
        messages[request.form['user_id']]=request.form['message']
        return jsonify(text="user: "+request.form['user_id']+" posted: "+request.form['message'])
    
@app.route('/GetMessage', methods=['POST'])
def GetMessage():
    if request.method == 'POST':
        return jsonify(text=messages[random.choice(list(messages))])


@app.route("/GetHappy",methods=['POST'])
def GetHappy(num_happy=num_happy):
    return jsonify(text=str(num_happy.total))

@app.route("/GetSad",methods=['POST'])
def GetSad(num_sad=num_sad):
    return jsonify(text=str(num_sad.total))

@app.route('/Happy')
def Happy(num_happy=num_happy):
    num_happy.addone()
    return jsonify(text="success")

@app.route('/Sad')
def Sad(num_sad=num_sad):
    num_sad.addone()
    return jsonify(text="success")

if __name__ == '__main__':
    app.run()
