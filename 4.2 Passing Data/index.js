import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3100;

let emptyFields = "Correct data not provided";
 let filedFields =  `Total number of character are `
 let startH1  = `Please Enter details`
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
    res.render('index.ejs',{
      heading : startH1,
  })
});

app.post("/submit", (req, res) => {
   
  
  const tlen = req.body.fName.length + req.body.lName.length;
  if(req.body.fName === "" && req.body.lName === ""){
    res.send(`<h1>${emptyFields}</h1>`);
    }
  else {
    req.body.input.style.visibility.none
    res.render('index.ejs',{
    heading : `${filedFields} ${tlen}` ,
    })
    }
  // res.send(`Nice job`);
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
