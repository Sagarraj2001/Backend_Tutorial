const http=require("http");

const myServer=http.createServer((req,res)=>{
    console.log(req);
    res.end("hi i am server");
});

myServer.listen(8000,()=>console.log("server is running"));