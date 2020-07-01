
const express=require('express')
const route = express.Router();
route.get('/',(req,res)=>{
    res.send("Hopfully this shows up")
})
module.exports={route};