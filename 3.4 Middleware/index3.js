import express from "express";

const app = express();
const port = 3000;
// const url = '/';

 
let logger = (req, res , next) => {
  console.log("requested url : " + req.url);
  console.log("requested method : " + req.method);
  next();
} 

app.use(logger);

app.get('//', (req, res) => {
  res.send(`Hello World`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
