// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:4202');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization');
  next();
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  // res.sendFile(path.join(__dirname, 'src/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {

  console.log('user connected');

  socket.on('disconnect', function() {
      console.log('user disconnected');
  });

  socket.on('add-message', (message) => {
      io.emit('message', { type: 'new-message', text: message });
      // Function above that stores the message in the database
      // databaseStore(message)
  });

});