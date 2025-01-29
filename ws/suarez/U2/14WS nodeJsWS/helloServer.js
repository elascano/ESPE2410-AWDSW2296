const http = require('node:http');

const hostname = '127.0.0.1';

const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('hello, <b> Web Developers! </b> from <b> Matias Suarez </b>');
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});