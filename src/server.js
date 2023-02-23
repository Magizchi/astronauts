import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send("Nodejs Started");
  } catch (err) {
    throw `Message: ${err}`;
  }
});

app.listen(3001, () => {
  console.log("Server started");
});
