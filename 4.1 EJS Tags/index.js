import express from "express";
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };

  res.render('index.ejs' , data);
  
  // res.render("index.ejs",
  // {
  //   seconds : data.seconds,
  //   title : data.title,
  //   items : data.items,
  //   htmlContent : data.htmlContent
  // });
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
