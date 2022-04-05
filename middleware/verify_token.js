const jwt = require('jsonwebtoken');
exports.verifyToken = (request,response,next)=>{
    try{
        console.log("token "+ request.headers.authorization);
        if(!request.headers.authorization)
          return response.status(200).send("first if - Unauthorized Request");
        if(request.headers.authorization == null)
          return response.status(200).send("second if - Unauthorized Request"); 
        let token = request.headers.authorization.split(" ")[1];
        let payload = jwt.verify(token,'parth');
        next();                 
    }catch(err){
        console.log(err);
        return response.status(200).send("Inside catch Unauthorized User")
     }
}