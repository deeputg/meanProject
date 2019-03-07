var express = require("express")
var mongoose = require("mongoose")
var expressFileUpload = require("express-fileupload")

var genureModel = require("../model/genure")

var router = express.Router();

router.use(expressFileUpload());

const dburl = 
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
"mongodb://127.0.0.1:27017/mymongodb";
mongoose.connect(dburl,function(err){
    if(err)
    console.log("db connection error")
})

router.get("",function(req,res){
    genureModel.find({},function(err,result){
        res.send(result)
    })
})

router.post("/add",function(req,res){
    console.log("entered in post")
    let genureLink = (req.body.genureName).replace(/ /g,"_");
    let fileObj = req.files.genureImage;
    fileObj.mv((__dirname).replace("routes","/")+"public/images/genure/"+genureLink+"_"+fileObj.name)
    console.log("file uploade")
    genureModel.create({genureLink:genureLink,genureName:req.body.genureName,genureDesc:req.body.genureDesc,genureImage:genureLink+"_"+fileObj.name},function(err,result){
        console.log("create function")
        if(err){
            console.log("error while inserting"+err)
            res.status(204).end();
        }
        else
        res.redirect("/genure/add/success")
    })
})

module.exports=router;