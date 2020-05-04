var express = require('express');
var app = express();
app.use(express.json());
app.post('/', function(request, response){
  console.log(request.body);      // your JSON
//  console.log(request.variables.request_body);      // your JSON
   response.send(JSON.stringify(request.body)+"\n");    // echo the result back
});
app.listen(5000);