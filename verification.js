const joi=require('@hapi/joi')

const registerValidation=(data)=>{
    const schema=joi.object().keys({
        username:joi.string().min(6).max(30).required(),
        password:joi.string().min(6).max(30).required(),
        email:joi.string().min(6).max(30).required().email(),
    })
   return joi.validate(data,schema)
}
module.exports.registerValidation=registerValidation