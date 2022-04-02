const Category = require("../model/category.model");

exports.addCategory = (request,response)=>{
    Category.create({
        name: request.body.name,
        image: "https://testapp-backend-api.herokuapp.com/images/" + request.file.filename,
      })
        .then((result) => {
          return response.status(201).json(result);
        })
        .catch((err) => {
          return response
            .status(403)
            .json({ message: "Oops! Something went wrong.." });
        });
}