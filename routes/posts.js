const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets specifis post
router.get('/:postID', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }
    catch (err){
        res.json({message:err});
    }
});

router.post('/', async (req, res)=>{
    const post = new Post({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        firstNumber: req.body.firstNumber,
        secondNumber: req.body.secondNumber,
        thirdNumber: req.body.thirdNumber
    });
  try{
      const savePost = await post.save();
      res.json(savePost);
  }
  catch (err){
      res.json({message: err});
  }
});

module.exports = router;