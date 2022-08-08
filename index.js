require('dotenv').config()
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Contact = require("./models/contact");
const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(express.static("build"));
app.use(cors());

morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/info", (req, res) => {
  Contact.find({}).then((contacts) => {
    res.write(`Phonnebook has info for ${contacts.length} people. \n`);
    res.write(`${new Date()}`);
    res.end();
  })
});

app.get("/api/persons", (req, res) => {
  Contact.find({}).then((contacts) => {
    res.json(contacts);
    res.end();
  })
});

app.get("/api/persons/:id", (req, res) => {
  Contact.findById(req.params.id).then((contact) => {
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).end();
    }
  })
})

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (body.name === undefined && body.phoneNumber === undefined) {
    return res.status(400).json({ error: "content missing" });
  }

  const person = new Contact({
    name: body.name,
    phoneNumber: body.phoneNumber,
  })

  person.save().then(savedPerson => {
    res.json(savedPerson);
  })
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
