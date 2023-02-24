import "reflect-metadata";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import "reflect-metadata"
import myDataSource from "./app-data-source.js"
import { Planets } from "./entities/planet.entity.js";

dotenv.config({ path: "../env" });

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const planets = await myDataSource.getRepository(Planets).find();
    console.log('res', planets)
    res.status(200).json({ test: "json ok", response: planets });
  } catch (err) {
    throw `Message: ${err}`;
  }
});

// app.use("/api", API);

app.listen(process.env.PORT, () => {
  console.info("Server started");
});
