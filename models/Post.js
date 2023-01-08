const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        unique:true
    },
    customer_name:{
        type: String,
        required:true
    },
    shop_email:{
        type: String,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },
    status:{
        type: Boolean,
        required:true
    },

}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema)