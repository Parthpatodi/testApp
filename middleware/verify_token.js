const jwt = require('jsonwebtoken');
exports.verifyToken = (request,response)=>{
    try{
        console.log("token "+ request.headers.Authorization);
        if(!request.headers.Authorization)
          return response.status(401).send("Unauthorized Request");
        if(request.headers.Authorization)
          return response.status(401).send("Unauthorized Request"); 
        let token = request.headers.Authorization.split(" ")[1];
        let payload = jwt.verify(token,'parth');
        next();                 
    }catch(err){
        return response.status(401).send("Unauthorized User")
     }
}