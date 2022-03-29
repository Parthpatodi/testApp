const Admin = require("../model/admin.model");
exports.signup = (request,response)=>{
    Admin.create({
        email : request.body.email,
        password : request.body.password
    }).then((result) => {
        return response.status(200).json(result);
    }).catch((err) => {
        return response.status(500).json(err);
    });
}
exports.signin = (request,response)=>{
    Admin.findOne({
        email : request.body.email,
        password : request.body.password
    }).then((result) => {
        return response.status(200).json(result);
    }).catch((err) => {
        return response.status(500).json(err);
    });
}