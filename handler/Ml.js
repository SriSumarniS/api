/*const express = require('express');
const app = express();
const axios = require('axios');

// Define the URL of the Cloud Run service endpoint
const url = 'https://model-ml-c6fl6h5vlq-et.a.run.app/predict';

// Create an API endpoint that accepts input data
app.post('/predict', async (req, res) => {
  const inputData = req.body;

  // Make an HTTP request to the Cloud Run service endpoint with the input data as the request payload
  const response = await axios.post(url, inputData);

  // Receive the response from the Cloud Run service, which contains the predictions made by the machine learning model
  const outputData = response.data;

  // Use the response from the Cloud Run service to generate the response for the API request
  res.send(outputData);
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 8080');
});*/

import { requests } from "express";
import res from "express/lib/response";

res = requests.post("https://model-ml-c6fl6h5vlq-et.a.run.app/", files={'penyelenggara': 'sri' , 'jenis_event': 'bansos', 'cara_transaksi': 'dana', 'kota_asal_penyelenggara': 'bandung'})

print(res.json())