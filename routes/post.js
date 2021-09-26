const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model("Post");


const pageNumber = 2;
const pageSize =10;


router.get("/getallposts", (req, res) => {
    Post.find()
    .skip((pageNumber - 1) * pageSize)
    .sort({likes:1,views:1,shares:1,event_date:1})
    .then((posts) => {
        res.json({posts: posts});
    })
    .catch((err) => {console.error(err)})
})

// function createPost(){
//     const mypost = new Post({
//         id: "HktWbZ1fggox",
//         thumbnail_image: "http://i.imgur.com/m07g0r2.jpg",
//         event_name: "Heeloolasaadlo1",
//         event_date: 1514678399,
//         views: 7,
//         likes: 4,
//         shares: 5
//     }
//     )
//     mypost.save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {console.log(err)})
// }

// createPost()

module.exports = router;