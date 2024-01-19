const http = require('http');
 const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home Page');
    }
    if(req.url==='/about'){
        res.end('This is just a Short History');
    }
    res.end(`
        <h1>Oops</h1>
    `)
 })

 server.listen(5000);