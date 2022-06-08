const router = require("express").Router();
const todo = require("../models/todo");

// GET METHOD
router.get("/", async(req, res) => {
    todo.find({}, (err, tasks) => {
        res.render("index", { todos: tasks });
        });
    });

// POST METHOD
router.post('/',async (req, res) => {
    console.log(req.body);
    const Todo = new todo({
        content: req.body.todo
    });
    
    try {
        await Todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
    });
 
module.exports = router