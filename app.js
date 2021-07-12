const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const Post = require('./models/Post');
mongo = require('mongodb')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/posts', postRoute);


app.get('/get', async (req, res)=> {
    try{
        const posts = await Post.find();
        res.json(posts); 
    }
    catch (err){
        res.json({message: err});
    }
});


app.delete('/delete/:id', function (req, res) {
    Post.findByIdAndDelete(req.params.id).then(post =>{
        if (!post){
            return res.status(404).send();
        }
        re.send(post);
    }).catch(error =>{
        res.status(500).send();
    })
  });



  app.patch('/update/:id', function (req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((post) =>{
        if (!post){
            return res.status(404).send();
        }
        re.send(post);
    }).catch(error =>{
        res.status(500).send();
    })
  });




mongoose.connect(process.env.DB_CONNECTIONS,
    { useNewUrlParser: true, useUnifiedTopology: true },    
    () => console.log('connected to database')
);

 app.listen(process.env.DB_CONNECTIONS || 200);
