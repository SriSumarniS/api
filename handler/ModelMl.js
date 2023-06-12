import axios from "axios";

const url = 'https://model-ml-py2-c6fl6h5vlq-et.a.run.app/predict'
export const  postModel = async(req, res) => {
   const inputData = req.body
   const response = await axios.post(url, inputData)
   const outputData = response.data;
  res.send(outputData)
}