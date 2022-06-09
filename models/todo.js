const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({

content: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now,
    timezone:"Asia/Kuala Lumpur",
}
})
module.exports = mongoose.model('Todo', TodoSchema);