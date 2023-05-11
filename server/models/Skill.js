
const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    language:{
        type:String ,
        required: true,
    },
    description : {
        type : String,
        required : true,
    },
    skill : {
        type : String ,
        required : true,
    },
    url : {
        type:String,
        required:true,
    }
});

const Skill = mongoose.model('Skill',SkillSchema);
module.exports = Skill;