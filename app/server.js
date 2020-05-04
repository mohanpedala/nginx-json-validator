var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
//  console.log(request.variables.request_body);      // your JSON
   response.send(JSON.stringify(request.body)+"\n");    // echo the result back
});

// Now listen on a port
port = 5000;
app.listen(port);
console.log("Server is listening on port " + port);
