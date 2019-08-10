const jwtstrategy=require('passport').Strategy
const extractjwt=require('passport-jwt').ExtractJwt
const user=require('../model/user')
const key=require('./keys').secret
const opts={}
opts.jwtfromrequest=extractjwt.fromAuthHeaderAsBearerToken()
opts.secretorkey=key
module.exports=passport=>{
    passport.use(
        new jwtstrategy(opts,(jwt_payload,done)=>{
            user.findById(jwt_payload._id).then(user=>{
                if(user)
                {return done(null,user)}
                return done(null,false)
            })
            .catch(err=>{
                console.log(err)
            })
        })
    )
}