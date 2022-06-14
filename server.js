import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("ji");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
