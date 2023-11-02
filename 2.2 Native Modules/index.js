const fs  = require("fs");

fs.writeFile("trail.txt" , "That's how we do it" , (err)=>{
    if (err) throw err;
    console.log("The file has been saved");
});

fs.readFile("trail.txt" , "utf8", (err , data)=>{
    if(err) throw err;
    console.log(data);
})

// - We are using 'File System' here to writeFile and readFile.
// - In 'index.js' , we are first creating the .txt file then we are accessing it.
// - But when we run 'readFile.js' , we can see error . That error is comming because we are trying to access the content 'trail.txt' but we have not yet created that.