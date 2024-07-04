import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Server is listening for requests on port ${PORT}`);
});
