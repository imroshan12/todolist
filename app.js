const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", 'ejs');
var items = [];

app.get("/", (req, res) => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var date = new Date();
  var today = date.toLocaleDateString("en-US", options);
  res.render('index', {currentDate: today, listItems: items});
  // res.send("<h1>" + date.toLocaleDateString("en-US", options));
})

app.post("/", (req, res)=>{
  var listItem = req.body.todo;
  items.push(listItem);
  res.redirect("/");
  // res.send("Successfully submitted");
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running..");
})
