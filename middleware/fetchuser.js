var jwt = require('jsonwebtoken');
const JWT_RESULT="dsfklkggdsdg"


fetchuser=(req,res,next)=>{
    // get the user from jwt token and add id to request object
    const token=req.header('authToken');
    if(!token){
        res.status(401).send({error:"please authenticate a valid token"})
    }
    try {
        const data=jwt.verify(token,JWT_RESULT);
        req.user=data.user;
        next();       
    } catch (error) {
        res.status(401).send({error:"please authenticate a valid token"})  
    }    
    
}

module.exports=fetchuser;