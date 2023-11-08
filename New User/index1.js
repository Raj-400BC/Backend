import express from "express"
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3100;
const __dirname = dirname(fileURLToPath(import.meta.url));
const __userFile = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));

app.get('/' , (req,res)=>{
    res.sendFile(__dirname + '/public/Login.html');
})

app.post('/check' , (req , res)=>{
    // Next working  point : -- checking if a txt file is present with the 'email' name from login page in the server or not.
    if (__userFile + `/public/${req.body.email}` === __dirname + '/Backend/New User'){
        res.send('File is present')
    }  
    else{
        res.send('File Missing');
    }
})

app.listen(port , ()=>{
    console.log(`Server running at port ${port}.`)
})