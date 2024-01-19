const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to the Home Page');
    }
    if(req.url==='/about'){
        res.end('This is a Short History');
    }
})

server.listen(5000);