const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.set("view engine","ejs")
const date=require(__dirname + "/date.js");
//  const request=require("request");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var worklist=[];
var items=[];
app.get("/",function(req,res)
{


let day=date();

//
res.render("list",{ listtitle:day ,newitems:items});


});
 app.post("/",(req,res)=>
{
    let item=  req.body.newItem;
console.log(req.body);
if(req.body.list==="Work-List")
{
   
    worklist.push(item);
    res.redirect("/work");
}

else
         {
      items.push(item);
      res.redirect("/");
        }
});
app.get("/work",(req,res)=>
{
    res.render("list",{ listtitle:"Work-List" ,newitems:worklist});

});

app.get("/about",(req,res)=>
{

    res.render("about");
})

app.listen(3000,function()
    {
console.log("Server started on port 3000");
    }
);