import express from "express";
const app = express();
// const port = 3000;
app.get('/',(req,res) => {
    // console.log(req.rawHeaders); 
    res.send('Hello World, this is Mayur - A faster leaning men');
    // res.send("<h1>Hello Mayur </h1> <br> <h2>World this side</h2>")
})
app.get('//',(req,res) => {
    // console.log(req.rawHeaders); 
    // res.send('Hello World, this is Mayur - A faster leaning men');
    res.send("<h1>Hello</h1> <br> <h2>World this side</h2>")
})


app.listen(port ,() =>{
    console.log(`Server is running at port ${port}.`)
})