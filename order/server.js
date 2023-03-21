
const express = require("express");
const app = express();
const port = 8001;

//database
const orders = [
    {
        id : 301,
        name: "Safola Honey - Active",
        price : 258
    },
    {
        id : 302,
        name: "Safola Honey - Gold",
        price : 360
    }        
]
app.get("/order",(req,res)=>{
    let response = {
        data :{
            items : orders
        }
    }
    res.json(response);
})

app.get("/order/:id",(req,res)=>{
    
    let orderId  = req.params && req.params.id ? req.params.id : 0;
    let order;
    for(let i=0; i<orders.length; i++){
        if(orders[i].id == orderId){
            order = orders[i];
        }
    }
    res.json({
        data :{
            items : order
        }
    });
})

app.listen(port, ()=>{
    console.log(`Order Microservice is running on ${port}`)
})

