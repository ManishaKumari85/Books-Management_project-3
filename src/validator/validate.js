const { default: mongoose } = require("mongoose");

let isValid= function(value){
    if(typeof value === "undefined" || value === "null") return true;
    if(typeof value === "string" && value.trim().length===0) {return true;}  //first condition checked than worng to move to next condtion checked
    return false;
};
let validInUpdate =function (value){
    if(value==="null") return true;
    if(typeof value === "string" && value.trim().length===0) {return true;}
    return false;
}
  
let isValidRequestBody = function(data){
    return Object.keys(data).length === 0;
};
const isValidObjectId= function(value){
    return mongoose.Types.ObjectId(value)
}

let validISBN = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
let validEmail = /^[a-z0-9 ]{1,}@g(oogle)?mail\.com*$/;
let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
let validName = /^[a-zA-Z ]*$/;
let validPhone = /^[6-9]\d{9}$/;
let validRating=/^[1-5](\.[0-9][0-9]?)?$/;
let validreleased=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;





module.exports= {isValid, isValidRequestBody, validInUpdate, validISBN, validRating, validEmail, validPassword,validreleased, validName, validPhone,isValidObjectId}