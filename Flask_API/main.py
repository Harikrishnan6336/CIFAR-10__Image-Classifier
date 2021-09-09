from flask import Flask, jsonify, request
from flask_cors import CORS
import base64
import io
import numpy as np
from PIL import Image
from utilities import *
import tensorflow as tf

app = Flask("cifar10")
CORS(app)

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']


@app.route('/', methods=['POST'])
def index():
    print(request)
    key_dict = request.get_json()
    print("NEXT")
    print(key_dict)
    image_base64 = key_dict["image"]
    imgdata = stringToImage(image_base64)
    imgdata = toRGB(imgdata)
    img = imgdata / 255.0
    model = tf.keras.models.load_model('my_model.h5')
    res = model.predict(np.array([img]))
    ans = np.argmax(res)
    result = class_names[ans]
    response = {
        "result" : result,
    }
    print(class_names[ans])
    response = jsonify(response)
    return response

@app.route('/', methods=['GET'])
def ind():
    return "API is up."


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8002)