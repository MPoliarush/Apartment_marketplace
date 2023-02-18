const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    rooms:{
        type:Number,
        minimum:1,
        required:true
    },
    name:{
        type:String,
        maximum:99,
        required:true
    },
    price:{
        type:String,
        minimum:1,
        required:true
    },
    descr:{
        type:String,
        maximum:999,
        required:false
    }
})

module.exports = mongoose.model("Apartment", apartmentSchema)