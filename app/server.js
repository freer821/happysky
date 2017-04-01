var express = require("express"),
    app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');


app.use('/scripts', express.static(path.join(__dirname, '../node_modules')));
app.use('/reactlib', express.static(path.join(__dirname, './libs/react')));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/view/index.html');
});
	

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('danmaku', (comment) => {
    io.emit('danmaku', comment);
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});