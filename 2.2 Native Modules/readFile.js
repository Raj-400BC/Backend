const fsread = require("fs");
fsread.readFile('trail.txt' , (err , data)=>{
    if(err) throw err;
    console.log(data);
})