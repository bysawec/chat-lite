import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import socket from './socket';
import axios from 'axios';
import reducer from './reducer';
export default function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('1');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!userName && roomId) {
      return alert('Enter your name');
    } else if (!roomId && userName) {
      return alert('Enter Room ID');
    } else if (!userName && !roomId) {
      return alert('Enter Room ID and Name');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post('/rooms', obj);
    await onLogin(obj);
  };

  return (
    <div className="join-block">
      <TextField
        className="input"
        label="Room"
        variant="filled"
        value={roomId}
        required
        color="secondary"
        onChange={(e) => setRoomId(e.target.value)}
      />

      <TextField
        className="input"
        label="Name"
        variant="filled"
        value={userName}
        required
        color="secondary"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button
        disabled={isLoading}
        onClick={onEnter}
        variant="contained"
        color="primary"
        size="medium"
      >
        {isLoading ? 'Joining...' : 'Join Room'}
      </Button>
    </div>
  );
}
