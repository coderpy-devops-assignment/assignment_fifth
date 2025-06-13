import json
from flask import Flask, request

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    if request.data:
        data    = json.loads(request.data)
        username = data.get('username')
        return f"Received: {username}"

if __name__ == '__main__':
    app.run(host='0.0.0.0')
