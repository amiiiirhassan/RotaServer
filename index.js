const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const CheckUserVerifyCode = require('./src/components/CheckUserVerifyCode');
const AddToken = require('./src/components/AddToken');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
const port = 3000
const mongoose = require('mongoose')
const authRouter = require('./src/routes/index');
const uri = "mongodb://rota:rota1367@ds345597.mlab.com:45597/rota"
const client= mongoose.connect(uri,{ useNewUrlParser: true })
.then(()=> console.log("success connect to db"))
.catch(err =>console.log("faild connect to db"))
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test',(req,res) =>   res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
);

app.use('/signin',authRouter);
//AddToken('09379640869');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))