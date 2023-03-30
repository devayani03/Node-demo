const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Heres a short history')
    }
    
    res.end(
        `<h1>OOPS!</h1>
        <p>We cant find the page</p>
        <a href>Go back to home page</a>`)
})
server.listen(5000)