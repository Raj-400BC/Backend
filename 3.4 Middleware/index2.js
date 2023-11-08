import express from "express";
import morgan from "morgan"; // Middleware used for loggin category

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("Hello Mayur");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
