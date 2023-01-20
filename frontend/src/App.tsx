import { Button, ButtonGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { DecodedMessage, EncodedMessage, Message } from './store/viginer';

function App() {
  const getMessage: string = useAppSelector(Message);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState({
    decode: '',
    encode: '',
    password: '',
  });

  let object = {
    message: '',
    password: message.password,
  };

  const MakeMessage = async (arg: string) => {
    if (arg === 'encode') {
      setMessage(prev => ({ ...prev, decode: getMessage }));
      object.message = message.encode;
      await dispatch(EncodedMessage(object));
    } else {
      setMessage(prev => ({ ...prev, encode: getMessage }));
      object.message = message.decode;
      await dispatch(DecodedMessage(object));
    }
  };
  const onDishChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMessage(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
      <div>
        <TextField id="filled-basic" label="Encode" variant="filled"
          name='encode'
          value={message.encode}
          onChange={onDishChange} />
      </div>
      <TextField id="outlined-basic" label="Password" variant="outlined" name='password' value={message.password} onChange={onDishChange} required />
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button onClick={() => MakeMessage('encode')}>Encode</Button>
        <Button onClick={() => MakeMessage('decode')}>Decode</Button>
      </ButtonGroup>
      <div>
        <TextField id="filled-basic" label="Decode" variant="filled"
          name='decode'
          value={message.decode}
          onChange={onDishChange} />
      </div>
    </div>
  );
}

export default App;
