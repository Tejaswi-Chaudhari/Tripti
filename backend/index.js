import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import env from "dotenv"

const app = express();

app.use(express.json());
app.use(cors())

const uri = "mongodb+srv://hackninjas:wtGG4kU5mAHfgXSz@cluster0.yspj4.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useUnifiedTopology: true
}).then(() =>
    console.log("DataBase connected"))
    .catch(err => console.log(err));


//database schema of user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//model
const User = new mongoose.model("User", userSchema)


//Routes
app.post("/Login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user })
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }
        else {
            res.send({ message: "User not registered" })
        }
    })
    // res.send("Login API working")
})

app.post("/Register", async (req, res) => {
    console.log(req.body);
    try {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email }).exec();

        if (user)

            return res.status(200).json({ message: "User already registered" });

        const newUser = await User.create({
            name,
            email,
            password
        });
        res.send({ message: "Successfully Registered, Please login now." })
        res.status(201).json({
            status: 'success',
            newUser
        })


    } catch (err) {

        res.status(500).json({
            status: 'error',
            message: err
        });
    }

})
app.listen(9002, () => {
    console.log("Be started at port 9002")
})

