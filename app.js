const express = require("express");
const path = require("node:path");

const messages = require("./models/db");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.get("/:username", (req, res) => {
  const { username } = req.params;

  const userMessages = messages.filter((message) => message.user == username);

  res.render("messages", { username: username, messages: userMessages });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}...`);
});
