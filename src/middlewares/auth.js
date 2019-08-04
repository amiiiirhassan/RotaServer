
const axios = require('axios')
const qs = require('qs')
const AddUser = require('../components/AddUser')
const CheckUserVerifyCode = require('../components/CheckUserVerifyCode')
const AddToken = require('../components/AddToken');
const CheckTokenIsValid = require('../components/CheckTokenIsValid');
const GetUser = require('../components/GetUser');
const auth = (req,res,next) => {
    const phoneNumber = req.body.phoneNumber;
    const verifyCode = req.body.verifyCode;
    const token = req.body.token;
    console.log("authing!")
    if(token) {
        CheckTokenIsValid(token)
        .then((response) => {
            console.log(response)

            if(response != false) {
                 res.send({ status: 200,currentUser:response,message: "Token is valid"})
            }
            if(response == false) {
                 res.send({ status: 401,message: "Token is wrong,you want hack this user!are you sure ?"})
            }
        })
        .catch(err=> console.log(err))

        return 
    }
    if(verifyCode) {
         CheckUserVerifyCode(phoneNumber,verifyCode)
          .then((verifyCodeIsValid)=> {
            console.log("verifyCodeIsValid",verifyCodeIsValid);
            if(verifyCodeIsValid) {
                AddToken(phoneNumber)
                .then((_token) => {
                    let currentUser = {};
                    GetUser(phoneNumber)
                    .then(user => {
                        if(user.phoneNumber) {
                            currentUser = user
                            return currentUser
                        }
                        else {
                            currentUser.phoneNumber = phoneNumber;
                            return currentUser
                        }
                    }) 
                    .catch(err => err)
                    res.send({ status: 200,currentUser: currentUser ,token: _token ,message: "Authorization success"})
                })
                .catch(err => console.log(err));
            }
            if(!verifyCodeIsValid) {
                res.send({ status: 401,message:"verify key is wrong"})
    
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        return

    }
    
    const SMS_API = 'https://api.kavenegar.com/v1/313039384C755273425851766277457A2B364C6256413D3D/'
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    const data = { 
        'receptor': phoneNumber,
        'token':randomNumber,
        'template':'verify' 
      };

    axios.post(SMS_API+'verify/lookup.json',qs.stringify(data)
    )
    .then(function(response) {
        res.status(response.data.return.status).send(response.data.return)
        console.log(randomNumber);
        AddUser(phoneNumber,randomNumber);
       

    })
    .catch(function(err){
       res.send({message:"has problem in sned sms api"});
    }) 
}
module.exports = auth;