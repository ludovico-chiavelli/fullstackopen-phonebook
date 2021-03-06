const { response } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(express.static("build"));
app.use(cors());

morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/info", (req, res) => {
  res.write(`Phonnebook has info for ${persons.length} people. \n`);
  res.write(`${new Date()}`);
  res.end();
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post("/api/persons", (req, res) => {
  const randomID = Math.floor(Math.random() * 50);

  let newPerson = {};

  const personsNames = persons.map((person) => person.name);

  // console.log(req.body.name)
  // console.log(personsNames)
  // console.log(personsNames.includes(req.body.name))

  if (!req.body.hasOwnProperty("name")) {
    res.status(500);
    res.send({ error: "The object has no name property" });
  } else if (!req.body.hasOwnProperty("number")) {
    res.status(500);
    res.send({ error: "The object has no number property" });
  } else if (personsNames.includes(req.body.name)) {
    res.status(500);
    res.send({ error: "The person already exists" });
  } else {
    newPerson = {
      id: randomID,
      name: req.body.name,
      number: req.body.number,
    };
    persons.push(newPerson);

    res.send(newPerson);
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
