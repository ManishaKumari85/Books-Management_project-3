const express = require("express")
const route = require('./Routes/routes')
const  mongoose = require("mongoose")
const app = express()
const port =process.env.PORT || 3000
const multer=require("multer")
//MIDDLEWARE
app.use(express.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://ManishaKumari:Manisha85@cluster0.jp7k75q.mongodb.net/Crudapp?retryWrites=true&w=majority",{
    useNewUrlParser : true
})

.then(()=>console.log("connected"))
.catch((err)=>{
    console.log("not connected",err.message)
});


app.use('/', route)

app.listen(port,  () => {
    console.log(`Example app listening on port ${port}!`);
})
