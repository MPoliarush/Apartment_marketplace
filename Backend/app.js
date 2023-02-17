const express =  require('express')
const mongoose = require('mongoose')
const router = require('./routs/apartments-routes')
const app = express()
const cors = require('cors');

const PORT = 8000;
// app.use('/', (req,res,next)=>{
//     res.send('This is starting app')
// })
mongoose.set('strictQuery', true);

app.use(express.json())

app.use(cors());
app.options('*', cors());

app.use('/apartments', router)





mongoose
    .connect(
        "mongodb+srv://admin:vofFFRMob457Cad9@cluster0.zbwbrds.mongodb.net/Apartment-marketplace?retryWrites=true&w=majority"
    )
    .then( ()=>console.log("Connected to DB"))
    .then (()=>{
        app.listen(PORT);
    }).catch (err=>{
        console.log(err)
    })


    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });



//vofFFRMob457Cad9