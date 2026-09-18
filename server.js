import express from "express";

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get("/hello", (req, res) => {
  res.send("I am taking the COMPSCI 3260 course.");
});

app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.get("/repeat/:word", (req, res) => {
  const { word } = req.params;
  res.send(`${word} ${word} ${word}`);
});

app.get("/count", (req, res) => {
  const from = req.query.from ?? "1";
  const to = req.query.to ?? "10";
  res.send(`Counting from ${from} to ${to}.`);
});

app.get("/api/info", (req, res) => {
  res.json({
    course: "COMPSCI 326",
    unit: 2,
    week: 1,
  });
});

app.get("/api/error", (req, res) => {
  res.status(400).send("Bad request");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
