var express=require('express');
var app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route the request.
app.use('/api',require('./api/index'));

app.use('/',express.static(__dirname+"/public_static"));

app.listen(6000,function(){
  console.log("server started at port 6000");
});
