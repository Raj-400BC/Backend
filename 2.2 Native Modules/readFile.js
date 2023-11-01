const fsread = require("fs");
fsread.readFile('trail.txt' ,"utf8", (err , data)=>{
    if(err) throw err;
    console.log(data);
})