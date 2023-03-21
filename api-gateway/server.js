
const gateway = require("fast-gateway");
const port = 9001;

const server = gateway({
    routes :[
        {
            prefix : "/order",
            target : "http://localhost:8001/",
            hooks : {}
        },
        {
            prefix : "/payment",
            target : "http://localhost:8002/",
            hooks : {}
        }
    ],
})

server.get("/gatway", (req,res)=>{
    res.send("API Gateway is called")
})

server.start(port).then(server=>{
    console.log(`API Gateway is running on ${port}`)
})