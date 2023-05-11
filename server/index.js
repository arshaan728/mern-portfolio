const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotnev').config();


const SkillModel = require('./models/Skill');
const commentModel = require('./models/Comments');


app.use(express.json());
app.use(cors( {
   origin: ['http://localhost:3000','httpss://mern-portfolio.onrender.com']}
));
mongoose.connect('mongodb+srv://arshanarul:%21C%40ibaZ8B5gPJK_@cluster0.gyh8ewg.mongodb.net/SkillretryWrites=true&w=majority',{
    useNewUrlParser : true,
});

// app.post('/insert',async(req,res)=> {
//     const skill = req.body.skill;
//     const description = req.body.description;
//     const language = req.body.language;
//     const data  = new SkillModel({language : language,description:description,skill:skill});

//     try {
//         await data.save();
//         res.send('inserted data');

//     }
//     catch (err) {
//         console.log(err);
//     }
// });
// app.get('/read', async(req,res) => {

//     await SkillModel.find({},(err,result)=>{
//         if (err) {
//             res.send(err);
//         }
//         res.send(result);
//     })
// });

app.get('/read', async(req,res)=> {
 try {
    const data = await SkillModel.find({});
    res.send(data);
    console.log(data)
 }
 catch(err) {
    console.log(err);
 }
});
app.post('/insert',async (req,res)=>{
    console.log('in');

    const comment = req.body.comment;

    const data = new commentModel({comment:comment});

    try {
        await data.save();
        console.log(data);
       
    }
    catch (err) {
        console.log(err);
    }
});


app.listen(process.env.PORT || 3001, ()=> {
    console.log('server running port 3001');
})
