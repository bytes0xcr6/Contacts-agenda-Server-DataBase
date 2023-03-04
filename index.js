require("dotenv").config();
const express = require("express");
const app = express();
const {
  addContact,
  getContacts,
  deleteContacts,
} = require("./src/mysql_conector");
const PORT = process.env.PORT || 3000;
let allContacts;

// Settear de donde vienen los archivos views
app.set("views", "./views");

// Setter for the view engine (pug) to renderize templates/views
app.set("view engine", "pug");

// Configure static files (Where they come from)
app.use(express.static("./views"));
app.use(express.static("./src"));
app.use(express.static("./css"));

app.get("/", (req, res) => {
  allContacts = getContacts();
  res.render("index", { titule: "Agenda!", contacts: allContacts });
});

app.get("/add/:name/:number", (req, res) => {
  const name = req.params.name;
  const number = req.params.number;

  addContact(name, number);
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;

  deleteContacts(id);
  res.redirect("/");
  location.reload();
});

app.listen(PORT);
