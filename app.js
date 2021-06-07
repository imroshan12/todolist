const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const date = require(__dirname + '/date.js');
// const date = require('./date.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');
let items = [];
let workItems = [];

app.get("/", (req, res) => {
 const today = date.today;
  res.render('index', {listTitle: today, listItems: items});
  // res.send("<h1>" + date.toLocaleDateString("en-US", options));
})

app.get("/work", (req, res)=>{
  res.render('index', {listTitle: "Work", listItems: workItems})
})

app.post("/", (req, res)=>{
  var listItem = req.body.newItem;
  if(req.body.button == "Work")
  {
    workItems.push(listItem);
    res.redirect("/work");
  }
  else
  {
    items.push(listItem);
    // for(var i = 0; i < items.length; i++)
    // console.log(items[i] + " ");
    res.redirect("/");
    // res.send("Successfully submitted");
  }

})


app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running..");
})
