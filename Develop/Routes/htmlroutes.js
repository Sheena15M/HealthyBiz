const router = require("express").Router()
const path = require("path")


router.get("/exercise", (req, res)=> {
    console.log("hree")
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get('/stats',function(req,res){
    res.sendFile(path.join(__dirname,'../public/stats.html'));
});

