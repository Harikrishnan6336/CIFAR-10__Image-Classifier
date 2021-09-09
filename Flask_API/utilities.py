import io
# from cv2 import cvtColor, COLOR_BGR2RGB
import base64 
import numpy as np
from PIL import Image

# Take in base64 string and return PIL image
def stringToImage(base64_string):
    imgdata = base64.b64decode(base64_string)
    return Image.open(io.BytesIO(imgdata))

# convert PIL Image to an RGB image( technically a numpy array ) that's compatible with opencv
def toRGB(image):
    rgb = np.asarray(image)
    print(rgb.shape)
    rgb = np.resize(rgb,(32,32,3))
    print(rgb.shape)
    return rgb
    # return cvtColor(np.array(image), COLOR_BGR2RGB)