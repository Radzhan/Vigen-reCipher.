import express from "express";
import cors from 'cors'
import viginerEncodeRouter from "./router/viginerEncode";
import viginerDecodeRouter from "./router/viginerDecode";

 const app = express();
 const port = 8000;

 app.use(cors())
 app.use(express.json());
 app.use('/encode', viginerEncodeRouter);
 app.use('/decode', viginerDecodeRouter);

 app.listen(port, () => {
    console.log('we are live on ' + port);
 });

