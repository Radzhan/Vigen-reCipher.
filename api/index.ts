import express from "express";
import viginerEncodeRouter from "./router/viginerEncode";
import viginerDecodeRouter from "./router/viginerDecode";

 const app = express();
 const port = 8000;

 app.use(express.json());
 app.use('/encode', viginerEncodeRouter);
 app.use('/decode', viginerDecodeRouter);

 app.listen(port, () => {
    console.log('we are live on ' + port);
 });