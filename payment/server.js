
const express = require("express");
const app = express();
const port = 8002;

//database
const payments = [
    {
        id : 100,
        name: "Payment 1",
        price : 258
    },
    {
        id : 101,
        name: "Payment 2",
        price : 360
    }        
]
app.get("/payment-list",(req,res)=>{
    let response = {
        data :{
            items : payments
        }
    }
    res.json(response);
})

app.get("/:id",(req,res)=>{
    
    let paymentId  = req.params && req.params.id ? req.params.id : 0;
    let payment;
    for(let i=0; i<payments.length; i++){
        if(payments[i].id == paymentId){
            payment = payments[i];
        }
    }
    res.json({
        data :{
            items : payment
        }
    });
})

app.get("/", (req,res)=>{
    res.status(200).json({message : "Payment called"})
})

app.listen(port, ()=>{
    console.log(`Payment Microservice is running on ${port}`)
})

