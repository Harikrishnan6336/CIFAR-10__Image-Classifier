import React, { useState } from "react";
import "./App.css";
import { Form, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const api_link = "https://cifar10class.herokuapp.com/";

function App() {
  const [baseImage, setBaseImage] = useState("");
  const [imgData, setImgData] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    const baseString = base64.split("base64,")[1];
    setImgData(baseString);
  };

  const identify = async () => {
    setLoading(true);
    await axios
      .post(api_link, {
        image: imgData,
      })
      .then((res) => {
        console.log("result ==   " + res.data.result);
        setResult(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1 className="main-heading">CIFAR 10 - Image Classifier</h1>
      <br />
      <br />
      <Form className="inputfile">
        <Form.Group controlId="formFile" className="mb-3 form-input-group">
          <Form.Label className="form-input-label">
            Input an image file :
          </Form.Label>
          <Form.Control
            type="file"
            className=""
            onChange={(e) => {
              setBaseImage("");
              if (e.target.value !== "") {
                uploadImage(e);
              }
              setResult("");
            }}
          />
        </Form.Group>
      </Form>

      <br></br>
      <img
        src={baseImage}
        className={baseImage ? "d-inline-block" : "d-none"}
        height="200px"
        alt="Pic uploaded shown here"
      />
      <br />
      <br />
      <div>
        {loading && (
          <Spinner animation="border" role="status" className="mt-7">
            <span className="sr-only"></span>
          </Spinner>
        )}
        <h2 id="result-heading" className={result ? "d-block" : "d-none"}>
          It's a <span>{result.toUpperCase()}</span>
        </h2>
      </div>

      <Button
        variant="primary"
        id="button-upload"
        onClick={() => {
          if (baseImage === "") {
            alert("No image uploaded");
          } else {
            setResult("");
            identify();
          }
        }}
      >
        <span className="button-text">Identify</span>
      </Button>

      <Button
        id="button-cancel"
        variant="danger"
        onClick={() => {
          setBaseImage("");
          setResult("");
          setImgData("");
        }}
      >
        Cancel
      </Button>
    </div>
  );
}

export default App;
