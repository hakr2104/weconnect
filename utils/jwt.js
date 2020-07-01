const jwt=require("jsonwebtoken");
const JWT_SECRET='32131321245'
async function createjwt(user){
    const token= jwt.sign(user,JWT_SECRET);
    return token;
}
async function verrifyjwt( token){
 const user=jwt.verify(token,JWT_SECRET)
 return user
}
module.exports={
    createjwt,
    verrifyjwt,
}