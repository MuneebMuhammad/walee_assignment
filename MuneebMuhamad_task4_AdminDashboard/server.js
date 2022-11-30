const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const MONGO_URI="mongodb+srv://muneeb121:muneeb121@cluster0.cywt96y.mongodb.net/UniversityAdmin?retryWrites=true&w=majority";
const conn = mongoose.connect(MONGO_URI)

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// const TodoSchema = new mongoose.Schema({
//     todoName: {type: String},
//     finish: {type: Boolean}
// })

const StudentSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cms: {
        type: Number,
        required: true,
        unique: true
    },
    batch: {
        type: Number,
        required: true
    },
    contact: {
        type: String
    },
    todos: {
        type: [{
            todoName: {type: String},
            finish: {type: Boolean}
        }],
    }
})

const AdminModel = mongoose.model('Users', AdminSchema)
const StudentModel = mongoose.model('Students', StudentSchmea)

app.post('/login', async (req, res)=>{
    console.log("in login server function")
    console.log(req.body)
    admin_data = await AdminModel.find({username: req.body.u, password: req.body.p}).select({_id: 0})
    console.log(admin_data)
    if (admin_data.length != 0){
        res.json(true)
    }
    else{
        console.log('not found')
        res.json(false)
    }
})

app.get('/getUsers', async (req, res)=>{
    console.log("now in get user server function")
    usersData = await StudentModel.find({}).select({name: 1, cms: 1, batch: 1, contact: 1, _id: 0})
    console.log(usersData)
    res.json(usersData)
})

app.post('/registerStudent', async(req, res)=>{
    batch = new Date().getFullYear()
    max_cms = await StudentModel.find({}).select({cms: 1, _id: 0}).sort({"cms": -1}).limit(1)
    newUser = new StudentModel({name: req.body.name, cms: ((max_cms[0].cms)+1), batch: (new Date().getFullYear()), contact: req.body.contact})
    await newUser.save()
    res.json(true)
})

app.delete('/deleteStudent/:cms', async(req, res)=>{
    console.log("in student delete server: ", req.params.cms)
    await StudentModel.find({cms: req.params.cms}).deleteOne().exec()
    res.json(true)
})

app.put('/updateStudentInfo', async(req, res)=>{
    await StudentModel.findOneAndUpdate({cms: req.body.cms}, {name: req.body.name, batch: req.body.batch, contact: req.body.contact})
    res.json(true)
})

app.get('/getTodos/:cms', async(req, res)=>{
    console.log("in get todos server: ", req.body)
    studentTodos = await StudentModel.find({cms: req.params.cms}).select({todos: 1, _id: 0})
    res.json(studentTodos[0].todos)
})

app.put('/addTodo/:cms', async(req, res)=>{
    console.log("in add todo server: ", req.body)
    studentData = await StudentModel.findOneAndUpdate({cms: req.params.cms}, {$push: {todos: {finish: false, todoName: req.body.todoName }}})
    res.json("yes")
})

app.put('/changeTodo/:cms', async(req, res)=>{
    console.log("in change todo status server: ", req.params.cms, req.body)
    studentData = await StudentModel.updateOne({cms: req.params.cms, 'todos._id': req.body.todoId}, {'todos.$.finish': !req.body.todoStatus})
    console.log("studentData: ", studentData)
    res.json(studentData)
})

app.put('/deleteTodo/:cms', async(req, res)=>{
    console.log("in delete todo server", req.params.cms, req.body.todoId)
    dataResponse = await StudentModel.updateOne({cms: req.params.cms, "todos.id": req.body.todoId}, {$pull: {todos: {_id: req.body.todoId}}})
    // dataResponse = await StudentModel.find({"todos._id": req.body.todoId})
    res.json(dataResponse)
})

app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
})

