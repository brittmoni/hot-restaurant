
var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var customers = [
  {
    id: "1",
    name: "John Smith",
    phone: 706678907,
    email: "john.smith@gmail.com"
  },
  {
    id: "2",
    name: "Sarah Grey",
    phone: 70643355,
    email: "sarah.grey@gmail.com"
  },
  {
    id: "3",
    name: "Bob Kennedy",
    phone: 70324535,
    email: "bob@gmail.com"
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation-form.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation-view.html"));
});

app.get("/api/customers", function(req, res) {
  return res.json(customers);
});

app.get("/api/customers/:customer", function(req, res) {
  var chosen = req.params.customers;

  console.log(chosen);

  for (var i = 0; i < customers.length; i++) {
    if (chosen === customers[i].routeName) {
      return res.json(customers[i]);
    }
  }

  return res.json(false);
});

app.post("/api/customers", function(req, res) { 
  var newCustomer = req.body;

  newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);

  characters.push(newCustomer);

  res.json(newCustomer);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});