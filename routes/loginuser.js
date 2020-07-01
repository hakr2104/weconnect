const express=require('express')
const route = express.Router();
const Users=require('../db/posts').Users
var badshah="";

route.post('/',async (req,res)=>{
    //Users.create({username:req.body.username,password:req.body.password}).then((user)=>{res.send(user)})
     badshah="";
    await console.log(req.body);
    //await console.log(req.query);
    await console.log("HI "+ req.body.username+" "+req.query.password+" ");  
    const user=await Users.findOne({where:{username:req.body.username}}) 
    await console.log(user);
    if(user){
        if((user.password)==(req.body.password)){
             badshah=req.body.username;
             console.log("Hurrah! you logged in successfully "+badshah+" okay?")
        }else{
            console.log("password did not match")
        }
    }
    res.send(badshah)
})
route.get('/',(req,res)=>{
    if(req.query.username){
        // console.log("oooooooo "+req.query.username)
         const user= Users.findOne({where:{username:req.query.username}})
         .then((user)=> {
            //  console.log(user);
            //console.log("i came here with "+user.username)
             res.send(user);
         })
        // res.send(user);
    }else res.send("username is not present in the database")
    // res.send("hi how you doing?")
})
module.exports={
    badshah,route
}