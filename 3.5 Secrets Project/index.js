import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/check',(req,res)=>{
    if(req.body.password != "mayur"){
        res.send(`<h1>Password Wrong</h1>`);
        console.log(`Incorrect password`);
    }
    else{
        res.send(`correct password`);
    }
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}.`)
})