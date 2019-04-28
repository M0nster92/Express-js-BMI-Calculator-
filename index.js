const express=require("express");
const bodyP=require("body-parser");
const app=express();
app.use(bodyP.urlencoded({extended:true}));

  app.get("/", function(req, res){
    res.sendfile(__dirname +"/index.html");
  });

  app.post("/", function(req, res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);

    var bmi= w /(h * h);

    res.send("Your BMI is:"+bmi);
  });

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
