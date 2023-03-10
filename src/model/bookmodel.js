const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    bookCover:{
     type:String,
     required:true,
     unique:true,
     trim:true

    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: objectId,
        required: true,
        ref: "userDB",
        trim: true
    },
    
    ISBN:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },
    subcategory:{
        type: [String],
        required: true,
        trim: true
    },
    reviews: {
        type: Number,
        default: 0
    },

    isDeleted: {
        type: Boolean,
        default: false
    },
    
    deletedAt: Date,
    releasedAt: Date
},
    { timestamps: true });


module.exports = mongoose.model('bookDb', bookSchema)