const http=require("http");
const usuarios=[
    {
    id:1, nombre:"Juan"
    },
    {
        id:1, nombre:"Juan"
        },
        {
            id:1, nombre:"Juan"
            },
];
const server=http.createServer((req,res)=>{
    if(req.method == "GET" && req.url =="/usuarios"){
        res.writeHead(200, {"content-Type":"application/json"});
        res.end(JSON.stringify(usuarios));
    }
});