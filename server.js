const express = require('express');
const path = require('path')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); для query
app.use(express.static(__dirname + "/build"));

app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, '/build', 'index.html'));
});
const rooms = new Map();

app.get('/rooms/:id', (req, res) => {
  const { id: roomId } = req.params;
  const obj = rooms.has(roomId)
    ? {
        users: [...rooms.get(roomId).get('users').values()],
        messages: [...rooms.get(roomId).get('messages').values()],
      }
    : { users: [], messages: [] };
  res.json(obj);
});

app.post('/rooms', (req, res) => {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ])
    );
  }
  res.send();
  // res.status(200).json([...rooms.values()])
});

io.on('connection', (socket) => {
  socket.on('roomJoin', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).emit('roomSetUsers', users);
  });

  socket.on('roomNewMessage', ({ roomId, userName, text }) => {
    const obj = {
      userName,
      text,
    }
    rooms.get(roomId).get('messages').push(obj);
    socket.to(roomId).emit('roomNewMessage', obj);
  });
  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        socket.to(roomId).emit('roomSetUsers', users);
      }
    });
  });
  console.log('user connected', socket.id);
  console.log(socket.handshake.address)
});

server.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен!');
});
