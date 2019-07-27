const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const CheckUserVerifyCode = require('./src/components/CheckUserVerifyCode');
const AddToken = require('./src/components/AddToken');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors())
const mongoose = require('mongoose')
const {authRouter,updateUserRouter} = require('./src/routes/index');
const uri = "mongodb://rota:rota1367@ds345597.mlab.com:45597/rota"
const client= mongoose.connect(uri,{ useNewUrlParser: true })
.then(()=> console.log("success connect to db"))
.catch(err =>console.log("faild connect to db"))
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test',(req,res) =>   res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
);

app.use('/signin',authRouter);
app.use('/updateProfile',updateUserRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))