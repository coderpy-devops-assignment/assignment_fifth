from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    username = request.form.get('username')  # ✅ This works with form-encoded data
    return jsonify({"message": f"Hello, {username}!"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)  # ✅ Important!
