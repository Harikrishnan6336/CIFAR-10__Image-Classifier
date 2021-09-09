# CIFAR10 - 🖼ImageClassifier

This project was built as part of my submittion to [TinkerHub Foundation](https://tinkerhub.org/) Practical AI Bootcamp.


#### A Multi-Class Image Classifier that can classify images into one among the 10 classes. User can call the API by a POST method with image in base64 string as an input data. The API return the predicted label.


## Problem Statement

Build a web app to recognise objects from images using tensorflow and flask API. 


## Brief Project Info

The dataset required for training the ML model was obtained from [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html) dataset. The dataset was obtained from tensorflow.kears.datasets Public API. 5000 images where used for training and 1000 images where used for validation in each category. 

Multi-Class Image classifier is built on TensorFlow framework using CNN architecture. Since the training was RAM intensive, it was carried out in Google Colab and the jupyter notebook used for training and validation can be found [here](https://colab.research.google.com/drive/1S7rrkzLNM7K2VpgMz2GwUra-4xQwnHzJ?usp=sharing). The Validation Loss, was found out and was compared with the training loss, using suitable plot diagrams drawn with matplotlib. Required Hypertuning of parameters was done by varying batch size, number of epochs and learning rate.

The trained ML model service is also made available in the form of an API built on the micro-web framework Flask. The ML model along with the prediction script is incorporated into Flask and deployed onto Heroku after testing it locally. The deployed API is this : https://cifar10class.herokuapp.com/. The API accepts a POST request with an image in the form of base64 string and returns the image label as predicted by the ML model.

A minimal website is made with ReactJS where the user can input an image and then let the model predict its label. It is hosted in netlify and can be found [here](https://cifar10class.netlify.app/).

## Built With ❤️ and

* [Python3.9](https://docs.python.org/3.9/) - The programming langauge used preprocess data, train the model and build the API.
* [TensorFlow](https://www.tensorflow.org/) - The deep learning library used to train the ML model
* [Flask](https://flask.palletsprojects.com/en/2.0.x/) - The micro-web framework used to build API
* [ReactJS](https://reactjs.org/) - The User Interface library used to build the website

