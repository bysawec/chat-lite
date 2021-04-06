import React from 'react';
import axios from 'axios';
import reducer from './reducer';
import JoinBlock from './JoinBlock.jsx';
import socket from './socket';
import Chat from './Chat.jsx';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('roomJoin', obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    setUsers(data.users);
  };
  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    });
  };

  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message
    });
  };

  React.useEffect(() => {
    socket.on('roomSetUsers', setUsers);
    socket.on('roomNewMessage', addMessage);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        {!state.joined ? <JoinBlock onLogin={onLogin} /> : <Chat {...state} onAddMessage= {addMessage}/>}
      </div>
    </div>
  );
}

export default App;
