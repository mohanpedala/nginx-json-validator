const http = require('http');

const hostname = '127.0.0.1';
const port = 10415;

const server = http.createServer((req, res) => {
  	console.log("Request blocked due to invalid JSON - " + typeof(req) + ", " + req.toString());
	//console.log(req);
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Rejected due to invalid JSON!\n');
});

server.listen(port, hostname, () => {
  	console.log(`Error Handling Server is running at http://${hostname}:${port}/`);
});
