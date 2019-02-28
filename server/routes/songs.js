var express = require("express")
var mongoose = require("mongoose")
var expressFileUpload = require("express-fileupload")

var genureModel = require("../model/genure")
var songModel = require("../model/song")

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



router.get("/detail/:songLink",function(req,res){
    songModel.find({songLink:req.params.songLink},function(err,result){
        //res.render("songAdd",{data:result,msgData:data})
        //res.render("songDetail",{songData:result})
        res.send(result)
    })
})


router.post("/add",function(req,res){
    let songLink = (req.body.songName).replace(/ /g,"_");
    //console.log(songLink)
    let fileObj = req.files.songImage;
    fileObj.mv((__dirname).replace("routes","/")+"public/images/song/"+songLink+"_"+fileObj.name)
    genureModel.find({_id:req.body.songGenure},function(err,genureResult){
        //console.log(genureResult)
        const newSong = new songModel({
            songLink:songLink,songName:req.body.songName,
            songAlbum:req.body.songAlbum,
            songDesc:req.body.songDesc,
            songImage:songLink+"_"+fileObj.name,
            songArtist:req.body.songArtist,
            genureId:genureResult._id,
            songGenure:req.body.songGenure,
            songYoutubeLink:req.body.songYoutubeLink});
       
        newSong.save(function(err){
            if(err)
            console.send("error while inserting"+err)
            else
            res.redirect("/song/add/success")
        })
    })
})

router.get("/delete/:songLink",function(req,res){
    songModel.deleteOne({songLink:req.params.songLink},function(err){
        if(err){
            res.send("deletion error"+err)
        }
        else
        res.redirect("/")
    })
})


router.post("/edit/:songLink",function(req,res){
    let songLink = req.params.songLink;
    let newSongLink = (req.body.songName).replace(/ /g,"_");
    //console.log(songLink)
    let fileObj = req.files.songImage;
    fileObj.mv((__dirname).replace("routes","/")+"public/images/song/"+songLink+"_"+fileObj.name)

    genureModel.find({_id:req.body.songGenure},function(err,genureResult){
        
        songModel.findOne({songLink:songLink},function(error,songObj){
            songObj.songLink=newSongLink;
            songObj.songName=req.body.songName;
            songObj.songAlbum=req.body.songAlbum;
            songObj.songDesc=req.body.songDesc;
            songObj.songImage=newSongLink+"_"+fileObj.name,
            songObj.songArtist=req.body.songArtist;
            songObj.genureId=genureResult._id;
            songObj.songGenure=req.body.songGenure;
            songObj.songYoutubeLink=req.body.songYoutubeLink;
           
            songObj.save(function(err){
                if(err)
                console.send("error while inserting"+err)
                else
                res.redirect("/song/detail/"+newSongLink)
            })

        });

    })
})

module.exports=router;