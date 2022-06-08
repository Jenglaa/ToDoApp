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

// UPDATE METHOD
router.route("/edit/:id").get((req, res) => {
    const id = req.params.id;
    todo.find({}, (err, tasks) => {
        res.render("todoEdit", { todos: tasks, idTask: id });
    });
})
router.post((req, res) => {
    const id = req.params.id;
    todo.findByIdAndUpdate(id, { content: req.body.todo }, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
    });
});

// DELETE METHOD
router.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    todo.findByIdAndRemove(id, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
    });
    });
 
module.exports = router