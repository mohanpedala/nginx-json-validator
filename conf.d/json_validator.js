// Attempt to validate requests as JSON
function json_validator(req) {
    try {
        req.log('json_validator entered ...');
        if ( req.variables.request_body.length > 0 ) {
            JSON.parse(req.variables.request_body);
        }
        // return req.variables.upstream;
        return '127.0.0.1:5000'; // Address for success response
    } catch (e) {
        req.log('JSON.parse exception');
        return '127.0.0.1:10415'; // Address for error response
    }
}
