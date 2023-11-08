import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({extended:true}));

let bandNameGenerator = (req , res, next ) =>{
    bandName = req.body["street"] + req.body["pet"];
    next();
}

app.use(bandNameGenerator)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req,res)=>{
  // bandName = req.body["street"] + req.body["pet"];         we can also take the key value of the form as this without actually using the above function (line 13-18)
  res.send(`<h1>Welcome to the band</h1><br><br><strong>${bandName}</strong>`)
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});