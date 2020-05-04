const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  	console.log((req.body));
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Server App is Up and Running!\n');
});

server.listen(port, hostname, () => {
  	console.log(`Server is running at http://${hostname}:${port}/`);
});
