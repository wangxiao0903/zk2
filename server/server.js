const http = require('http');

const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end('json')
    } else if (req.url === '/txt') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('txt')
    } else if (req.url === '/jpg') {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        let img = fs.readFileSync('../01.jpg')
        res.end(img)
    }
});

server.listen(3000, () => {
    console.log('服务器成功');

})

