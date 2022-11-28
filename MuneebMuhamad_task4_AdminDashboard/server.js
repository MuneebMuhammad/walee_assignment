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
        type:"string",
        required: true
    },
    password: {
        type:"string",
        required: true
    }
})

const AdminModel = mongoose.model('Users', AdminSchema)

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

app.get('/getUsers', (req, res)=>{
    console.log("in get user server function")
})

app.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
})