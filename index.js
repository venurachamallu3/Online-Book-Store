//let express = require('express'),
//path= require('path'),mongoose = require('mongoose'),
//cors = require('cors'),bodyParser =require('body-parser'),mongoDb = require('./database/db');mongoose.Promise = global.Promise;mongoose.connect(mongoDb.db,{  useNewUrlParser:true,  useUnifiedTopology:true}).then(()=>{    console.log("dataBase connected successfully !")},error=>{    console.log("data base Error:" +error)})// going to make port and serviceconst bookRoute= require("./node-backend/routes/book.routes");const app = express();app.use(bodyParser.json());app.use(bodyParser.urlencoded({  extended:false}));app.use(cors());// create static pathapp.use(express.static(path.join(__dirname,'dist/Bookstore')));//api root app.use('/api',bookRoute);//create portconst port = process.env.port || 8000;app.listen(port, ()=>{  console.log('Listening port on:' +port);});//404 error handler..app.use((req,res,next)=>{  next(createError(404))});//base routeapp.get('/',(req,res)=>{  res.send('invalid Endpoint')});app.use(function(err,req,res,next){  console.error(err.message);  if(!err.statusCode) err.statusCode = 500;  res.status(err.statusCode).send(err.message);});
/*
let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
},
    error => {
        console.log('Data base Error:' + error)
    }
)

*/
let express = require('express'),
 path=require('path'),
 mongoose = require('mongoose'),
 cors = require('cors'),
 bodyParser=require('body-parser'),
 mongoDb = require('./database/db');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bookstore", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
error=>{
    console.log('Data base Error:'+error)
}
)

// port and server
const bookRoute = require("./node-backend/routes/book.routes");
const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname,'dist/Bookstore')));
//API root
app.use('/api',bookRoute);
//port create
const port=process.env.port || 8000;
app.listen(port,()=> {
    console.log('Listening Port on :'+ port);
})

//404 Errro
/*
app.use((req,res,next)=>{
    next(createError(404));
});
*/
//base route
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
});
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'dist/Bookstore/index.html'));
});
app.use(function (err,req,res,next){
    console.log(err.message);
    if(!err.statusCode) err.statusCode=500;
    res.status(err.statusCode).send(err.message);
});
