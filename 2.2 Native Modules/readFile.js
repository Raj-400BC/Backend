const fsread = require("fs");
fsread.readFile('trail.txt','utf8', (err , data)=>{
    if(err) throw err;
    console.log(data);
})


//  If no encoding is specified then the 'raw buffer' is returned.
//  That's why we are using "utf8". 