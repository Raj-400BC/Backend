import express from "express"
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3100;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));

app.get('/' , (req,res)=>{
    res.sendFile(__dirname + '/public/Login.html');
})

app.post('/check' , (req , res)=>{
    // fs.appendFile('${req.body.email}.txt' , req.body.password )
    // fs.writeFile(`${req.body.email}.txt` , req.body.password , (err)=>{
    //     if (err) throw err;
    //     console.log("The file has been saved");
    // });
    res.send('file created');
})

app.listen(port , ()=>{
    console.log(`Server running at port ${port}.`)
})