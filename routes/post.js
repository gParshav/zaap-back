const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')


//CREATE
router.post('/', async (req, res) => {
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }

    catch(err){
        res.status(500).json(err)
    }
})

//GET
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
    //   const { password, ...others } = user._doc;
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/", async (req, res) => {

  try {
    const param = req.query;
    console.log(param)
    const post = await Post.find(param);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
    
});

module.exports = router