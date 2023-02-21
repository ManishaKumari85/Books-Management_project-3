const express = require('express');
const bodyParser = require('body-parser');
const multer=require("multer");
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(multer().any())



mongoose.connect("mongodb+srv://ManishaKumari:Manisha85@cluster0.jp7k75q.mongodb.net/Crudapp?retryWrites=true&w=majority",{
   useNewUrlParser: true
}).then(() => console.log("MongoDB Is Connected")).catch(err => console.log(err));
  


app.use('/', route)


app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});
 