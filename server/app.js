var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")

var songsRouter = require("./routes/songs")
var genureRouter = require("./routes/genure")
var genureModel = require("./model/genure")
var songModel = require("./model/song")

//const dburl = "mongodb+srv://deepu:deepu@cluster0-qvi3q.mongodb.net/test?retryWrites=true";

const dburl = "mongodb://127.0.0.1:27017/mymongodb";
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use("/song",songsRouter)
app.use("/genure",genureRouter)
app.use(express.static((__dirname).replace("server","/")+'client/dist/client'))


mongoose.connect(dburl,function(err){
    if(err)
    console.log("Database connection error"+err)
})

app.get("/home",function(req,res){
    songModel.find({},function(err,result){
        res.send(result)
    })  
})

port = process.env.PORT || 8000;
app.listen(port,function(req,res){
    console.log("Server Started Successfully")
})