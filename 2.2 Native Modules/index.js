const fs  = require("fs");

fs.writeFile("trail.txt" , "That's how we do it" , (err)=>{
    if (err) throw err;
    console.log("The file has been saved");
});

fs.readFile("trail.txt" , "utf8", (err , data)=>{
    if(err) throw err;
    console.log(data);
})