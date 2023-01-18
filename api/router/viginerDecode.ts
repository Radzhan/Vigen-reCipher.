import express from 'express';
const Vigenere = require('caesar-salad').Vigenere;

const viginerEncodeRouter = express.Router();

viginerEncodeRouter.post('/', async (req , res) => {
    const password = req.body.password;
    const message = req.body.message;
    const encodeMessage ={
        decoded: Vigenere.Decipher(password).crypt(message),
    };

    res.send(encodeMessage);
});
export default viginerEncodeRouter;