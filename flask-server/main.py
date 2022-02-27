from flask import Flask, jsonify
from flask import request
import random
app = Flask(__name__)

messages=dict()
happy=[231819]
sad=[194890]

messages[1]="I LOVE YOU"

@app.route("/hello")
def hello_world():
    return jsonify(text="Hello, World!")


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
def GetHappy(happy=happy):
    return jsonify(text=str(happy[0]))

@app.route("/GetSad",methods=['POST'])
def GetSad(sad=sad):
    return jsonify(text=str(sad[0]))

@app.route('/Happy')
def Happy(happy=happy):
    happy[0]+=1
    return jsonify(text="success")

@app.route('/Sad')
def Sad(sad=sad):
    sad[0]+=1
    return jsonify(text="success")
