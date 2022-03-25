const http = require('http')

const server = http.createServer((req, res)=>{
    //res.write('Welcome to our home page')
    //res.end()
    if(req.url === "/"){
        res.end('Welcome to our home page')
    }

    if(req.url === "/about"){
        res.end("Here is our short history")
    }
    res.end(
        `<h1>Oops</h1>
        <P>We can't find the page you are looking for</p>
        <a href = "/">Back to Home</a>`
    )
})

server.listen(5000)