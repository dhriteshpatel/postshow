const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    id: {
        type: String,
        default: `Math.random().toString()`
    },
    event_name : {
        type: String,
        default: "default event"
    },
    thumbnail_image : {
        type: String,
        default: "http://event.coconutmediabox.com/uploads/325f53d791567c91035ff6c386d46620.jpg"
    },
    event_date : {
        type: Date,
        default: new Date()
    },
    views : {
        type: Number,
        default: 0
    },
    likes : {
        type: Number,
        default: 0
    },
    shares : {
        type: Number,
        default: 0
    }
},{timestamps:true})

module.exports = mongoose.model("Post", postSchema)