const Joi=require('@hapi/joi')

module.exports=(data)=>{
    const validationSchema={
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        username:Joi.string().min(6).required(),
        confirmpassword:Joi.string().min(6).required()

    
    }
     return Joi.validate(data,validationSchema)
    }