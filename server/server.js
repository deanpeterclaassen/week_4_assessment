const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('client'))
const { getCompliment, deleteGoal } = require('./controller')
const { getFortune } = require("./controller")
const { addGoal, getGoals} = require("./controller")

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune)

app.get("/api/goals", getGoals)

app.post("/api/goals", addGoal)

// app.put("/api/goals:id", editGoal)

app.delete("/api/goals", deleteGoal)

const port = process.env.PORT || 4000
app.listen(port, () => console.log("Server running on 4000"))
// include and initialize the rollbar library with your access token
