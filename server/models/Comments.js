const mongoose = require('mongoose')

const ContentSchema = new mongoose.Schema({
    comment : {
        type:String,
        required:true,
    },
});

const data = mongoose.model('record',ContentSchema)
module.exports = data;
