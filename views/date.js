
module.exports=getdate;



function getdate()
{
    let today=new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


let day=today.toLocaleDateString("en-US",options);
return day;
}