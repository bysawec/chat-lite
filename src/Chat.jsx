import React from 'react';
import './chat.css';
import socket from './socket';

function Chat({ users, messages, userName, roomId, onAddMessage }) {
  const [messageValue, setMessageValue] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('')

  const onSendMessage = () => {
    if (messageValue.trim()){
      socket.emit('roomNewMessage', {
        roomId,
        userName,
        text: messageValue,
      });
      onAddMessage({
        userName,
        text: messageValue,
      });
      setMessageValue('');
    }

  };
  const sortMessages = (messages) => {
    if (messages.length > 7){
      messages.splice(0,1)
      return messages
    } else {
      return messages
    }
  }
  return (
    <div className="container" >
      <h1>Room {roomId}</h1>
      <div className="chatbox" >
        <div className="chatbox__user-list">
          <h1>Online ({users.length}):</h1>
          {users.map((name, index) => (
            <div key={name + index} className="chatbox__user--active">
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className="chatbox__messages">
          {sortMessages(messages).map((message, index) => (
            <div key={message + index} className="chatbox__messages__user-message">
              <div className="chatbox__messages__user-message--ind-message">
                <p className="name">{message.userName}</p>
                <br />
                <p className="message"><b>{message.text}</b></p>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSendMessage();
          }}
        >
          <input
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            type="text"
            placeholder={placeholder || 'Enter your message'}
          />
        </form>
      </div>
    </div>
  );
}

export default Chat;
