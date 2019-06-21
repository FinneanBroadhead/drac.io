var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
    console.log('listening on port 3000')
})

app.use(express.static('client'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(){
    console.log('a player connected:', io.id);
});

