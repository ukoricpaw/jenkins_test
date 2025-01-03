import http from 'node:http';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        return res.end('<h1>LALALA</h1>');
    }
    return res.end();
});

server.listen(3000, () => {
    console.log('server started');
});
