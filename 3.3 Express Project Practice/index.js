import express from "express";
const app = express();
const port = 3000;

app.get('/' , (req,res)=>{
    res.send("<h1>Welcome to the Home page</h1>");
});

app.get('/About',(req,res) =>{
    res.send("<h1>My Name Is Mayur</h1>")
})

app.get('/Contact' , (req,res)=>{
    res.send("<input placeholder=9649598367></input>")
})

app.listen(port , ()=>{
    console.log(`Port is running at ${port}.`)
})