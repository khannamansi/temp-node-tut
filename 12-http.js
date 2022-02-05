const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Node App');
    }
    if(req.url === '/about'){
        res.end('Here is the about tag');
    }
    res.end(`
    <h1>Wrong URL! Fucking check the tab B*tch!</h1>
    <a href='/'>Back to home</a>
    `)
})

server.listen(5000)