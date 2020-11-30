var express=require("express"),
	app=express();

app.set("view engine","ejs");

app.get("/home",function(req,res){
	res.render("main.ejs");
})
app.listen(3000,function(req,res){
	console.log("AttainU clone");
});