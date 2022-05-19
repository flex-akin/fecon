
const Joi = require("@hapi/joi")

const registerValidation = (data) => {

    const schema = Joi.object({

    

    title : Joi.string().min(2).required(),
    status : Joi.string().min(2).required(),
    year : Joi.date().min(2).required(),
    surname : Joi.string().min(2).required(),
    otherNames : Joi.string().min(2).required(),
    dateOfBirth : Joi.date().min(2).required(),
    gender : Joi.string().min(2).required(),
    studentPhoneNumber : Joi.string().min(11).required(),
    fathersPhoneNumber : Joi.string().min(11).required(),
    mothersPhoneNumber : Joi.string().min(11).required(),
    email : Joi.string().min(6).required().email(),
    classe : Joi.string().min(1).required(),
    state : Joi.string().min(1).required(),
    LGAOfOrigin : Joi.string().min(1).required(),
    town : Joi.string().min(1).required(),
    school : Joi.string().min(1).required(),
    userId : Joi.string().min(1).required(),
    image : Joi.string().min(1),
    password : Joi.string().min(6).required(),
    confirmPassword: Joi.ref('password')

});
 return schema.validate(data)

};


const loginValidation = (data) => {

    const schema = Joi.object({
    
        userId : Joi.number().min(1).required(),
        password : Joi.string().min(6).required(),
    
    
    });
     return schema.validate(data)
    
    }


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


