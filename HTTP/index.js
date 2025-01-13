const http=require("http");

const server =http.createServer((req,res)=>{
    res.end("hello world!");
})

const port=3800;
server.listen(port,()=>{
    console.log(`server is listening at ${port} `);
})
