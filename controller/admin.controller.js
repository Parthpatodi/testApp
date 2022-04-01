const Admin = require("../model/admin.model");
let jwt = require("jsonwebtoken");
exports.signup = (request,response)=>{
    Admin.create({
        email : request.body.email,
        password : request.body.password
    }).then((result) => {
        return response.status(200).json({result : result});
    }).catch((err) => {
        return response.status(500).json({error : err});
    });
}
exports.signin = (request,response)=>{
    Admin.findOne({
        email : request.body.email,
        password : request.body.password
    }).then((result) => {
        if(result)
        {
            let payload = { subject : result._id };
            let token = jwt.sign(payload,"parth");
            return response.status(200)
            .json({
                status:"Login Success",
                result : result ,
                token : token
            }); 
        }
    }).catch((err) => {
        return response.status(500).json({error : err});
    });
}