import express from "express";
import { configDotenv } from "dotenv";
import { connetion } from "./confign/mongodbConnection.js";
import router from "./router/userRouter.js";

const app = express();
configDotenv();

connetion();
app.use("/user", router);

app.listen(process.env.PORT, () => {
  console.log(`Port is connected in ${process.env.PORT} `);
});