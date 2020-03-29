// importies
const express = require("express")

// init class
const server = express()

//settings
server.use(express.urlencoded({ extended:true}));
server.use(express.json());
server.set("port",process.env.PORT | 3000);

//Collection data
const data = ["dns"] 

//function
const lookDns = (dns)=>{
    if(data.filter(x=>x===dns).length === 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//behavior
server.post('/auth',(req,res)=>{
    const { dns } = req.body
    
    if(dns)
    {
           lookDns(dns)?res.json({status:200}):res.json({status:404})

    }else
    {
        res.json({status:400})
    }
});

server.get(('/'),(req,res)=>{
    res.send("<-----Welcome Api---->")
});

server.listen(server.get("port"),()=>{
    console.log("http://localhost:"+server.get("port"))
});