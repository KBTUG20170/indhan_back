const express = require('express');
const mongoose = require('mongoose');
const router =require('./routes/routes');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017',{
  //'mongodb+srv://samruddhikhairnar:PoIuY0987$1@indhan.rvyqiea.mongodb.net/indhan?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology:true
}).then(app.listen(4000, () => {
  console.log("Server is running on PORT no. 4000");
}));

app.use(router);

