import express from "express"
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));

app.get('/' , (req,res)=>{
    res.sendFile(__dirname + '/public/SignUp.html');
})

app.post('/check' , (req , res)=>{
    if (fs.existsSync(`${req.body.email}.txt`)) {
       
        res.send(`<h1>Please choose a different mail</h1>`);
    }
    else {fs.writeFile(`${req.body.email}.txt` , req.body.password , (err)=>{
        if (err) throw err;
        console.log("The file has been saved");
    });
    res.send(`<h1>Welcome ${req.body.name}.</h1>`);
    }
})

app.listen(port , ()=>{
    console.log(`Server running at port ${port}.`)
})